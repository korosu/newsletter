/* eslint-disable @next/next/no-img-element */
export default function complete() {
  return (
    <div className="flex flex-col p-10 w-full max-w-full bg-slate-100 h-screen gap-6">
      <img
        src="assets/images/icon-success.svg"
        alt="svg image"
        className="w-10"
      />
      <h1 className=" text-5xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription
      </p>
      <button
        className="mt-auto mr-auto ml-auto text-slate-50 bg-slate-700 w-96 hover:bg-slate-600 h-12 rounded-md
         "
      >
        Dismiss message
      </button>
    </div>
  );
}
