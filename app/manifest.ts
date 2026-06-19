import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const isProd = process.env.NODE_ENV === "production";
  const repoBase = isProd ? "/portfolio" : "";

  return {
    name: "Walid | Software Engineering Student",
    short_name: "Walid",
    description:
      "Software engineering student at York University in Toronto.",
    start_url: `${repoBase}/`,
    scope: `${repoBase}/`,
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [
      {
        src: `${repoBase}/mw2019-alt.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
