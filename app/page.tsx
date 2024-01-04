'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';

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
        <Stack width="100%" direction="row" gap="50px">
          <Typography color="#fff">hello</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
