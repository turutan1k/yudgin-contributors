'use client';

import { fetchContributors } from '@app/api/get-contributors/get-contributors';
import React, { useEffect, useState } from 'react';

import { ContributorsList } from './contributors-list';

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
    <div>
      <h1>Contributors List</h1>
      <ContributorsList data={contributors} />
    </div>
  );
};

export default Contributors;
