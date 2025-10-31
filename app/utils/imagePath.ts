const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Match your next.config.ts

export const getImagePath = (path: string): string => {
  // Just return the path with leading slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
};