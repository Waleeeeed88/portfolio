import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const isProd = process.env.NODE_ENV === "production";
  const repoBase = isProd ? "/portfolio" : "";

  return {
    name: "mw2019 go",
    short_name: "mw2019",
    description: "Portfolio of Mohammad Waliduddin.",
    start_url: `${repoBase}/`,
    scope: `${repoBase}/`,
    display: "standalone",
    background_color: "#02030a",
    theme_color: "#061129",
    icons: [
      {
        src: `${repoBase}/mw2019-alt.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
