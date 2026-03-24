import "./globals.css";

export const metadata = {
  title: "Carslie",
  description: "Your Glovebox, Upgraded.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <nav className="w-full border-b px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Carslie</h1>
          <div className="space-x-4 text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>

        <footer className="border-t mt-20 px-6 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Carslie
        </footer>
      </body>
    </html>
  );
}