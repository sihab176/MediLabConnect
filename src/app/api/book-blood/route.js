import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"



export const GET =async(req,{params})=>{
    const bloodsCollection=dbConnect("bookBloods")
    // query 
    const {searchParams}= new URL(req.url)

    const limit=parseInt(searchParams.get("limit")) || 0;

    const result = await bloodsCollection.find({}).sort({_id:-1}).limit(limit).toArray()
    return NextResponse.json(result)
}

export const POST =async(req,{params})=>{
    const data= await req.json()
    const bloodsCollection=dbConnect("bookBloods")
    const result= await bloodsCollection.insertOne(data)
    return NextResponse.json(result)
}

export const PUT=async(req)=>{
    try {
        const {id,status}=await req.json()
        if(!id || !status){
            return NextResponse.json({error:"Invalid data"}, {status:400})
        }

        const bloodsCollection=dbConnect("bookBloods")
        const result= await bloodsCollection.updateOne(
            {_id:new ObjectId(id) },
    {$set:{
        status,
        updatedAt:new Date()
    }})
    return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}

