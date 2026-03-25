import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Carslie",
  description: "Your Glovebox, Upgraded. An app to manage your vehicles, vehicle documents, and vehicle services.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} tracking-[0.1em] m-0 p-0 text-white`}>
        <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/20">
          <nav className="flex items-center justify-between px-6 py-4 md:px-10">
            <a href="/" className="flex items-center">
              <img
                src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/simple_logo_name_white_1x.png"
                alt="Carslie"
                className="h-12 w-auto"
              />
            </a>

            <div className="flex items-center gap-6 text-sm font-medium text-black">
              <a href="/" className="hover:text-[#a6d6fd]">
                HOME
              </a>
              <a href="/privacy" className="hover:text-[#a6d6fd]">
                PRIVACY
              </a>
              {/* TODO: Link to app store*/}
              <a href="/" className="hover:text-[#a6d6fd]">
                DOWNLOAD
              </a>
              <a href="/contact" className="hover:text-[#a6d6fd]">
                CONTACT
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="w-full mt-10 backdrop-blur-md bg-white/20 border-t border-white/30 px-6 py-8 md:px-10">
          <div className="flex flex-col items-center gap-6">

            {/* Centered logo */}
            <img
              src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/simple_logo_name_white_1x.png"
              alt="Carslie"
              className="h-10 w-auto"
            />

            {/* Bottom row */}
            <div className="w-full grid grid-cols-3 items-center text-black text-sm">

              {/* Left */}
              <p className="font-bold justify-self-start">
                © 2026 Carslie
              </p>

              {/* Center (actually centered now) */}
              <p className="text-center tracking-[0.08em]">
                DEVELOPED BY LINDSEY KARTVEDT
              </p>

              {/* Right */}
              <div className="flex justify-self-end items-center gap-4">
                {/* icons */}
                <div className="flex items-center gap-4">
                  <span className="text-black">TikTok</span>
                  <span className="text-black">Instagram</span>
                  <span className="text-black">Twitter</span>
                </div>
              </div>

            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}