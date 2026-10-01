"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head';
import { label } from 'framer-motion/client';

interface BankDetails {
  accountNumber: string;
  accountHolderName: string;
  branchIFSC: string;
  accountVariant: string;
  branch: string;
}

const ScannerModal = ({ isOpen, onClose, onScan }: { isOpen: boolean; onClose: () => void; onScan: (data: string) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    if (isOpen) {
      const startCamera = async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
          if (videoRef.current) videoRef.current.srcObject = stream;
        } catch (err) {
          setError('Unable to access camera. Please ensure permissions are granted.');
          console.error(err);
        }
      };
      startCamera();
    }
    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-3 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-semibold text-gray-800 text-sm">Scan QR Code</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative aspect-square bg-black">
          {error ? (
            <div className="flex items-center justify-center h-full text-white p-4 text-center text-xs">
              <p>{error}</p>
            </div>
          ) : (
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 border-2 border-white/50 m-6 rounded-lg pointer-events-none"></div>
        </div>
        <div className="p-3 bg-gray-50">
          <button
            onClick={() => { onScan('servelifewelfarefoun@idfcbank'); onClose(); }}
            className="w-full py-2 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-lime-600 transition shadow-md text-sm"
          >
            Simulate Scan (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="ml-1 p-1 rounded-md bg-gray-100 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-colors shrink-0" title="Copy to clipboard">
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
};

export default function DonatePage() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [upiId, setUpiId] = useState('servelifewelfarefoun@idfcbank');

  const bankDetails: BankDetails = {
    accountNumber: '60406202614',
    accountHolderName: 'Serve For Life Welfare Foundation',
    branchIFSC: 'IDFB0060562',
    accountVariant: 'Dynamic TASC Current Account',
    branch: 'BHILAI BRANCH',
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white font-sans flex flex-col">
      <main className="max-w-7xl mt-[80px] w-full mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-6 flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="text-center mb-5 shrink-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5 tracking-tight">
            Make a Difference Today
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Your generous contribution helps us continue our mission. <br />Scan the QR code or use the bank details below.
          </p>
        </div>

        {/* Grid: equal width columns (50/50) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch w-full flex-1">
          
          {/* ============ LEFT COLUMN: QR ============ */}
          <div className="w-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100/50 flex flex-col flex-1">
              <div className="bg-gradient-to-r from-emerald-500 to-lime-500 px-4 py-2.5 shrink-0">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  Scan & Pay
                </h3>
              </div>

              <div className="p-4 flex flex-col items-center justify-center flex-1">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-xl border-2 border-emerald-100 flex items-center justify-center mb-4 overflow-hidden group shadow-sm shrink-0">
                  <Image
                    src="/qr-code.jpg"
                    alt="Scan this QR code to donate via UPI"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain p-1.5"
                    priority
                  />
                  <button
                    onClick={() => setIsScannerOpen(true)}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white font-medium backdrop-blur-sm rounded-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs">Open Scanner</span>
                  </button>
                </div>

                <div className="w-full bg-emerald-50/50 rounded-lg p-3 flex items-center justify-between border border-emerald-100 gap-2 shrink-0">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">UPI ID</span>
                    <span className="text-xs font-bold text-gray-800 break-all">{upiId}</span>
                  </div>
                  <CopyButton text={upiId} />
                </div>
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: Bank Details only ============ */}
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100/50 p-4 sm:p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5 mb-4 shrink-0">
                <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Bank Account Details</h3>
                  <p className="text-[11px] text-emerald-600 font-medium">IDFC First Bank</p>
                </div>
              </div>

              <div className="space-y-2.5 flex-1">
                {[
                  { label: 'Account Number', value: bankDetails.accountNumber },
                  {label: 'Account Holder Name', value:bankDetails.accountHolderName},
                  { label: 'Branch IFSC', value: bankDetails.branchIFSC },
                  { label: 'Account Variant', value: bankDetails.accountVariant },
                  { label: 'Branch', value: bankDetails.branch },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 bg-emerald-50/30 rounded-lg border border-emerald-100/50 gap-1">
                    <span className="text-[11px] text-gray-500 font-medium">{item.label}</span>
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="text-xs font-bold text-gray-900 truncate">{item.value}</span>
                      <CopyButton text={item.value} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-lime-50 rounded-lg border border-emerald-100 flex items-start gap-2 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[10px] text-emerald-800 leading-relaxed font-medium">
                  Please use the Customer ID or Account Number as reference. For assistance, call <strong>1800 10 888</strong>.
                </p>
              </div>
            </div>

            {/* Trust & Security Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] text-gray-500 font-medium shrink-0">
              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% Secure
              </div>
              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Instant Transfer
              </div>
              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                24x7 Support
              </div>
            </div>
          </div>
        </div>
      </main>

      <ScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScan={(data) => { setUpiId(data); console.log('Scanned:', data); }}
      />
    </div>
  );
}