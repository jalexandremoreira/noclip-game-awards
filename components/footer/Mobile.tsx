'use client';

import React from 'react';
import { Stack, Typography, Link } from '@mui/material';

export default function NavbarDesktop() {
  const fontSize = '14px';

  const link = {
    transition: 'opacity 0.2s ease',
    '&:hover': { opacity: '80%' },
    fontSize: fontSize,
    color: 'primary.main',
    fontWeight: 'bold',
  };

  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Typography color="white" fontSize={fontSize} textAlign="center">
        These awards were given by the gentlemen at the&nbsp;
        <Typography sx={link} component="span">
          <Link href="https://twitter.com/noclipvideo" target="_blank">
            noclip
          </Link>
        </Typography>
        &nbsp;podcast.
      </Typography>

      <Typography color="white" fontSize={fontSize} textAlign="center">
        I do not own the rights to any of this stuff, please don&apos;t sue me
        :)
      </Typography>

      <Typography color="white" fontSize={fontSize} textAlign="center">
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

      <Typography color="white" fontSize={fontSize}>
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
