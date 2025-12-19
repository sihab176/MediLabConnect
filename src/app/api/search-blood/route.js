// src/app/api/search-blood/route.js
import { NextResponse } from "next/server";

// Mock database of blood banks
const bloodBanksDatabase = [
  {
    id: 1,
    name: "Philadelphia General Hospital Blood Bank",
    address: "1800 Lombard St, Philadelphia, PA 19146",
    location: "Philadelphia",
    inventory: {
      "A+": "Available",
      "A-": "Low Stock",
      "B+": "Available",
      "B-": "Urgent Need",
      "AB+": "Available",
      "AB-": "Low Stock",
      "O+": "Available",
      "O-": "Urgent Need",
    },
  },
  {
    id: 2,
    name: "Red Cross Blood Donation Center",
    address: "701 Arch St, Philadelphia, PA 19106",
    location: "Philadelphia",
    inventory: {
      "A+": "Available",
      "A-": "Available",
      "B+": "Low Stock",
      "B-": "Available",
      "AB+": "Urgent Need",
      "AB-": "Available",
      "O+": "Available",
      "O-": "Low Stock",
    },
  },
  {
    id: 3,
    name: "Temple University Hospital Blood Bank",
    address: "3401 N Broad St, Philadelphia, PA 19140",
    location: "Philadelphia",
    inventory: {
      "A+": "Available",
      "A-": "Urgent Need",
      "B+": "Available",
      "B-": "Low Stock",
      "AB+": "Available",
      "AB-": "Urgent Need",
      "O+": "Low Stock",
      "O-": "Available",
    },
  },
  {
    id: 4,
    name: "New York Blood Center",
    address: "310 E 67th St, New York, NY 10065",
    location: "New York",
    inventory: {
      "A+": "Available",
      "A-": "Available",
      "B+": "Available",
      "B-": "Available",
      "AB+": "Low Stock",
      "AB-": "Low Stock",
      "O+": "Available",
      "O-": "Urgent Need",
    },
  },
  {
    id: 5,
    name: "Boston Medical Center Blood Bank",
    address: "1 Boston Medical Center Pl, Boston, MA 02118",
    location: "Boston",
    inventory: {
      "A+": "Available",
      "A-": "Low Stock",
      "B+": "Urgent Need",
      "B-": "Available",
      "AB+": "Available",
      "AB-": "Available",
      "O+": "Low Stock",
      "O-": "Urgent Need",
    },
  },
];

// ✅ POST method (App Router way)
export async function POST(request) {
  try {
    const { bloodGroup, location, availability } = await request.json();

    // Validation
    if (!bloodGroup || !location) {
      return NextResponse.json(
        { error: "Blood group and location are required" },
        { status: 400 }
      );
    }

    // Location অনুযায়ী filter
    let filteredBanks = bloodBanksDatabase.filter(
      (bank) => bank.location === location
    );

    // Blood group অনুযায়ী map
    let results = filteredBanks.map((bank) => ({
      name: bank.name,
      address: bank.address,
      status: bank.inventory[bloodGroup] || "Not Available",
    }));

    // Availability filter
    if (availability && availability !== "All") {
      results = results.filter(
        (bank) => bank.status === availability
      );
    }

    // Not Available বাদ
    results = results.filter(
      (bank) => bank.status !== "Not Available"
    );

    // Fake delay (optional)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      count: results.length,
      bloodGroup,
      location,
      availability,
      banks: results,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
