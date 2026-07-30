import Navbar from "../components/layout/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/layout/WhatsappButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Raven Global Makine ve Mühendislik",
    template: "%s | Raven Global Makine",
  },

  description:
    "Endüstriyel soğutma sistemleri, mühendislik çözümleri ve profesyonel proje uygulamaları sunan Raven Global Makine ve Mühendislik.",

  keywords: [
    "endüstriyel soğutma",
    "soğutma sistemleri",
    "kasap dolabı",
    "şarküteri dolabı",
    "teşhir dolabı",
    "endüstriyel ekipman",
    "raven makina",
    "raven global",
  ],

  authors: [
    {
      name: "Raven Global Makine ve Mühendislik",
    },
  ],
  metadataBase: new URL("https://www.ravenmakina.com"),

alternates: {
  canonical: "/",
},

  openGraph: {
  title: "Raven Global Makine ve Mühendislik",
  description:
    "Endüstriyel soğutma sistemleri ve mühendislik çözümleri.",
  url: "https://www.ravenmakina.com",
  siteName: "Raven Makina",
  locale: "tr_TR",
  type: "website",
  images: [
    {
      url: "/images/seo/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Raven Global Makine",
    },
  ],
},

  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
