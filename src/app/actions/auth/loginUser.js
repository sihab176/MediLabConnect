import dbConnect from "@/lib/dbConnect"
import bcrypt from "bcrypt";

export const LoginUser=async(payload)=>{
    const {email, password}=payload
    const userCollection=dbConnect("userInfo")
    const user= await userCollection.findOne({email})

    const isPasswordOk =await bcrypt.compare(password , user.password)
    if(!isPasswordOk) return null
    if(!user) return null
    return user
}