"use client";

import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <section className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10 md:py-14">

        <div className="flex flex-col items-center text-center">

          <p className="mt-14 text-lg sm:text-xl md:text-2xl">
            <span className="italic"> YOUR GLOVEBOX, UPGRADED.</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-4">
            <img
              src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/icon_3x.png"
              alt="Carslie icon"
              className="h-auto w-[108px] sm:w-[130px] md:w-[158px] lg:w-[180px]"
            />

            <img
              src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/logo_name_b-n-w_3x.png"
              alt="Carslie"
              className="h-auto w-[208px] sm:w-[272px] md:w-[352px] lg:w-[448px]"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">

            {success ? (
              <div className="text-center">
                <h2 className="text-black text-xl font-bold mb-2">
                  Message Sent
                </h2>
                <p className="text-black text-sm">
                  Thanks — we’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                  });

                  if (res.ok) {
                    setSuccess(true);
                    form.reset();
                  } else {
                    alert("Something went wrong.");
                  }
                }}
              >
                <input type="hidden" name="access_key" value="316f0f44-3baa-48fb-ac6f-2edfb4446f8e" />
                <input type="hidden" name="subject" value="Carslie Contact Form Submission" />
                <input type="hidden" name="from_name" value="Carslie Website" />

                <div className="flex flex-col text-left">
                  <label className="mb-1 text-sm font-semibold text-black">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#0b0c79]"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="mb-1 text-sm font-semibold text-black">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#0b0c79]"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="mb-1 text-sm font-semibold text-black">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#0b0c79]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0b0c79] px-6 py-3 text-white font-semibold tracking-[0.08em] transition hover:opacity-90"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}

          </div>
        </div>

      </section>
    </div>
  );
}