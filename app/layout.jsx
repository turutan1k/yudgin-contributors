import './globals.css';

import { lato } from '@assets/fonts';
import { AOSInit } from '@utils';
import { headers } from 'next/headers';
import React from 'react';

export const revalidate = 0;
export const RootLayout = async ({ children }) => (
  <html lang="ru" className={lato.className}>
    <AOSInit />
    <body className="min-h-[100vh] bg-[#848d97]">
      <main className="h-full w-full py-[12rem] md:py-[10rem] sm:py-[8rem]">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
