import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K-Services",
  description: "Digital solutions services for web and mobile Apps",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "K-Services",
    description: "Digital solutions for web and mobile apps.",
    url: "https://krimou.vercel.app", // Replace with your actual URL
    siteName: "K-Services",
    images: [
      {
        url: "/product-image.png", // Path to your thumbnail image
        width: 1200,
        height: 630,
        alt: "K-Services preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K-Services",
    description: "Digital solutions for web and mobile apps.",
    images: ["/product-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
