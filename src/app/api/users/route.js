import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const GET= async()=>{
    try {
        const collection=dbConnect("userInfo")
        const users= await collection.find().toArray()

        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
    }
}