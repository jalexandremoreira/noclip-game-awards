import React from 'react';

import ListItem from '@/components/ListItem';
import awards from '@/components/awards';

export default function List() {
  const {
    SlayersX,
    FFXVI,
    REIV,
    Typecast,
    HomeBody,
    Blasph,
    Bombrush,
    Dave,
    BG3,
    Midnight,
    AlanWake,
  } = awards;

  return (
    <>
      {[
        {
          award: 'Zane Lofton Lifetime Achievement Award',
          game: 'Slayers X: Terminal Aftermath: Vengance of the Slayer',
          comment: null,
          logo: <SlayersX size={175} />,
          links: [
            'https://store.steampowered.com/app/1931020/Slayers_X_Terminal_Aftermath_Vengance_of_the_Slayer/',
            'https://twitter.com/Zane_Rocks_36',
          ],
        },
        {
          award: 'Best AMV',
          game: 'Final Fantasy XVI',
          comment: null,
          logo: <FFXVI size={175} />,
          links: [
            'https://www.playstation.com/sv-se/games/final-fantasy-xvi/',
            'https://twitter.com/finalfantasyxvi?lang=en',
            'https://na.finalfantasyxvi.com/',
          ],
        },
        {
          award: 'Master of REmaking',
          game: 'Resident Evil IV Remake',
          comment: null,
          logo: <REIV size={175} />,
          links: [
            'https://store.steampowered.com/app/2050650/Resident_Evil_4/',
            'https://twitter.com/CapcomUSA_',
            'https://www.residentevil.com/re4/en-asia/',
          ],
        },
        {
          award: 'Stroke of Genius',
          game: 'TYPECAST',
          comment: null,
          logo: <Typecast size={175} />,
          links: [
            'https://store.steampowered.com/app/2536650/TYPECAST/',
            'https://twitter.com/offElectric',
            'https://offelectric.com/',
          ],
        },
        {
          award: 'Closest to Home',
          game: 'Homebody',
          comment: null,
          logo: <HomeBody size={175} />,
          links: [
            'https://store.steampowered.com/app/1959350/Homebody/',
            'https://twitter.com/HomebodyGame',
          ],
        },
        {
          award: 'Catholic Guilty Pleasure',
          game: 'Blasphemous 2',
          comment: null,
          logo: <Blasph size={175} />,
          links: [
            'https://store.steampowered.com/app/2114740/Blasphemous_2/',
            'https://twitter.com/BlasphemousGame',
            'https://www.blasphemous2game.com/',
          ],
        },
        {
          award: 'best dreamcast game 👍',
          game: 'Bomb Rush Cyberfunk',
          comment:
            '(I took the liberty of replacing the thumbs up emoji with a smiley face as was discussed in the episode)',
          logo: <Bombrush size={175} />,
          links: [
            'https://store.steampowered.com/app/1353230/Bomb_Rush_Cyberfunk/',
            'https://twitter.com/ReptileGames',
            'https://t.co/6QrGI7yumZ',
          ],
        },
        {
          award: 'Hidden Depth',
          game: 'DAVE THE DIVER',
          comment: null,
          logo: <Dave size={175} />,
          links: [
            'https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/',
            'https://twitter.com/DaveDiverGame',
            'https://mintrocketgames.com/en/DaveTheDiver',
          ],
        },
        {
          award: 'Most Immersive Sim',
          game: `Baldur's Gate 3`,
          comment: null,
          logo: <BG3 size={175} />,
          links: [
            'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
            'https://twitter.com/larianstudios',
            'https://larian.com/',
          ],
        },
        {
          award: 'Marvel vs. XCOM Award',
          game: `Marvel's Midnight Suns`,
          comment: null,
          logo: <Midnight size={175} />,
          links: [
            'https://store.steampowered.com/app/368260/Marvels_Midnight_Suns/',
            'https://twitter.com/firaxisgames?lang=en',
            'https://midnightsuns.2k.com/',
          ],
        },
        {
          award: 'Boldest Flavor',
          game: `Alan Wake 2`,
          comment: null,
          logo: <AlanWake size={175} />,
          links: [
            'https://www.playstation.com/en-se/games/alan-wake-2/',
            'https://twitter.com/alanwake',
            'https://www.alanwake.com/',
          ],
        },
      ].map(({ award, game, logo, links, comment }, index) => (
        <ListItem
          key={index}
          award={award}
          game={game}
          links={links}
          comment={comment}
        >
          {logo}
        </ListItem>
      ))}
    </>
  );
}
