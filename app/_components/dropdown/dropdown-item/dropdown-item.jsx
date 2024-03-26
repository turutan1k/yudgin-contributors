import Image from 'next/image';
import React from 'react';

export const DropdownItem = ({
  data: { link, image, name, login, email, contributions },
  isOpen,
  onClick,
}) => (
  <div className="flex flex-col items-start justify-start gap-[2rem]">
    <div
      aria-hidden
      className="relative flex w-[32.75rem] items-center justify-start gap-[2rem] rounded-[2rem] bg-[#27292e] p-[2rem]"
      onClick={onClick}
    >
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
      <ul className="p-[2rem]">
        <li className="text-[1.6rem] leading-[2.4rem]">Name: {name};</li>
        <li className="text-[1.6rem] leading-[2.4rem]">Login: {login};</li>
        <li className="text-[1.6rem] leading-[2.4rem]">Email: {email};</li>
        <li className="text-[1.6rem] leading-[2.4rem]">
          Contributions: {contributions}.
        </li>
      </ul>
    )}
  </div>
);

export default DropdownItem;
