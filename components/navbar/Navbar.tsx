'use client';

import React from 'react';

import useAppDimensions from '@/hooks/useAppDimensions';
import NavbarDesktop from './Desktop';
import NavbarMobile from './Mobile';

export default function Navbar() {
  const { isMobile } = useAppDimensions();

  if (!isMobile) {
    return <NavbarDesktop />;
  }
  return <NavbarMobile />;
}
