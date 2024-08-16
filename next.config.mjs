/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["raw.githubusercontent.com", "images.unsplash.com"],
    },
    experimental: {
      fontLoaders: [
        { loader: '@next/font/google', options: { subsets: ['latin'] } },
      ],
    },
  };
  
  export default nextConfig;