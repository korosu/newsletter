/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [inputBox, setInputBox] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    setInputBox(event.target.value);
  };

  const validateEmail = (inputBox) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputBox == "") {
      setError("Email is required");
      return;
    }
    if (regex.test(inputBox)) {
      router.push("/complete?email=" + inputBox);
    } else {
      setError("Valid email required");
    }
  };

  function resetStatuse() {
    setError(false);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl justify-items-center bg-white sm:rounded-3xl sm:p-8 gap-12">
      <img
        className="block sm:hidden w-full"
        src="assets/images/illustration-sign-up-mobile.svg"
        alt="SVG Image"
      />
      <form>
        <div className="flex flex-col h-full justify-center gap-6 p-6 sm:p-0">
          <h1 className="text-4xl font-bold">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on: </p>
          <ul>
            <li className="sm:text-sm text-xl align-middle">
              <img
                className="inline-block mr-1 h-5"
                src="assets/images/icon-list.svg"
                alt="SVG Image"
              />
              Product discovery and building what matters
            </li>
            <li className="sm:text-sm text-xl align-middle">
              <img
                className="inline-block mr-1 h-5"
                src="assets/images/icon-list.svg"
                alt="SVG Image"
              />
              Measuring to ensure updates are a success
            </li>
            <li className="sm:text-sm text-xl align-middle">
              <img
                className="inline-block mr-1 h-5"
                src="assets/images/icon-list.svg"
                alt="SVG Image"
              />
              And much more!
            </li>
          </ul>
          <div className="max-w-full">
            <div className="flex">
              <p className="text-xs mr-auto">Email address</p>
              <p className={error ? "text-xs tomato-color" : "hidden"}>
                {error}
              </p>
            </div>
            <input
              className={
                error
                  ? "tomato transition w-full h-12 p-2 rounded-md border-2 border-gray-100"
                  : "transition w-full h-12 p-2 rounded-md border-2 border-gray-100"
              }
              placeholder="email@company.com"
              onBlur={handleInputChange}
              onFocus={resetStatuse}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  const value = e.target.value;
                  setInputBox(value);
                  console.log(value);
                  console.log(inputBox);
                  validateEmail(e.target.value);
                }
              }}
              required
            ></input>
          </div>
          <button
            className=" hover:shadow-xl hover:text-red-50 hover:shadow-red-500/50 transition hover:bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 w-full h-12 bg-slate-400 rounded-md"
            type="button"
            onClick={() => validateEmail(inputBox)}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
      <div className="right-box">
        <img
          className="hidden sm:block"
          src="assets/images/illustration-sign-up-desktop.svg"
          alt="SVG Image"
        />
      </div>
    </div>
  );
}
