/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO: Configure environment variables
  // env: {
  //   API_URL: process.env.API_URL,
  // },
  
  // TODO: Configure security headers
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'X-DNS-Prefetch-Control',
  //           value: 'on'
  //         },
  //       ],
  //     },
  //   ]
  // },
}

module.exports = nextConfig

