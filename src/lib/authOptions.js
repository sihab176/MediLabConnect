import { LoginUser } from "@/app/actions/auth/loginUser"
import dbConnect from "./dbConnect"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions={
    providers: [
  CredentialsProvider({

    name: "Credentials",

    credentials: {
      email: { label: "email", type: "email", placeholder: "write email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

      const user = await LoginUser(credentials)
      console.log( "user================>",user);
      if (user) {

        return user
      } else {

        return null
      }
    }
  })
],
page : {
    signIn: "/login"
},
callback:{
    async singIn({user,account, profile,email ,credentials}){
        if(account){
            const {providersAccountId, provider}=account
            const {email: user_email,image,name}=user
            const userCollection=dbConnect("userInfo")
            const isExisted= await userCollection.findOne({providersAccountId})
            if(!isExisted){
                const payload={providersAccountId, provider,email:user_email , image ,name}
                await userCollection.insertOne(payload)
            }
        }
        
        return true
    }
}
}