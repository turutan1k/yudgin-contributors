import React from 'react';

import { Logo } from '../logo/logo';

export const Header = () => (
  <header className="global-container fixed left-[0] top-[0] w-full bg-[#010409]">
    <div className="container">
      <div className="flex items-center justify-between py-[2rem]">
        <Logo />
        <a
          href="https://github.com/turutan1k"
          target="_blank"
          rel="noreferrer"
          className="p text-[#ffffff] transition hover:text-[#4493f8]"
        >
          Developed by @turutan1k
        </a>
      </div>
    </div>
  </header>
);

export default Header;
