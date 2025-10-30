const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Waleeeeed88';

export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isProd) {
    return `/${repoName}/${cleanPath}`;
  }
  
  return `/${cleanPath}`;
};