import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

const getIconPath = (path: string) => (isProd ? `/${repoName}/${path}` : `/${path}`);
const getSocialPath = (path: string) => `/${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(isProd ? "https://waleeeeed88.github.io/portfolio/" : "http://localhost:3000"),
  title: "mw2019 go",
  applicationName: "mw2019 go",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "mw2019 go",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  description:
    "Portfolio of Mohammad Waliduddin: engineer focused on full-stack delivery, cloud systems, AI integration, and embedded computing.",
  icons: {
    icon: [
      { url: getIconPath("mw2019-alt.svg"), type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: getIconPath("mw2019-alt.svg"), sizes: "180x180" }],
    shortcut: [{ url: getIconPath("mw2019-alt.svg") }],
  },
  openGraph: {
    title: "mw2019 go",
    description:
      "Engineer shipping reliable full-stack products, cloud tooling, and AI-backed features.",
    type: "website",
    locale: "en_US",
    images: [{ url: getSocialPath("mw2019-alt.svg") }],
  },
  twitter: {
    card: "summary_large_image",
    title: "mw2019 go",
    description:
      "Engineer shipping reliable full-stack products, cloud tooling, and AI-backed features.",
    images: [getSocialPath("mw2019-alt.svg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${cormorant.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
