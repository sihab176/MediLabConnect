import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"



export const GET=async(req,{params})=>{
    try {
        const reviewCollection=dbConnect("reviews")
        const reviews=await reviewCollection.find().toArray()
        return NextResponse.json(reviews)
    } catch (error) {
        return NextResponse.json({success:false, message:error.message},{status:500})
    }
}


export const POST=async(req,{params})=>{

    try {
        const data= await req.json()
        const reviewCollection=dbConnect("reviews")
        const result= await reviewCollection.insertOne(data)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}

