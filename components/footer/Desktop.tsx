'use client';

import React from 'react';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';

export default function NavbarDesktop() {
  const link = {
    transition: 'opacity 0.2s ease',
    '&:hover': { opacity: '80%' },
    fontSize: '18px',
    color: 'primary.main',
    fontWeight: 'bold',
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      paddingTop="50px"
      width="100%"
    >
      <Typography color="white" fontSize="18px">
        These awards were given by the gentlemen at the&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://twitter.com/noclipvideo" target="_blank">
            noclip
          </Link>
        </Typography>
        &nbsp;podcast. I do not own the rights to any of this stuff, please
        don&apos;t sue me :)
      </Typography>

      <Typography color="white" fontSize="18px">
        noclip are:&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://twitter.com/dannyodwyer" target="_blank">
            Danny O&apos;Dwyer
          </Link>
        </Typography>
        ,&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://twitter.com/JeremyBJayne" target="_blank">
            Jeremy Jayne
          </Link>
        </Typography>
        ,&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://twitter.com/FrankHowley" target="_blank">
            Frank Howley
          </Link>
        </Typography>
        ,&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://twitter.com/Guarascia" target="_blank">
            Jesse Guarascia
          </Link>
        </Typography>
      </Typography>

      <Typography color="white" fontSize="18px">
        Made for fun by&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://github.com/jalexandremoreira" target="_blank">
            @jalexandremoreira
          </Link>
        </Typography>
      </Typography>
    </Stack>
  );
}