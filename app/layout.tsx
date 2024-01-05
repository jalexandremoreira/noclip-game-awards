'use client';

import Stack from '@mui/material/Stack';
import { Pragati_Narrow } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import ThemeRegistry from '@/theme/ThemeRegistry';

const pragati = Pragati_Narrow({
  subsets: ['latin-ext'],
  variable: '--font-sintony',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={pragati.className}
        style={{ backgroundColor: '#1F0800' }}
      >
        <ThemeRegistry options={{ key: 'css' }}>
          <Stack
            direction="column"
            display="flex"
            flex={1}
            justifyContent="flex-start"
            width="100%"
            sx={{
              overflowY: 'auto',
            }}
          >
            <Navbar />

            {children && children}
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
