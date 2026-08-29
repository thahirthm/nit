import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const futura = localFont({
  src: [
    { path: "../../public/fonts/fonnts.com-Futura_PT_Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Futura_PT_Book.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Futura_PT_Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Futura_PT_Demi.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Futura_PT_Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Futura_PT_Heavy.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/fonnts.com-Futura_PT_Extra_Bold.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Nesma Infrastructure & Technology",
  description: "Nesma Infrastructure & Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${futura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
