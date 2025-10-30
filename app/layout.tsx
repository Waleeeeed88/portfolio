import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import Navigation from "./components/Navigation";
import ScrollIndicator from "./components/ScrollIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Waliduddin | Software Developer",
  description:
    "Software Developer & Engineer with expertise in Full Stack Development, Cloud Computing, and Machine Learning",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>",
  },
  openGraph: {
    title: "Mohammad Waliduddin | Software Developer",
    description:
      "Software Developer & Engineer with expertise in Full Stack Development, Cloud Computing, and Machine Learning",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Waliduddin | Software Developer",
    description:
      "Software Developer & Engineer with expertise in Full Stack Development, Cloud Computing, and Machine Learning",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollIndicator />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
