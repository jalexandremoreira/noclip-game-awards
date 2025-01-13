'use client';

import React from 'react';
import Stack from '@mui/material/Stack';

import Divider from '@/components/Divider';
import FooterDesktop from '@/components/footer/Desktop';
import FooterMobile from '@/components/footer/Mobile';
import Honorable from '@/components/Honorable';
import List22 from '@/components/lists/2022';
import List23 from '@/components/lists/2023';
import List24 from '@/components/lists/2024';
import useAppDimensions from '@/hooks/useAppDimensions';
import { honorable2023 } from '../components/lists/2023/honorable';
import { honorable2024 } from '@/components/lists/2024/honorable';

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

  if (!isMobile) {
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
          <Divider>2024</Divider>

          <List24 />

          {honorable2024 && <Honorable list={honorable2024} />}

          <Divider>2023</Divider>

          <List23 />

          {honorable2023 && <Honorable list={honorable2023} />}

          <Divider>2022</Divider>

          <List22 />

          <FooterDesktop />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        gap="40px"
        height="100%"
        paddingTop={paddingTopMobile}
        paddingX={paddingXMobile}
        width="100%"
        paddingBottom="20px"
      >
        <Divider>2024</Divider>

        <List24 />

        {honorable2024 && <Honorable list={honorable2024} />}

        <Divider>2023</Divider>

        <List23 />

        {honorable2023 && <Honorable list={honorable2023} />}

        <Divider>2022</Divider>

        <List22 />

        <FooterMobile />
      </Stack>
    </Stack>
  );
}
