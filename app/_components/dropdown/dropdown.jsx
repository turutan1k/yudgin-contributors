import React, { useCallback, useState } from 'react';

import { DropdownItem } from './dropdown-item';

export const Dropdown = ({ data }) => {
  const [openId, setOpenId] = useState();

  const toggleOpen = useCallback(id => {
    setOpenId(previousId => (previousId === id ? '' : id));
  }, []);

  return (
    <ul className="flex flex-wrap items-start justify-start gap-[3rem]">
      {data.map(item => (
        <DropdownItem
          key={item?.id}
          item={item}
          isOpen={openId === item.id}
          onClick={() => toggleOpen(item.id)}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
