/* eslint-disable @next/next/no-img-element */
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Complete() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();
  function goHome() {
    router.push("/");
  }
  return (
    <div className="flex flex-col p-10 w-screen  bg-slate-100 h-full sm:h-auto gap-6 sm:max-w-xl sm:m-32 sm:rounded-3xl">
      <img
        src="assets/images/icon-success.svg"
        alt="svg image"
        className="w-16"
      />
      <h1 className=" text-5xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription
      </p>
      <button
        onClick={goHome}
        className="hover:shadow-xl hover:text-red-50 hover:shadow-red-500/50 transition hover:bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 self-center w-64 mt-auto bottom-10 text-slate-50 bg-slate-700 hover:bg-slate-600 h-12 rounded-md"
      >
        Dismiss message
      </button>
    </div>
  );
}
