import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"


export const GET =async(req,{params})=>{
    const doctorsCollection=dbConnect("doctors")
    const result = await doctorsCollection.find().limit(8).toArray()
    return NextResponse.json(result)
}

export const POST =async(req,{params})=>{
    const data= await req.json()
    const doctorsCollection=dbConnect("doctors")
    const result= await doctorsCollection.insertOne(data)
    return NextResponse.json(result)
}