'use client';

import { fetchContributors } from '@app/api/get-contributors/get-contributors';
import React, { useEffect, useState } from 'react';

import { DropdownList } from '../dropdown';

export const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetchContributors()
      .then(data => {
        setContributors(data);
      })
      .catch(error => {
        console.error('Error fetching contributors:', error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center pb-[5rem]">
        <h1 className="text-[#fff]">Contributors List</h1>
      </div>
      <DropdownList data={contributors} />
    </>
  );
};

export default Contributors;
