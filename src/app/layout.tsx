import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Latin, Noto_Kufi_Arabic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

// Geist is only a fallback (body text uses Arial/Futura/Anek), so don't preload it.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  // Only needed in Arabic mode; loaded on demand instead of on every English page view.
  preload: false,
});

const futura = localFont({
  src: [
    { path: "../../public/fonts/Futura_PT_Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Futura_PT_Book.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Futura_PT_Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Futura_PT_Demi.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Futura_PT_Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Futura_PT_Heavy.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/Futura_PT_Extra_Bold.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-futura",
});

// Each page sets its own title/description; the template adds the brand suffix
// (e.g. "Infrastructure Solutions | NIT"). The default is used by any route without one.
export const metadata: Metadata = {
  // Makes the share image (src/app/opengraph-image.png) an absolute URL for WhatsApp/LinkedIn/etc.
  metadataBase: new URL("https://nesmainfrastructure.com"),
  openGraph: {
    type: "website",
    siteName: "Nesma Infrastructure & Technology",
  },
  twitter: {
    card: "summary_large_image",
  },
  title: {
    template: "%s | NIT",
    default: "Nesma Infrastructure & Technology (NIT)",
  },
  description:
    "Nesma Infrastructure & Technology (NIT) designs and delivers critical infrastructure and technology solutions across Saudi Arabia.",
  icons: {
    icon: "/images/nit-fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${futura.variable} ${anekLatin.variable} ${notoKufiArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
