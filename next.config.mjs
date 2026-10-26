/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'livpure.com',
      },
      {
        protocol: 'https',
        hostname: 'havells.com',
      },
      {
        protocol: 'https',
        hostname: 'resources.bluestarindia.com',
      },
    ],
  },
};

export default nextConfig;
