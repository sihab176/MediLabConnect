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

// export const PUT = async (req, { params }) => {
//   try {
//     const { id } = params; // 👈 URL থেকে id
//     const { updatedData } = await req.json();

//     const collection = await dbConnect("doctors");

//     const result = await collection.updateOne(
//       { _id: new ObjectId(id) },
//       {
//         $set: {
//           ...updatedData,
//           updatedAt: new Date(),
//         },
//       }
//     );

//     return NextResponse.json({
//       success: true,
//       modifiedCount: result.modifiedCount,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// };


export const PUT = async (req, { params }) => {
  try {
    // ✅ URL থেকে id নিচ্ছি
    const { id } = params;

    // 🔒 ID valid কিনা চেক (optional but recommended)
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    const { updatedData } = await req.json();

    // ❌ updatedData এর ভিতর থেকে _id বাদ দিচ্ছি
    const { _id, ...safeData } = updatedData;

    const collection = await dbConnect("doctors");

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...safeData,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({
      success: true,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    const collection = await dbConnect("doctors");

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
