import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"




export const DELETE=async(req,{params})=>{ 
 try {
    const {id}= params 
    const collection= await dbConnect("messages")
    const result= await collection.deleteOne({
        _id: new ObjectId(id)
    })
    return NextResponse.json({success: true, deletedCount: result.deletedCount})
 } catch (error) {
     return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
 }
}