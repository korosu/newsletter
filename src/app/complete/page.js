/* eslint-disable @next/next/no-img-element */
export default function complete() {
  return (
    <div className="flex flex-col p-10 w-screen  bg-slate-100 h-full gap-6">
      <img
        src="assets/images/icon-success.svg"
        alt="svg image"
        className="w-16"
      />
      <h1 className=" text-5xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription
      </p>
      <button className="w-full fixed bottom-10 text-slate-50 bg-slate-700 hover:bg-slate-600 h-12 rounded-md">
        Dismiss message
      </button>
    </div>
  );
}
