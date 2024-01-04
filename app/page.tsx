'use client';

import React from 'react';
import Stack from '@mui/material/Stack';

import Divider from '@/components/Divider';
import useAppDimensions from '@/hooks/useAppDimensions';
import List23 from '@/components/lists/2023';

export default function Home() {
  const {
    isMobile,
    maxWidthDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    paddingXMobile,
  } = useAppDimensions();

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
      >
        <Divider>2023</Divider>

        <List23 />
      </Stack>
    </Stack>
  );
}
