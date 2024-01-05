'use client';

import React from 'react';
import Stack from '@mui/material/Stack';

import Divider from '@/components/Divider';
import useAppDimensions from '@/hooks/useAppDimensions';
import List23 from '@/components/lists/2023';
import List22 from '@/components/lists/2022';
import Honorable from '@/components/lists/Honorable';

export default function Home() {
  const {
    isMobile,
    maxWidthDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    paddingXMobile,
  } = useAppDimensions();

  React.useEffect(() => {
    document.title = 'noclip game awards';
  }, []);

  const honorable2023 = [
    {
      title: 'Mosa Lina',
      link: 'https://store.steampowered.com/app/2477090/Mosa_Lina/',
    },
    {
      title: 'Hi-Fi RUSH',
      link: 'https://store.steampowered.com/app/1817230/HiFi_RUSH/',
    },
    {
      title: 'COCOON',
      link: 'https://store.steampowered.com/app/1497440/COCOON/',
    },
    {
      title: 'Street Fighter 6',
      link: 'https://store.steampowered.com/app/1364780/Street_Fighter_6/',
    },
    {
      title: 'Jusant',
      link: 'https://store.steampowered.com/app/1977170/Jusant/',
    },
    {
      title: 'Chants of Sennaar',
      link: 'https://store.steampowered.com/app/1931770/Chants_of_Sennaar/',
    },
    {
      title: 'Terra Nil',
      link: 'https://store.steampowered.com/app/1593030/Terra_Nil/',
    },
    {
      title: 'Lies of P',
      link: 'https://store.steampowered.com/app/1627720/Lies_of_P/',
    },
    {
      title: 'DREDGE',
      link: 'https://store.steampowered.com/app/1562430/DREDGE/',
    },
  ];

  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        gap="50px"
        height="100%"
        maxWidth={maxWidthDesktop}
        paddingTop={paddingTopDesktop}
        paddingX={paddingXDesktop}
        width="100%"
        paddingBottom="50px"
      >
        <Divider>2023</Divider>

        <List23 />

        {honorable2023 && <Honorable list={honorable2023} />}

        <Divider>2022</Divider>

        <List22 />
      </Stack>
    </Stack>
  );
}
