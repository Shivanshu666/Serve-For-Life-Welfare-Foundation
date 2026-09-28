import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/model/Donation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { amount, name, email, phone } = body;

    const donationAmount = Number(amount);

    // Validate amount
    if (
      !Number.isFinite(donationAmount) ||
      donationAmount <= 0 ||
      !Number.isInteger(donationAmount)
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid donation amount.",
        },
        { status: 400 }
      );
    }

    // Maximum donation allowed through this form
    if (donationAmount > 1000000) {
      return NextResponse.json(
        {
          success: false,
          error: "Maximum donation amount is ₹10,00,000.",
        },
        { status: 400 }
      );
    }

    // Validate donor information
    if (!name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required.",
        },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    // Connect MongoDB
    await connectDB();

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: donationAmount * 100,
      currency: "INR",
      receipt: `donation_${Date.now()}`,
      notes: {
        donor_name: name.trim(),
        donor_email: email.trim(),
        donor_phone: phone.trim(),
      },
    });

    // Save donation in MongoDB
    const donation = await Donation.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      amount: donationAmount,
      currency: "INR",
      razorpayOrderId: order.id,
      status: "created",
    });

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      donationId: donation._id,
    });
  } catch (error) {
    console.error("Create Donation Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to create donation order.",
      },
      { status: 500 }
    );
  }
}