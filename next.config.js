/* eslint-disable unicorn/prefer-module */
/** @type {import('next').NextConfig} */

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin',
        destination: 'https://api.ferretab.by/admin',
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  output: 'standalone',
};
