import './globals.css';

import { lato } from '@assets/fonts';
import { AOSInit } from '@utils';
import { headers } from 'next/headers';
import React from 'react';

import { Footer, Header } from './_components';

export const revalidate = 0;

const META_BASE = {
  title: 'Yudgin Contributors',
  description: '',
  keywords: ['Contributors', 'Yudgin', 'Studio', 'Yudgin Studio'],
  author: {
    name: 'Yudgin Studio',
    url: 'https://yudginstudio.by/',
  },
  languages: {},
  locale: 'ru-RU',
  twitter: '@ferretab',
};

export const generateMetadata = () => {
  const {
    title,
    description,
    siteName,
    keywords,
    author,
    languages,
    locale,
    twitter,
  } = META_BASE;

  const currentUrl = headers().get('x-url');

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
    generator: siteName,
    applicationName: siteName,
    keywords: [siteName, ...keywords],
    authors: [author],
    creator: author.name,
    publisher: siteName,
    metadataBase: new URL(process.env.SITE_URL),
    alternates: {
      canonical: currentUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName,
      images: [
        // {
        //   url: `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta?.data?.og_image}`,
        //   width: 800,
        //   height: 600,
        // },
        // {
        //   url: `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta?.data?.meta_image}`,
        //   width: 1800,
        //   height: 1600,
        //   alt: siteName,
        // },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitter,
      images: [
        // `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta?.data?.og_image}`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [`${process.env.SITE_URL}/favicon.ico?v=4`],
      apple: [`${process.env.SITE_URL}/apple-touch-icon.png?v=4`],
      shortcut: [`${process.env.SITE_URL}/apple-touch-icon.png`],
    },
    manifest: `${process.env.SITE_URL}/site.webmanifest`,
  };
};

export const RootLayout = async ({ children }) => (
  <html lang="ru" className={lato.className}>
    <AOSInit />
    <body className="h-[100vh]">
      <Header />
      <main className="h-full w-full bg-[#848d97] py-[12rem] md:py-[10rem] sm:py-[8rem]">
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
