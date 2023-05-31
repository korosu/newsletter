/* eslint-disable @next/next/no-img-element */
"use client";
function hello() {
  alert("hello");
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl justify-items-center bg-white rounded-3xl sm:p-8 gap-12">
      <img
        className="block sm:hidden w-full"
        src="assets/images/illustration-sign-up-mobile.svg"
        alt="SVG Image"
      />
      <div>
        <form className="flex flex-col h-full justify-between gap-4 p-6 sm:p-0">
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
          <p className="emailp">Email address</p>
          <input
            className="h-12 p-2 rounded-md border-2 border-gray-100"
            type="email"
            placeholder="email@company.com"
          ></input>
          <button
            className="w-full h-12 bg-slate-400 rounded-md"
            type="button"
            onClick={hello}
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
