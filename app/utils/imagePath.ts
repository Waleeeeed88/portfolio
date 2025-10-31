const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio"; // must match next.config.ts

export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return isProd ? `/${repoName}/${cleanPath}` : `/${cleanPath}`;
};