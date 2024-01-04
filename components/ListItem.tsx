import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Link from 'next/link';

interface Props {
  award: string;
  children: React.ReactNode;
  game: string;
}

export default function ListItem({ children, game, award }: Props) {
  return (
    <Stack direction="row" gap="40px" alignItems="center">
      {children && children}

      <Stack flex={1}>
        <Typography color="#fff" fontSize="22px">
          {award}&nbsp;awarded to&nbsp;{game}
        </Typography>

        <Typography color="#fff">links</Typography>
      </Stack>
    </Stack>
  );
}
