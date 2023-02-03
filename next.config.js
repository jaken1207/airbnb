/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key:'pk.eyJ1IjoiaXJ1a2Fib2F0IiwiYSI6ImNsZHAxOTU5cTBvM28zb3V1NGswMDVsbTcifQ.NtxANXIgSuvkSPa0K43qfA'
  }
}

module.exports = nextConfig
