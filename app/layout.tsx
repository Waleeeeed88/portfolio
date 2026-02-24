import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

const getIconPath = (path: string) =>
  isProd ? `/${repoName}/${path}` : `/${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(
    isProd
      ? "https://waleeeeed88.github.io/portfolio/"
      : "http://localhost:3000"
  ),
  title: "Walid — Software Engineer",
  applicationName: "Walid",
  manifest: "/manifest.webmanifest",
  description:
    "Walid — Software Engineer focused on agentic systems, AI/ML, and cloud infrastructure.",
  icons: {
    icon: [
      {
        url: getIconPath("mw2019-alt.svg"),
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    apple: [{ url: getIconPath("mw2019-alt.svg"), sizes: "180x180" }],
    shortcut: [{ url: getIconPath("mw2019-alt.svg") }],
  },
  openGraph: {
    title: "Walid — Software Engineer",
    description: "Software Engineer focused on agentic systems, AI/ML, and cloud infrastructure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walid — Software Engineer",
    description: "Software Engineer focused on agentic systems, AI/ML, and cloud infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
