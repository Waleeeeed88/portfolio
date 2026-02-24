import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const isProd = process.env.NODE_ENV === "production";
  const repoBase = isProd ? "/portfolio" : "";

  return {
    name: "Walid",
    short_name: "Walid",
    description: "Walid — Software Engineer.",
    start_url: `${repoBase}/`,
    scope: `${repoBase}/`,
    display: "standalone",
    background_color: "#1e1e1e",
    theme_color: "#007acc",
    icons: [
      {
        src: `${repoBase}/mw2019-alt.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
