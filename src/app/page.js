/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [inputBox, setInputBox] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleInputChange = (event) => {
    setInputBox(event.target.value);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(inputBox)) {
      router.push("/complete");
    } else {
      setError(true);
    }
  };

  function resetStatuse() {
    console.log("hello");
    setError(false);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl justify-items-center bg-white sm:rounded-3xl sm:p-8 gap-12">
      <img
        className="block sm:hidden w-full"
        src="assets/images/illustration-sign-up-mobile.svg"
        alt="SVG Image"
      />
      <div>
        <form className="flex flex-col h-full justify-center gap-6 p-6 sm:p-0">
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
                Valid email required
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
              required
            ></input>
          </div>
          <button
            className="transition hover:bg-slate-500 w-full h-12 bg-slate-400 rounded-md"
            type="button"
            onClick={validateEmail}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
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
