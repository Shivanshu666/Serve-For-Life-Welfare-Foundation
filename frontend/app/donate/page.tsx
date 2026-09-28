

"use client";

import { useState } from "react";
import Script from "next/script";
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Heart,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Success screen state
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<string>("");

  // Preset donation amounts
  const presetAmounts = [
    5000,
    10000,
    25000,
    50000,
    100000,
    200000,
  ];

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;

    setCustomAmount(val);

    if (val !== "") {
      setAmount(Number(val));
    }
  };

  const handleDonate = async () => {
    try {
      if (loading) return;

      // Validate amount
      if (!amount || amount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
      }

      // Validate name
      if (!name.trim()) {
        alert("Please enter your name.");
        return;
      }

      // Validate email
      if (!email.trim()) {
        alert("Please enter your email.");
        return;
      }

      // Validate phone
      if (!phone.trim()) {
        alert("Please enter your phone number.");
        return;
      }

      setLoading(true);

      // Create Razorpay order
      const response = await fetch(
        "/api/razorpay/createorder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            name,
            email,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(
          data.error ||
            "Unable to create donation order."
        );

        setLoading(false);
        return;
      }

      // Check Razorpay Checkout SDK
      if (typeof window.Razorpay === "undefined") {
        alert(
          "Razorpay failed to load. Please refresh the page and try again."
        );

        setLoading(false);
        return;
      }

      // Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "Serve For Life Welfare Foundation",

        description: "Donation to Serve For Life",

        order_id: data.order.id,

        prefill: {
          name: name.trim(),
          email: email.trim(),
          contact: phone.trim(),
        },

        notes: {
          donor_name: name.trim(),
          donor_email: email.trim(),
          donor_phone: phone.trim(),
        },

        theme: {
          color: "#D85A42",
        },

        handler: async function (paymentResponse: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            // Verify payment
            const verifyResponse = await fetch(
              "/api/razorpay/verifypayment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id:
                    paymentResponse.razorpay_order_id,

                  razorpay_payment_id:
                    paymentResponse.razorpay_payment_id,

                  razorpay_signature:
                    paymentResponse.razorpay_signature,
                }),
              }
            );

            const verifyData =
              await verifyResponse.json();

            if (verifyData.success) {
              // Save payment ID for the success screen
              setPaymentId(
                verifyData.paymentId ||
                  paymentResponse.razorpay_payment_id
              );

              // Show success screen
              setPaymentSuccess(true);

              // Reset donation form
              setAmount(1000);
              setCustomAmount("");
              setName("");
              setEmail("");
              setPhone("");
            } else {
              alert(
                verifyData.error ||
                  "Payment verification failed."
              );
            }
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            alert(
              "Payment verification failed. Please contact us."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay =
        new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error(
        "Donation Error:",
        error
      );

      alert(
        "Something went wrong while starting the payment."
      );

      setLoading(false);
    }
  };

  const handleDonateAgain = () => {
    setPaymentSuccess(false);
    setPaymentId("");
    setAmount(1000);
    setCustomAmount("");
  };

  return (
    <>
      {/* Razorpay Checkout Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <section className="flex min-h-screen w-full items-start justify-center bg-white px-4 pt-18 sm:pt-22 md:pt-26 lg:pt-30">
        <div className="w-full max-w-3xl pb-8">

          {paymentSuccess ? (
            /* ================================
               SUCCESS / THANK YOU SCREEN
               ================================= */
            <>
              {/* Header */}
              <div className="text-center">
                <h1 className="text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17271E] sm:text-3xl lg:text-4xl">
                  Thank You for{" "}
                  <span className="bg-gradient-to-r from-[#5E7A56] to-[#7A9A72] bg-clip-text text-transparent">
                    Sharing & Helping
                  </span>
                </h1>

                <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-[#657068] sm:text-sm">
                  Your kindness and support help us
                  create a more inclusive sporting
                  ecosystem.
                </p>
              </div>

              {/* Success Card */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-[#DCE3D8] bg-white p-7 text-center shadow-lg shadow-[#17271E]/5 sm:p-10">

                {/* Success Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F0F5ED]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5E7A56]">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Thank You */}
                <h2 className="mt-6 text-xl font-semibold text-[#17271E] sm:text-2xl">
                  Donation Successful!
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#657068]">
                  Thank you for your generous contribution.
                  Your support means a lot to us and helps
                  us continue our work.
                </p>

                {/* Payment ID */}
                {paymentId && (
                  <div className="mx-auto mt-6 max-w-md rounded-xl border border-[#DCE3D8] bg-[#F8FAF7] px-4 py-3">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#657068]">
                      Payment ID
                    </p>

                    <p className="mt-1 break-all text-xs font-medium text-[#17271E]">
                      {paymentId}
                    </p>
                  </div>
                )}

                {/* Heart Message */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#4F6A4D]">
                  <Heart className="h-4 w-4 fill-current" />

                  <span>
                    Thank you for being a part of our journey.
                  </span>
                </div>

                {/* Donate Again */}
                <button
                  type="button"
                  onClick={handleDonateAgain}
                  className="mt-7 rounded-full bg-[#e2310e] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C14D38] hover:shadow-lg active:scale-95 sm:text-base"
                >
                  Donate Again
                </button>
              </div>

              {/* Bottom Message */}
              <div className="mt-5 flex flex-col items-center gap-1.5 border-t border-[#D9E0D6] pt-4 text-center sm:flex-row sm:justify-between sm:gap-2">
                <div className="flex items-center gap-1.5 text-[10px] text-[#657068] sm:text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#4F6A4D]" />
                  Secure & Transparent
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-[#657068] sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#4F6A4D]" />
                  100% goes to our programs
                </div>
              </div>
            </>
          ) : (
            /* ================================
               DONATION FORM
               ================================= */
            <>
              {/* Header */}
              <div className="text-center">
                <h1 className="text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17271E] sm:text-3xl lg:text-4xl">
                  Support the Future
                  
                  of{" "}
                  <span className="bg-gradient-to-r from-[#5E7A56] to-[#7A9A72] bg-clip-text text-transparent">
                    Sport
                  </span>
                </h1>

                <p className="mx-auto mt-1 max-w-2xl text-xs leading-5 text-[#657068] sm:text-sm">
                  Your contribution helps us build a more
                  inclusive sporting ecosystem.
                  Every rupee makes a difference.
                </p>
              </div>

              {/* Donation Card */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-[#DCE3D8] bg-white p-5 shadow-lg shadow-[#17271E]/5 sm:p-6">

                <h2 className="text-lg font-semibold text-[#17271E] sm:text-xl">
                  Choose Your Contribution
                </h2>

                {/* Preset Amounts */}
                <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                  {presetAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() =>
                        handlePresetClick(val)
                      }
                      className={`rounded-full border px-2 py-1.5 text-xs font-medium transition-all duration-200 sm:px-3 sm:py-2 sm:text-sm ${
                        amount === val &&
                        customAmount === ""
                          ? "border-[#D85A42] bg-[#D85A42] text-white shadow-md"
                          : "border-[#DCE3D8] bg-white text-[#17271E] hover:border-[#C8D2C4] hover:bg-[#F0F5ED]"
                      }`}
                    >
                      ₹{val.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-3">
                  <label
                    htmlFor="custom-amount"
                    className="text-xs font-medium text-[#4F6A4D] sm:text-sm"
                  >
                    Or enter custom amount (₹)
                  </label>

                  <div className="mt-1 flex items-center rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 focus-within:border-[#D85A42] focus-within:ring-1 focus-within:ring-[#D85A42] sm:px-4 sm:py-2">
                    <span className="text-sm text-[#657068]">
                      ₹
                    </span>

                    <input
                      id="custom-amount"
                      type="number"
                      placeholder="e.g. 1500"
                      value={customAmount}
                      onChange={
                        handleCustomAmountChange
                      }
                      className="ml-2 w-full border-0 bg-transparent text-sm outline-none focus:ring-0"
                      min="1"
                    />
                  </div>
                </div>

                {/* User Details */}
                <div className="mt-4 space-y-2.5">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-[#4F6A4D] sm:text-sm"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      className="mt-1 w-full rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 text-sm outline-none focus:border-[#D85A42] focus:ring-1 focus:ring-[#D85A42] sm:px-4 sm:py-2"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-[#4F6A4D] sm:text-sm"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      className="mt-1 w-full rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 text-sm outline-none focus:border-[#D85A42] focus:ring-1 focus:ring-[#D85A42] sm:px-4 sm:py-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium text-[#4F6A4D] sm:text-sm"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value)
                      }
                      className="mt-1 w-full rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 text-sm outline-none focus:border-[#D85A42] focus:ring-1 focus:ring-[#D85A42] sm:px-4 sm:py-2"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <button
                  type="button"
                  onClick={handleDonate}
                  disabled={loading}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e2310e] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C14D38] hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:py-3 sm:text-base"
                >
                  {loading
                    ? "Processing..."
                    : "Donate Now"}
                </button>

                <p className="mt-2 text-center text-[10px] text-[#657068] sm:text-xs">
                  You will be redirected to secure payment
                  gateway.
                </p>
              </div>

              {/* Bottom Message */}
              <div className="mt-5 flex flex-col items-center gap-1.5 border-t border-[#D9E0D6] pt-4 text-center sm:flex-row sm:justify-between sm:gap-2">
                <div className="flex items-center gap-1.5 text-[10px] text-[#657068] sm:text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#4F6A4D]" />
                  Secure & Transparent
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-[#657068] sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#4F6A4D]" />
                  100% goes to our programs
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

