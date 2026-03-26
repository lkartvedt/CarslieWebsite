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
    <html lang="en-US">
      <body className={`${montserrat.className} tracking-[0.1em] m-0 p-0 text-white`}>
        <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/20">
          <nav className="flex flex-col items-center gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-10 md:py-4">
            <a href="/" className="flex items-center">
              <img
                src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/simple_logo_name_white_1x.png"
                alt="Carslie"
                className="h-10 w-auto md:h-12"
              />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.7rem] font-medium text-black sm:text-xs md:gap-6 md:text-sm">
              <a href="/" className="hover:text-[#a6d6fd] transition-colors">
                HOME
              </a>
              <a href="/privacy" className="hover:text-[#a6d6fd] transition-colors">
                PRIVACY
              </a>
              <a href="https://apps.apple.com/us/app/carslie/id6760286399" className="hover:text-[#a6d6fd] transition-colors">
                DOWNLOAD
              </a>
              <a href="/contact" className="hover:text-[#a6d6fd] transition-colors">
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
            <div className="w-full flex flex-col items-center gap-4 text-black text-xs sm:text-sm md:grid md:grid-cols-3 md:items-center">
              <p className="font-bold md:justify-self-start">
                © 2026 Carslie
              </p>

              <p className="text-center tracking-[0.08em]">
                DEVELOPED BY LINDSEY KARTVEDT
              </p>

              <div className="flex items-center gap-4 md:justify-self-end">
                <img
                  src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/tiktok.png"
                  alt="TikTok"
                  className="h-6 w-auto hover:opacity-70 cursor-pointer md:h-8"
                />
                <img
                  src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/instagram.png"
                  alt="Instagram"
                  className="h-6 w-auto hover:opacity-70 cursor-pointer md:h-8"
                />
                <img
                  src="https://lo33ytah7ewabfnk.public.blob.vercel-storage.com/twitter.png"
                  alt="Twitter"
                  className="h-6 w-auto hover:opacity-70 cursor-pointer md:h-8"
                />
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}