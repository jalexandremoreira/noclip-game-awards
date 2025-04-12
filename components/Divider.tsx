'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';

interface Props {
  children?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function Divider({ children, isOpen, setIsOpen }: Props) {
  const { isMobile } = useAppDimensions();

  return (
    <Stack
      style={{
        cursor: 'pointer',
      }}
      alignItems="center"
      direction="row"
      gap="20px"
      onClick={setIsOpen}
      width="100%"
    >
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="nowrap"
        gap="3px"
        height="1px"
        width={isOpen ? '100%' : 6}
        sx={{
          transition: 'width 400ms',
        }}
      >
        <Stack bgcolor="#fff" width="3px" height="1px" />

        <Stack bgcolor="#fff" height="1px" flex={1} />
      </Stack>

      <Typography
        color="#fff"
        fontSize={isMobile ? '26px' : '35px'}
        style={{ userSelect: 'none' }}
      >
        {children}
      </Typography>

      <Stack direction="row" gap="3px" alignItems="center" width="100%">
        <Box
          bgcolor="#fff"
          height="1px"
          sx={{
            display: 'inline-block',
            width: '100%',
          }}
        />

        <Stack bgcolor="#fff" width="3px" height="1px" />
      </Stack>
    </Stack>
  );
}
