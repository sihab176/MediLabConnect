import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
  try {
    const { bloodGroup, location, availability } = await request.json();

    if (!bloodGroup || !location) {
      return NextResponse.json(
        { error: "Blood group and location are required" },
        { status: 400 }
      );
    }

    const bloodCollection = dbConnect("bloodBanks");

    // 🔹 Step 1: Location অনুযায়ী DB query
    const query = { location };

    // 🔹 Step 2: Availability → urgent boolean mapping
    if (availability === "Urgent Need") {
      query.urgent = true;
    } else if (availability === "Available") {
      query.urgent = false;
    }

    const banks = await bloodCollection.find(query).toArray();
    // console.log("bank  arry", banks)

    // 🔹 Step 3: Blood group অনুযায়ী process
    const results = banks
      .map((bank) => {
        const count = parseInt(bank.bloodTypes?.[bloodGroup] || 0);

        if (count <= 0) return null;

        let status = "Available";
        if (count <= 2) status = "Urgent Need";
        else if (count <= 5) status = "Low Stock";

        return {
          id: bank._id,
          name: bank.bloodBankName,
          address: bank.address,
          phone: bank.phone,
          hours: `${bank.openingHours} - ${bank.closingHours}`,
          verified: bank.verified,
          urgent: bank.urgent,
          bloodGroup,
          bloodTypes:bank.bloodTypes,
          count,
          status,
        };
      })
      .filter(Boolean);

    return NextResponse.json({
      success: true,
      count: results.length,
      bloodGroup,
      location,
      availability,
      banks: results,
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
