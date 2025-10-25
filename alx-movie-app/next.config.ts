import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  workboxOptions: {
    skipWaiting: true,  // <-- moved inside workboxOptions
    clientsClaim: true, // ensures immediate control of pages
  },
  
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],    
  },
  swcMinify: true,
};

export default withPWA({
  ...nextConfig
})
