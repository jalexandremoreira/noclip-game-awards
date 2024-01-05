import React from 'react';

import ListItem from '@/components/ListItem';
import awards from '@/components/awards';

export default function List() {
  const { SlayersX } = awards;

  return (
    <>
      {[
        {
          award: 'Zane Lofton Lifetime Achievement Award',
          game: 'Slayers X: Terminal Aftermath: Vengance of the Slayer',
          comment: null,
          logo: <SlayersX size={175} />,
          links: [
            'https://store.steampowered.com/app/1931020/Slayers_X_Terminal_Aftermath_Vengance_of_the_Slayer/',
            'https://twitter.com/Zane_Rocks_36',
          ],
        },
      ].map(({ award, game, logo, links, comment }, index) => (
        <ListItem
          key={index}
          award={award}
          game={game}
          links={links}
          comment={comment}
        >
          {logo}
        </ListItem>
      ))}
    </>
  );
}
