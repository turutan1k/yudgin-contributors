import Image from 'next/image';
import React from 'react';

export const DropdownItem = ({ item, isOpen, onClick }) => (
  <div className="flex flex-col items-start justify-start gap-[2rem]">
    <div
      aria-hidden
      className="relative flex w-[32.75rem] items-center justify-start gap-[2rem] rounded-[2rem] bg-[#27292e] p-[2rem]"
      onClick={onClick}
    >
      <a
        className="relative isolate flex h-[6.4rem] w-[6.4rem] items-center justify-center overflow-hidden rounded-[100%]"
        href={item?.html_url}
      >
        <Image
          fill
          src={item?.avatar_url}
          alt=""
          target="_blank"
          className="h-full w-full object-contain"
        />
      </a>
      <div className="relative z-[2] text-[1.6rem] leading-[2.4rem] text-[#fff]">
        {item?.login}
      </div>
    </div>
    <div className={`${isOpen ? 'opacity-1' : 'opacity-0'}`}>112312</div>
  </div>
);

export default DropdownItem;
