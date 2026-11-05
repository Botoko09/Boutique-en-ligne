import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boutique Téléphones",
  description: "Trouvez un téléphone et contactez le vendeur sur WhatsApp",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
            <body suppressHydrationWarning className="min-h-full flex flex-col">
        <header className="bg-[#B91C1C] text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold">
              Boutique Téléphones
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-white px-4 py-2 font-medium text-[#B91C1C]"
            >
              Espace vendeur
            </Link>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="bg-white py-4 text-center text-sm text-slate-600">
          © 2026 Boutique Téléphones – Akieni Academy
        </footer>
      </body>
    </html>
  );
}