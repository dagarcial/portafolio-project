/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch common bugs
  // Enable styled-components compiler features
  compiler: {
    styledComponents: true,  // Enables SSR and displayName for styled-components
  },
}

module.exports = nextConfig
