import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const POST= async(req ,{params})=>{
    const appoinmentData=await req.json()
    const appoinmentCollection=dbConnect("appoinmets")
    const result=await appoinmentCollection.insertOne(appoinmentData)
    return NextResponse.json(result)
}