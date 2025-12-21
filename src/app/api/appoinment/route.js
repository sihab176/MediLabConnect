import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"


export const GET= async()=>{
    try {
        const appoinmentData=dbConnect("appoinmets")
        const users= await appoinmentData.find().toArray()

        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
    }
}


export const POST= async(req ,{params})=>{
    const appoinmentData=await req.json()
    const appoinmentCollection=dbConnect("appoinmets")
    const result=await appoinmentCollection.insertOne(appoinmentData)
    return NextResponse.json(result)
}