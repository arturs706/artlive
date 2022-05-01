module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['files.stripe.com', 'res.cloudinary.com']
  },
  experimental: {
    urlImports: ['https://cdn.skypack.dev', 'https://www.npmjs.com']
  }
};