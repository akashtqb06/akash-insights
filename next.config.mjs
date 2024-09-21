/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:'/',
  output:'standlone',
  images:{
    domains:['assets.aceternity.com','pbs.twimg.com','avatar.vercel.sh']
  }
};

export default nextConfig;
