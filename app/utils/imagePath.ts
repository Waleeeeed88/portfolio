const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Must match your GitHub repo name

export const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isProd) {
    return `/${repoName}/${cleanPath}`;
  }
  
  return `/${cleanPath}`;
};