"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [iconRotation, setIconRotation] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setIconRotation(-30), 50);
    const t2 = setTimeout(() => setIconRotation(20), 650);
    const t3 = setTimeout(() => setIconRotation(0), 1325);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

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
              style={{
                transform: `rotate(${iconRotation}deg)`,
                transition: "transform 0.6s ease-in-out",
              }}
            />

            <img
              src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/logo_name_b-n-w_3x.png"
              alt="Carslie"
              className="h-auto w-[208px] sm:w-[272px] md:w-[352px] lg:w-[448px]"
            />
          </div>

            <p className="mt-3 text-lg leading-8">
              Whether you own one car or manage an entire family fleet, Carslie
              makes it easy to manage vehicle details, documents, and service history. 
              <span className="font-bold"> No accounts, no hassle!</span>
            </p>
        </div>

        <div className="mt-12">
          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">

            <p className="text-black text-lg leading-8">
              This is where your content goes. Add sections, features, whatever you want.
            </p>

            <div className="mt-16 flex justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#0b0c79] px-8 py-4 text-white text-sm font-semibold tracking-[0.08em] hover:opacity-90 transition"
              >
                DOWNLOAD CARSLIE
              </a>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}