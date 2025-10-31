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

// Helper for production paths
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio';
const getIconPath = (path: string) => {
  return isProd ? `/${repoName}/${path}` : `/${path}`;
};

export const metadata: Metadata = {
  title: "Mohammad Waliduddin | Software Developer",
  description:
    "Software Developer & Engineer with expertise in Full Stack Development, Cloud Computing, and Machine Learning",
  icons: {
    icon: [
      { url: getIconPath("mw-logo.png"), type: "image/png", sizes: "32x32" },
      { url: getIconPath("mw-logo.png"), type: "image/png", sizes: "16x16" }
    ],
    apple: [{ url: getIconPath("mw-logo.png"), sizes: "180x180" }],
    shortcut: [{ url: getIconPath("mw-logo.png") }]
  },
  openGraph: {
    title: "Mohammad Waliduddin | Software Developer",
    description:
      "Software Developer & Engineer with expertise in Full Stack Development, Cloud Computing, and Machine Learning",
    type: "website",
    locale: "en_US",
    images: [{ url: getIconPath("mw-logo.png") }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Waliduddin | Software Developer",
    description:
      "Software Developer & Engineer with expertise in Full Stack Development, Cloud Computing, and Machine Learning",
    images: [getIconPath("mw-logo.png")]
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
