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

            <div className="flex flex-col md:flex-row items-center gap-28 max-w-4xl mx-auto">
              {/* Left - GIF */}
              <img
                src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/App%20Previews.gif"
                alt="App preview"
                className="w-full md:w-1/4 rounded-lg"
              />

              {/* Right - Text */}
              <div className="text-black text-left space-y-6 md:w-1/2">

                <div>
                  <h3 className="font-bold text-lg mb-2">DIGITAL GARAGE</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Add photos, VIN, license plate, color, custom nicknames, and more</li>
                    <li>Share vehicle details with friends and family</li>
                    <li>Reorder vehicles with drag-and-drop</li>
                    <li>Get AI help for vehicle-related questions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">SECURE DOCUMENT VAULT</h3>
                  <p>
                    Store and manage your vehicle documents like license, registration, insurance, and more all in one secure place. Smart expiration tracking keeps you informed with customizable reminders before documents expire.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-0 flex flex-col md:flex-row items-center gap-28 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto"></div>
              {/* Left - Text */}
              <div className="text-black text-left space-y-6 md:w-1/2">

                <div>
                  <h3 className="font-bold text-lg mb-2">SERVICE HISTORY & MAINTENANCE</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Easily track maintenance and repair tasks for each vehicle</li>
                    <li>Record services like oil changes, tire rotations, repairs, inspections, etc</li>
                    <li>Track costs and mileage for each service</li>
                    <li>Attach photos of receipts and invoices</li>
                    <li>Add detailed notes for future reference</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">SERVICE PROVIDER DIRECTORY</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Save your preferred mechanics, body shops, dealerships, and more</li>
                    <li>Mark favorites for quick access</li>
                    <li>Store contact info, addresses, and websites</li>
                    <li>View service history with each provider</li>
                  </ul>
                </div>

              </div>

              {/* Right - Image */}
              <img
                src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/Service%20Screenshot.png"
                alt="Service screenshot"
                className="w-full md:w-1/4 rounded-lg"
              />

            </div>
          </div>

          <div className="text-center mx-auto max-w-3xl">
            <h3 className="mt-14 font-bold text-lg mb-2 text-black">CARSLIE IS PERFECT FOR...</h3>
            <p className="mt-0 text-md sm:text-md md:text-lg text-black">
              families with multiple drivers or vehicles, organized drivers, DIY mechanics, and anyone who owns a car or drives one!
            </p>
          </div>

          <p className="mt-14 text-lg sm:text-xl md:text-2xl text-black text-center">
            YOUR GLOVEBOX  <span className="italic"> DESERVES </span> THIS.
          </p>

          <div className="mt-12 flex justify-center">
              <a
                href="https://apps.apple.com/us/app/carslie/id6760286399"
                className="inline-flex items-center justify-center rounded-full bg-[#0b0c79] px-8 py-4 text-white text-sm font-semibold tracking-[0.08em] hover:opacity-90 transition"
              >
                DOWNLOAD CARSLIE
              </a>
            </div>

        </div>

      </section>
    </div>
  );
}