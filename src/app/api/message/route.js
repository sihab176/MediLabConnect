import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"



export const GET=async(req)=>{
    try {
        const messageCollection=await dbConnect("messages")
        const result= await messageCollection.find().toArray()
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

export  const POST=async(req)=>{
    
    try {
        const data=await req.json()
        const messageCollection=await dbConnect("messages")
        const result= await messageCollection.insertOne(data)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}
