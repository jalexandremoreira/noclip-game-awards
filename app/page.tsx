'use client';

import React from 'react';
import Stack from '@mui/material/Stack';

import Divider from '@/components/Divider';
import FooterDesktop from '@/components/footer/Desktop';
import FooterMobile from '@/components/footer/Mobile';
import Honorable from '@/components/Honorable';
import List22 from '@/components/lists/2022';
import List23 from '@/components/lists/2023';
import List24 from '@/components/lists/2024';
import useAppDimensions from '@/hooks/useAppDimensions';
import { honorable2023 } from '../components/lists/2023/honorable';
import { honorable2024 } from '@/components/lists/2024/honorable';

export default function Home() {
  const {
    isMobile,
    maxWidthDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    paddingXMobile,
  } = useAppDimensions();

  const [isOpen, setIsOpen] = React.useState([true, true, true]);

  React.useEffect(() => {
    document.title = 'noclip game awards';
  }, []);

  // TODO: create a wrapper that checks for the platform and returns the same child
  if (!isMobile) {
    return (
      <Stack
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Stack
          gap="50px"
          height="100%"
          maxWidth={maxWidthDesktop}
          paddingTop={paddingTopDesktop}
          paddingX={paddingXDesktop}
          width="100%"
          paddingBottom="50px"
        >
          {/* TODO: create a wrapper that has a contained state */}
          <Divider
            isOpen={isOpen[2]}
            setIsOpen={() => setIsOpen([isOpen[0], isOpen[1], !isOpen[2]])}
          >
            2024
          </Divider>

          {isOpen[2] && <List24 />}

          {isOpen[2] && honorable2024 && <Honorable list={honorable2024} />}

          <Divider
            isOpen={isOpen[1]}
            setIsOpen={() => setIsOpen([isOpen[0], !isOpen[1], isOpen[2]])}
          >
            2023
          </Divider>

          {isOpen[1] && <List23 />}

          {isOpen[1] && honorable2023 && <Honorable list={honorable2023} />}

          <Divider
            isOpen={isOpen[0]}
            setIsOpen={() => setIsOpen([!isOpen[0], isOpen[1], isOpen[2]])}
          >
            2022
          </Divider>

          {isOpen[0] && <List22 />}

          <FooterDesktop />
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        gap="40px"
        height="100%"
        paddingTop={paddingTopMobile}
        paddingX={paddingXMobile}
        width="100%"
        paddingBottom="20px"
      >
        <Divider
          isOpen={isOpen[2]}
          setIsOpen={() => setIsOpen([isOpen[0], isOpen[1], !isOpen[2]])}
        >
          2024
        </Divider>

        {isOpen[2] && <List24 />}

        {isOpen[2] && honorable2024 && <Honorable list={honorable2024} />}

        <Divider
          isOpen={isOpen[1]}
          setIsOpen={() => setIsOpen([isOpen[0], !isOpen[1], isOpen[2]])}
        >
          2023
        </Divider>

        {isOpen[1] && <List23 />}

        {isOpen[1] && honorable2023 && <Honorable list={honorable2023} />}

        <Divider
          isOpen={isOpen[0]}
          setIsOpen={() => setIsOpen([!isOpen[0], isOpen[1], isOpen[2]])}
        >
          2022
        </Divider>

        {isOpen[0] && <List22 />}

        <FooterMobile />
      </Stack>
    </Stack>
  );
}
