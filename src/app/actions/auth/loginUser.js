// import dbConnect from "@/lib/dbConnect"
// import bcrypt from "bcrypt";

// export const LoginUser=async(payload)=>{
//     const {email, password}=payload
//     const userCollection=dbConnect("userInfo")
//     const user= await userCollection.findOne({email})

//     const isPasswordOk =await bcrypt.compare(password , user.password)
//     if(!isPasswordOk) return null
//     if(!user) return null
//     return user
// }


//! ------------------------------------- updated code ----------------------->
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const LoginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = dbConnect("userInfo");

  // 1️⃣ আগে user খোঁজো
  const user = await userCollection.findOne({ email });

  // ❌ user নাই
  if (!user) return null;

  // 2️⃣ password match
  const isPasswordOk = await bcrypt.compare(password, user.password);

  if (!isPasswordOk) return null;

  // 3️⃣ password বাদ দিয়ে safe user পাঠাও
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role, // 🔥 admin / user
  };
};
