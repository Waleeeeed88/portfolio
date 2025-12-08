const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // In development, images are served from /public directly
  // In production (GitHub Pages), they need the repo name prefix
  if (isProd) {
    return `/${repoName}/${cleanPath}`;
  }
  return `/${cleanPath}`;
};