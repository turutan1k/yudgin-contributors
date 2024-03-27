import Image from 'next/image';
import React from 'react';

export const DropdownItem = ({
  data: { link, image, name, login, email, contributions },
  isOpen,
  onClick,
}) => (
  <div
    aria-hidden
    className="isolate flex w-[32.75rem] cursor-pointer flex-col items-start justify-start gap-[2rem] overflow-hidden rounded-[2rem] bg-[#27292e] md:w-[31.9rem] sm:w-full "
    onClick={onClick}
  >
    <div className="flex w-full items-center justify-start gap-[2rem] p-[2rem] transition-all hover:bg-[#3a3d45]">
      <a
        className="relative isolate flex h-[6.4rem] w-[6.4rem] items-center justify-center overflow-hidden rounded-[100%]"
        href={link}
      >
        <Image
          fill
          src={image}
          alt=""
          target="_blank"
          className="h-full w-full object-contain"
        />
      </a>
      <div className="relative z-[2] text-[1.6rem] leading-[2.4rem] text-[#fff]">
        <p>{login}</p>
      </div>
    </div>
    {isOpen && (
      <div className="w-full transition">
        <ul
          className={`w-full bg-[#27292e] px-[1rem] pb-[2rem] transition-all ${
            isOpen ? 'visible' : 'invisible'
          }`}
        >
          <li className="text-[1.6rem] leading-[2.4rem] text-[#ffffff]">
            Name: {name};
          </li>
          <li className="text-[1.6rem] leading-[2.4rem] text-[#ffffff]">
            Login: {login};
          </li>
          <li className="text-[1.6rem] leading-[2.4rem] text-[#ffffff]">
            Email: {email || 'private'};
          </li>
          <li className="text-[1.6rem] leading-[2.4rem] text-[#ffffff]">
            Contributions: {contributions}.
          </li>
        </ul>
      </div>
    )}
  </div>
);

export default DropdownItem;
