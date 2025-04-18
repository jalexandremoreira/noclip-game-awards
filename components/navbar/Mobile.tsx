import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import Link from 'next/link';
import useAppDimensions from '../../hooks/useAppDimensions';

export default function NavbarMobile() {
  const { paddingXMobile } = useAppDimensions();

  return (
    <Stack
      alignItems="center"
      bgcolor="#1F0800"
      className="prevent-select"
      id="navbar"
      justifyContent="center"
      left={0}
      paddingTop="30px"
      paddingY="12px"
      top={0}
      width="100%"
      zIndex={100}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="20%"
        margin="auto"
        paddingX={paddingXMobile}
        width="100%"
      >
        <Stack
          alignItems="center"
          direction="row"
          flex={1}
          height="100%"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            height="100%"
            spacing="3px"
            alignItems="center"
          >
            <Image
              alt="noclip"
              height={29}
              priority
              src="/noclip.png"
              width={106}
            />

            <Typography color="white" fontSize="18px">
              game awards
            </Typography>
          </Stack>

          <Link href="https://noclippodcast.libsyn.com/" target="_blank">
            <Typography
              color="primary.main"
              fontSize="16px"
              fontWeight="bold"
              sx={{
                transition: 'opacity 0.2s ease',
                '&:hover': { opacity: '80%' },
              }}
            >
              listen here
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
