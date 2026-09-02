"use client";

import { useState } from "react";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // 6 preset amounts → 3 per row
  const presetAmounts = [5000, 10000, 25000, 50000, 100000, 200000];

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val !== "") {
      setAmount(Number(val));
    }
  };

  const handleDonate = () => {
    alert(`Thank you for your donation of ₹${amount.toLocaleString()}!`);
  };

  return (
    <section className="flex min-h-screen w-full items-start justify-center bg-white px-4 pt-18 sm:pt-22 md:pt-26 lg:pt-30">
      <div className="w-full max-w-3xl pb-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17271E] sm:text-3xl lg:text-4xl">
            Support the Future
            
            of <span className="bg-gradient-to-r from-[#5E7A56] to-[#7A9A72] bg-clip-text text-transparent">Sport</span>
          </h1>
          <p className="mx-auto mt-1 max-w-2xl text-xs leading-5 text-[#657068] sm:text-sm">
            Your contribution helps us build a more inclusive sporting ecosystem.
            Every rupee makes a difference.
          </p>
        </div>

        {/* Donation Card */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#DCE3D8] bg-white p-5 shadow-lg shadow-[#17271E]/5 sm:p-6">
          <h2 className="text-lg font-semibold text-[#17271E] sm:text-xl">
            Choose Your Contribution
          </h2>

          {/* Preset Amounts – 3 columns → 2 rows of 3 */}
          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
            {presetAmounts.map((val) => (
              <button
                key={val}
                onClick={() => handlePresetClick(val)}
                className={`rounded-full border px-2 py-1.5 text-xs font-medium transition-all duration-200 sm:px-3 sm:py-2 sm:text-sm ${
                  amount === val && customAmount === ""
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
            <label htmlFor="custom-amount" className="text-xs font-medium text-[#4F6A4D] sm:text-sm">
              Or enter custom amount (₹)
            </label>
            <div className="mt-1 flex items-center rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 focus-within:border-[#D85A42] focus-within:ring-1 focus-within:ring-[#D85A42] sm:px-4 sm:py-2">
              <span className="text-[#657068] text-sm">₹</span>
              <input
                id="custom-amount"
                type="number"
                placeholder="e.g. 1500"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="ml-2 w-full border-0 bg-transparent text-sm outline-none focus:ring-0"
                min="1"
              />
            </div>
          </div>

          {/* User Details */}
          <div className="mt-4 space-y-2.5">
            <div>
              <label htmlFor="name" className="text-xs font-medium text-[#4F6A4D] sm:text-sm">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 text-sm outline-none focus:border-[#D85A42] focus:ring-1 focus:ring-[#D85A42] sm:px-4 sm:py-2"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-[#4F6A4D] sm:text-sm">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 text-sm outline-none focus:border-[#D85A42] focus:ring-1 focus:ring-[#D85A42] sm:px-4 sm:py-2"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-xs font-medium text-[#4F6A4D] sm:text-sm">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#DCE3D8] bg-white px-3 py-1.5 text-sm outline-none focus:border-[#D85A42] focus:ring-1 focus:ring-[#D85A42] sm:px-4 sm:py-2"
                placeholder="9876543210"
                required
              />
            </div>
          </div>

          {/* Donate Button – no amount displayed */}
          <button
            onClick={handleDonate}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e2310e] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#C14D38] hover:-translate-y-0.5 hover:shadow-lg active:scale-95 sm:py-3 sm:text-base"
          >
            Donate Now
          </button>

          <p className="mt-2 text-center text-[10px] text-[#657068] sm:text-xs">
            You will be redirected to secure payment gateway.
          </p>
        </div>

        {/* Bottom message */}
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
      </div>
    </section>
  );
}