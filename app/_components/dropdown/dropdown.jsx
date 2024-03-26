import { fetchContributor } from '@app/api';
import React, { useCallback, useEffect, useState } from 'react';

import { DropdownItem } from './dropdown-item';

export const DropdownList = ({ data }) => {
  const [id, setId] = useState();
  const [login, setLogin] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [contributor, setContributor] = useState([]);
  const toggleOpen = useCallback(
    openId => {
      setIsOpen(previousId => (previousId === openId ? undefined : openId));
    },
    [setId],
  );
  useEffect(() => {
    if (login && id) {
      fetchContributor({ login })
        .then(c => {
          setContributor(c);
        })
        .then(() => {
          toggleOpen(id);
        })
        .catch(error => {
          console.error('Error fetching contributor:', error);
        });
    }
  }, [login, id]);

  const handleClick = useCallback(
    item => {
      setId(item?.id);
      setLogin(item?.login);
    },
    [toggleOpen],
  );

  return (
    <ul className="flex flex-wrap items-start justify-start gap-[3rem]">
      {data.map(item => (
        <DropdownItem
          key={item.id}
          data={{
            link: item.html_url,
            image: item.avatar_url,
            name: contributor?.name,
            login: item?.login,
            contributions: item?.contributions,
            email: contributor?.email,
          }}
          isOpen={id === item.id}
          onClick={() => handleClick(item)}
        />
      ))}
    </ul>
  );
};

export default DropdownList;
