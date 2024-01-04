import React from 'react';

import ListItem from '@/components/ListItem';
import awards from '@/components/awards';

export default function List() {
  const { SlayersX, FFXVI, REIV } = awards;

  return (
    <>
      {[
        {
          award: 'Zane Lofton Lifetime Achievement Award',
          game: 'Slayers X: Terminal Aftermath: Vengance of the Slayer',
          logo: <SlayersX size={175} />,
        },
        {
          award: 'Best AMV',
          game: 'Final Fantasy XVI',
          logo: <FFXVI size={175} />,
        },
        {
          award: 'Master of REmaking',
          game: 'Resident Evil IV Remake',
          logo: <REIV size={175} />,
        },
      ].map(({ award, game, logo }, index) => (
        <ListItem key={index} award={award} game={game}>
          {logo}
        </ListItem>
      ))}
    </>
  );
}
