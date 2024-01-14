'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';

export default function Divider({ children }: { children?: string }) {
  const { isMobile } = useAppDimensions();

  return (
    <Stack width="100%" direction="row" gap="20px">
      <Stack direction="row" gap="3px" alignItems="center" width="100%">
        <Stack bgcolor="#fff" width="3px" height="1px" />
        <Box
          bgcolor="#fff"
          sx={{
            display: 'inline-block',
            width: '100%',
          }}
          height="1px"
        />
      </Stack>
      <Typography color="#fff" fontSize={isMobile ? '26px' : '35px'}>
        {children}
      </Typography>
      <Stack direction="row" gap="3px" alignItems="center" width="100%">
        <Box
          bgcolor="#fff"
          sx={{
            display: 'inline-block',
            width: '100%',
          }}
          height="1px"
        />
        <Stack bgcolor="#fff" width="3px" height="1px" />
      </Stack>
    </Stack>
  );
}
