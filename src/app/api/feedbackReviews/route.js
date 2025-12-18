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

export const PATCH = async (request) => {
  const { reviewId, action, userEmail } = await request.json();
//   const db = await dbConnect();
  const reviewsCollection = dbConnect("reviews");
  console.log(reviewId, action,userEmail)
  const { ObjectId } = require("mongodb");

  try {
    // Find the review
    const review = await reviewsCollection.findOne({
      _id: new ObjectId(reviewId),
    });

    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    // Check if user is trying to like/dislike their own review
    if (review.userEmail === userEmail) {
      return NextResponse.json(
        { error: "You cannot like/dislike your own review" },
        { status: 403 }
      );
    }

    // Initialize arrays if they don't exist
    const likedBy = review.likedBy || [];
    const dislikedBy = review.dislikedBy || [];

    let updateQuery = {};

    if (action === "like") {
      const hasLiked = likedBy.includes(userEmail);
      const hasDisliked = dislikedBy.includes(userEmail);

      if (hasLiked) {
        // Remove like
        updateQuery = {
          $pull: { likedBy: userEmail },
          $inc: { likes: -1 },
        };
      } else {
        // Add like
        updateQuery = {
          $addToSet: { likedBy: userEmail },
          $inc: { likes: 1 },
        };

        // If user previously disliked, remove dislike
        if (hasDisliked) {
          updateQuery.$pull = { dislikedBy: userEmail };
          updateQuery.$inc.dislikes = -1;
        }
      }
    } else if (action === "dislike") {
      const hasLiked = likedBy.includes(userEmail);
      const hasDisliked = dislikedBy.includes(userEmail);

      if (hasDisliked) {
        // Remove dislike
        updateQuery = {
          $pull: { dislikedBy: userEmail },
          $inc: { dislikes: -1 },
        };
      } else {
        // Add dislike
        updateQuery = {
          $addToSet: { dislikedBy: userEmail },
          $inc: { dislikes: 1 },
        };

        // If user previously liked, remove like
        if (hasLiked) {
          updateQuery.$pull = { likedBy: userEmail };
          updateQuery.$inc.likes = -1;
        }
      }
    }

    // Update the review
    const result = await reviewsCollection.updateOne(
      { _id: new ObjectId(reviewId) },
      updateQuery
    );

    return NextResponse.json({
      message: "Updated successfully",
      result,
    });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};