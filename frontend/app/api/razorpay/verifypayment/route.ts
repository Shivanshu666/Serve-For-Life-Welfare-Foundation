import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { connectDB } from "@/lib/mongodb";
import { razorpay } from "@/lib/razorpay";
import Donation from "@/model/Donation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing payment information.",
        },
        { status: 400 }
      );
    }

    // Generate expected signature
    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    // Compare signatures safely
    const isValid =
      generatedSignature.length === razorpay_signature.length &&
      crypto.timingSafeEqual(
        Buffer.from(generatedSignature),
        Buffer.from(razorpay_signature)
      );

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid payment signature.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    // Get payment from Razorpay
    const payment = await razorpay.payments.fetch(
      razorpay_payment_id
    );

    // Make sure payment belongs to this order
    if (payment.order_id !== razorpay_order_id) {
      return NextResponse.json(
        {
          success: false,
          error: "Payment does not belong to this order.",
        },
        { status: 400 }
      );
    }

    // Only mark as paid when captured
    if (payment.status !== "captured") {
      return NextResponse.json(
        {
          success: false,
          error: `Payment status is ${payment.status}.`,
        },
        { status: 400 }
      );
    }

    // Update MongoDB
    const donation = await Donation.findOneAndUpdate(
      {
        razorpayOrderId: razorpay_order_id,
      },
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "paid",
        paidAt: new Date(),
      },
      {
        new: true,
      }
    );

    if (!donation) {
      return NextResponse.json(
        {
          success: false,
          error: "Donation record not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Donation successful.",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Payment Verification Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Payment verification failed.",
      },
      { status: 500 }
    );
  }
}