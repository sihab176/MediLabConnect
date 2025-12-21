import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"



export const GET =async(req,{params})=>{
    const bloodsCollection=dbConnect("bookBloods")
    const result = await bloodsCollection.find({}).sort({_id:-1}).limit(7).toArray()
    return NextResponse.json(result)
}

export const POST =async(req,{params})=>{
    const data= await req.json()
    const bloodsCollection=dbConnect("bookBloods")
    const result= await bloodsCollection.insertOne(data)
    return NextResponse.json(result)
}