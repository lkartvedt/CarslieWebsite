/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lo33ytah7ewabfnk.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig