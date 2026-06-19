import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const getAssetPath = (path: string) =>
  isProd ? `/${repoName}/${path}` : `/${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(
    isProd
      ? "https://waleeeeed88.github.io/portfolio/"
      : "http://localhost:3000"
  ),
  title: {
    default: "Walid | Software Engineering Student",
    template: "%s | Walid",
  },
  applicationName: "Walid",
  manifest: getAssetPath("manifest.webmanifest"),
  description:
    "Walid is a software engineering student at York University in Toronto with interests in multi-agent workflows, autonomous AI agents, predictive modelling, UX design, and Linux.",
  authors: [{ name: "Mohammad Waliduddin" }],
  creator: "Mohammad Waliduddin",
  keywords: [
    "Walid",
    "Mohammad Waliduddin",
    "software engineering student",
    "York University",
    "Toronto",
    "multi-agent workflows",
    "autonomous AI agents",
    "predictive modelling",
    "UX design",
    "Linux",
  ],
  alternates: {
    canonical: isProd ? "/portfolio/" : "/",
  },
  icons: {
    icon: [
      {
        url: getAssetPath("mw2019-alt.svg"),
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    apple: [{ url: getAssetPath("mw2019-alt.svg"), sizes: "180x180" }],
    shortcut: [{ url: getAssetPath("mw2019-alt.svg") }],
  },
  openGraph: {
    title: "Walid | Software Engineering Student",
    description:
      "York University software engineering student interested in multi-agent workflows, autonomous AI agents, predictive modelling, UX design, and Linux.",
    url: isProd ? "/portfolio/" : "/",
    siteName: "Walid",
    images: [{ url: getAssetPath("profile.jpg"), alt: "Walid" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walid | Software Engineering Student",
    description:
      "York University software engineering student interested in multi-agent workflows, autonomous AI agents, predictive modelling, UX design, and Linux.",
    images: [getAssetPath("profile.jpg")],
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
