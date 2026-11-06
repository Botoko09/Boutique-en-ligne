
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  title: "MbokaShop | Smartphones en FCFA",
  description: "Découvrez des smartphones proposés par des vendeurs près de chez vous.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <header className="bg-[#B91C1C] text-white">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo Mboka Shop"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
              />
              <span className="text-2xl font-bold text-white">
                MbokaShop
              </span>
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
          © 2026 MbokaShop
        </footer>
      </body>
    </html>
  );
}
