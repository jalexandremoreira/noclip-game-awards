import React from 'react';
import Image from 'next/image';

import ListItem from '@/components/ListItem';
import awards from '@/components/awards';

export default function List() {
  const {
    Balatro,
    AstroBot,
    UFO50,
    MouthWashing,
    Resist,
    Lorelei,
    Anthology,
    Metaphor,
    Indiana,
  } = awards;

  return (
    <>
      {[
        {
          award: 'My Dad Went Out for a Pack of Balatro and Never Came Back',
          game: 'Balatro',
          comment: `I can't stop playing this, send help 😭`,
          logo: <Balatro size={175} />,
          links: [
            'https://store.steampowered.com/app/2379780/Balatro/',
            'https://x.com/BalatroGame',
            'https://www.playbalatro.com',
          ],
        },
        {
          award: 'They Made One Like They Used To',
          game: 'Astro Bot',
          comment: null,
          logo: <AstroBot size={175} />,
          links: [
            'https://www.playstation.com/en-gb/games/astro-bot/',
            'https://x.com/teamasobi',
            'https://www.teamasobi.com',
          ],
        },
        {
          award: 'Dé Jà Nü',
          game: 'UFO 50',
          comment: `I removed the umlaut because it didn't look good 🥲`,
          logo: <UFO50 size={175} />,
          links: [
            'https://store.steampowered.com/app/1147860/UFO_50/',
            'https://x.com/mossmouth?lang=en',
            'https://www.mossmouth.com',
          ],
        },
        {
          award: 'Burns as it Cleans',
          game: 'Mouthwashing',
          comment: null,
          logo: <MouthWashing size={175} />,
          links: [
            'https://store.steampowered.com/app/2475490/Mouthwashing/',
            'https://x.com/wrong_organ?lang=en',
            'https://www.wrongorgan.com',
          ],
        },
        {
          award: 'Radical Vision',
          game: '1000xRESIST',
          comment: null,
          logo: <Resist size={175} />,
          links: [
            'https://store.steampowered.com/app/1675830/1000xRESIST/',
            'https://x.com/1000xResist',
            'https://www.sunsetvisitor.studio',
          ],
        },
        {
          award: 'Killer Seventh Seal',
          game: 'Lorelei and the Laser Eyes',
          comment: null,
          logo: <Lorelei size={175} />,
          links: [
            'https://store.steampowered.com/app/2008920/Lorelei_and_the_Laser_Eyes/',
            'https://x.com/simogo?lang=en',
            'https://simogo.com',
          ],
        },
        {
          award: 'Newgrounds Expressionism',
          game: 'Anthology Of The Killer',
          comment: null,
          logo: <Anthology size={175} />,
          links: [
            'https://store.steampowered.com/app/3212530/Anthology_Of_The_Killer/',
          ],
        },
        {
          award: 'Endless Vacation',
          game: 'Like a Dragon: Infinite Wealth',
          comment: null,
          logo: (
            <Image
              alt="noclip"
              height={98.07}
              priority
              src="/endless.png"
              width={175}
            />
          ),
          links: [
            'https://store.steampowered.com/app/2072450/Like_a_Dragon_Infinite_Wealth/',
            'https://x.com/RGGStudio',
            'https://rggstudio.sega.com/en_gb/',
          ],
        },
        {
          award: 'J.R.P.G. Tolkien',
          game: 'Metaphor: ReFantazio',
          comment: 'The dots were removed by popular demand.',
          logo: <Metaphor size={175} />,
          links: [
            'https://store.steampowered.com/app/2679460/Metaphor_ReFantazio/',
            'https://x.com/atlus_west?lang=en',
            'https://atlus.com',
          ],
        },
        {
          award: 'Hatman: World of Exploration',
          game: 'Indiana Jones and the Great Circle',
          comment: `I couldn't think of what to do with this one... 🫠`,
          logo: <Indiana size={175} />,
          links: [
            'https://store.steampowered.com/app/2677660/Indiana_Jones_and_the_Great_Circle/',
            'https://x.com/machinegames?lang=en',
            'https://www.machinegames.com',
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
