'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Link } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';
import ListLinks from './ListLinks';

interface Props {
  award: string;
  children: React.ReactNode;
  game: string;
  links?: string[];
  comment: string | null;
}

export default function ListItem({
  children,
  game,
  award,
  links,
  comment,
}: Props) {
  const { isMobile } = useAppDimensions();

  if (!isMobile) {
    return (
      <Stack direction="row" gap="60px" alignItems="center">
        {children && children}

        <Stack flex={1} gap="10px">
          <Typography color="#fff" fontSize="22px">
            <Typography
              color="#fff"
              fontSize="22px"
              display="inline"
              fontStyle="italic"
              component="span"
            >
              {award}
            </Typography>
            &nbsp;awarded to&nbsp;{game}
          </Typography>
          {comment && (
            <Typography color="#fff" fontSize="16px">
              &nbsp;{comment}
            </Typography>
          )}

          {links && <ListLinks links={links} />}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack gap="10px" alignItems="center" width="100%">
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        width="100%"
      >
        {children && children}

        {links && <ListLinks links={links} />}
      </Stack>

      <Stack flex={1} width="100%">
        <Typography color="#fff" fontSize="18px">
          <Typography
            color="#fff"
            fontSize="18px"
            display="inline"
            fontStyle="italic"
            component="span"
          >
            {award}
          </Typography>
          &nbsp;awarded to&nbsp;{game}
        </Typography>
        {comment && (
          <Typography color="#fff" fontSize="16px">
            &nbsp;{comment}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
