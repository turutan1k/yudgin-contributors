import React from 'react';

import { ContributorItem } from './contributor-item';

export const ContributorsList = ({ data }) => (
  <ul className="flex flex-wrap items-start justify-between gap-[5rem]">
    {data.map(item => (
      <ContributorItem key={item?.id} item={item} />
    ))}
  </ul>
);

export default ContributorsList;
