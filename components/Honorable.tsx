import React from 'react';
import { Typography, Link } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';

export default function Honorable({
  list,
}: {
  list: { title: string; link: string }[];
}) {
  const { isMobile } = useAppDimensions();

  const fontSize = isMobile ? '18px' : '22px';

  return (
    <Typography color="#fff" fontSize={fontSize}>
      Honorable mentions:&nbsp;
      {list.map(({ title, link }, index) => (
        <Typography key={index} display="inline" component="span">
          <Typography
            color="primary.main"
            component="span"
            display="inline"
            fontSize={fontSize}
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
                fontSize={fontSize}
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
