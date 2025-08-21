import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req,{params})=>{
    try {
        const p= await params;
        const query= {_id : new ObjectId(p?.id)}
        const result =await dbConnect("doctors").findOne(query)
        return NextResponse.json(result)
    } catch (error) {
       console.log(error); 
    }
}