import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "MoneyMart Loans & Investments",
  description:
    "Our loans and investments help businesses and individuals grow and succeed financially through a range of services.",
  openGraph: {
    title: "MoneyMart Loans & Investments",
    description:
      "Our loans and investments help businesses and individuals grow and succeed financially through a range of services.",
    type: "website",
    siteName: "MoneyMart",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
