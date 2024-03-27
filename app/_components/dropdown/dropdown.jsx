import { fetchContributor } from '@app/api';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import { DropdownItem } from './dropdown-item';

export const DropdownList = ({ data }) => {
  const [selectedId, setSelectedId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [contributors, setContributors] = useState({});
  console.log(contributors);
  useEffect(() => {
    if (selectedId && !contributors[selectedId]) {
      fetchContributor({
        login: data.find(item => item.id === selectedId).login,
      })
        .then(contributor => {
          setContributors(previousState => ({
            ...previousState,
            [selectedId]: contributor,
          }));
        })
        .catch(error => {
          console.error('Error fetching contributor:', error);
        });
    }
  }, [selectedId, contributors, data]);
  useLayoutEffect(() => {
    if (contributors[selectedId]) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [contributors, selectedId]);
  const handleClick = useCallback(
    item => {
      if (selectedId === item.id) {
        setSelectedId();
        setIsOpen(false);
      } else {
        setSelectedId(item.id);
      }
    },
    [selectedId],
  );

  return (
    <ul className="flex flex-wrap items-start justify-start gap-[3rem]">
      {data.map(item => (
        <DropdownItem
          key={item.id}
          data={{
            link: item.html_url,
            image: item.avatar_url,
            name: contributors[item.id] ? contributors[item.id].name : '',
            login: item.login,
            contributions: item.contributions,
            email: contributors[item.id] ? contributors[item.id].email : '',
          }}
          isOpen={selectedId === item.id && isOpen}
          onClick={() => handleClick(item)}
        />
      ))}
    </ul>
  );
};

export default DropdownList;
