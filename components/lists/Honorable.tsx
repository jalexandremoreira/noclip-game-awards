import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Honorable({
  list,
}: {
  list: { title: string; link: string }[];
}) {
  return (
    <Typography color="#fff" fontSize="22px">
      Honorable mentions:&nbsp;
      {list.map(({ title, link }, index) => (
        <Typography key={index} display="inline" component="span">
          <Typography
            color="primary.main"
            component="span"
            display="inline"
            fontSize="22px"
            fontWeight="bold"
            sx={{
              transition: 'opacity 0.2s ease',
              '&:hover': { opacity: '80%' },
            }}
          >
            <Link href={link} target="_blank">
              {title}
            </Link>

            {index !== list.length - 1 && (
              <Typography
                color="#fff"
                component="span"
                display="inline"
                fontSize="22px"
              >
                ,&nbsp;
              </Typography>
            )}
          </Typography>
        </Typography>
      ))}
    </Typography>
  );
}
