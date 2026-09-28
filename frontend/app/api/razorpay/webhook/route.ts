import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { connectDB } from "@/lib/mongodb";
import Donation from "@/model/Donation";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();

    const signature =
      request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing webhook signature.",
        },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret) {
      console.error("RAZORPAY_WEBHOOK_SECRET is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Webhook configuration error.",
        },
        { status: 500 }
      );
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    const isValid =
      expectedSignature.length === signature.length &&
      crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(signature)
      );

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid webhook signature.",
        },
        { status: 400 }
      );
    }

    const event = JSON.parse(rawBody);

    await connectDB();

    // Payment captured
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;

      await Donation.findOneAndUpdate(
        {
          razorpayOrderId: payment.order_id,
        },
        {
          razorpayPaymentId: payment.id,
          status: "paid",
          paidAt: new Date(),
        }
      );
    }

    // Payment failed
    if (event.event === "payment.failed") {
      const payment = event.payload.payment.entity;

      await Donation.findOneAndUpdate(
        {
          razorpayOrderId: payment.order_id,
        },
        {
          status: "failed",
          failureReason:
            payment.error_description ||
            "Payment failed",
        }
      );
    }

    // Order paid
    if (event.event === "order.paid") {
      const order = event.payload.order.entity;

      await Donation.findOneAndUpdate(
        {
          razorpayOrderId: order.id,
        },
        {
          status: "paid",
          paidAt: new Date(),
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Razorpay Webhook Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Webhook processing failed.",
      },
      { status: 500 }
    );
  }
}