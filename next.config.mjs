/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:'/',
  output:'export',
  images:{
    domains:['assets.aceternity.com','pbs.twimg.com']
  }
};

export default nextConfig;
