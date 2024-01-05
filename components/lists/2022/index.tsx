import React from 'react';

import ListItem from '@/components/ListItem';
import awards from '@/components/awards';

export default function List() {
  const {
    Tunic,
    COD,
    Horizon,
    GOW,
    Pentiment,
    Immortality,
    NW,
    Citizen,
    Signalis,
    WeirdWest,
    Lamb,
    EldenRing,
    Vampire,
    MonkeyIsland,
  } = awards;

  return (
    <>
      {[
        {
          award: 'Rediscovering Mystery',
          game: 'TUNIC',
          comment: null,
          logo: <Tunic size={175} />,
          links: [
            'https://store.steampowered.com/app/553420/TUNIC/',
            'https://twitter.com/tunicgame?lang=en',
            'https://tunicgame.com/',
          ],
        },
        {
          award: 'Gaming with the Homies',
          game: 'Call of Duty: Modern Warfare II',
          comment: '(overwhelmingly negative on steam, yikes)',
          logo: <COD size={175} />,
          links: [
            'https://store.steampowered.com/app/1962660/Call_of_Duty_Modern_Warfare_II/',
            'https://twitter.com/CallofDuty',
            'https://www.callofduty.com/modernwarfare2',
          ],
        },
        {
          award: 'Best Road Trip',
          game: 'Horizon Forbidden West',
          comment: null,
          logo: <Horizon size={175} />,
          links: [
            'https://store.steampowered.com/app/2420110/Horizon_Forbidden_West_Complete_Edition/',
            'https://twitter.com/Guerrilla',
            'https://www.guerrilla-games.com/',
          ],
        },
        {
          award: 'Father of the Year',
          game: 'God of War Ragnarök',
          comment: null,
          logo: <GOW size={175} />,
          links: [
            'https://www.playstation.com/en-se/games/god-of-war-ragnarok/',
            'https://twitter.com/SonySantaMonica',
            'https://sms.playstation.com/',
          ],
        },
        {
          award: 'Tapestry of Humanity',
          game: 'Pentiment',
          comment: '(omg just go play this game already!)',
          logo: <Pentiment size={175} />,
          links: [
            'https://store.steampowered.com/app/1205520/Pentiment/',
            'https://twitter.com/Obsidian',
            'https://www.obsidian.net/games/pentiment',
          ],
        },
        {
          award: 'Best Picture',
          game: 'IMMORTALITY',
          comment: null,
          logo: <Immortality size={175} />,
          links: [
            'https://store.steampowered.com/app/1350200/IMMORTALITY/',
            'https://twitter.com/HalfMermaid',
            'https://halfmermaid.co/',
          ],
        },
        {
          award: 'Gawd of Speed',
          game: 'Neon White',
          comment: null,
          logo: <NW size={175} />,
          links: [
            'https://store.steampowered.com/app/1533420/Neon_White/',
            'https://twitter.com/PlayNeonWhite',
            'https://neonwhite.rip/',
          ],
        },
        {
          award: 'Narrative Sashimi',
          game: 'Citizen Sleeper',
          comment: null,
          logo: <Citizen size={175} />,
          links: [
            'https://store.steampowered.com/app/1578650/Citizen_Sleeper/',
            'https://twitter.com/jumpovertheage?lang=en',
            'https://www.fellowtraveller.games/citizen-sleeper',
          ],
        },
        {
          award: 'Survival Horror Homecoming',
          game: 'SIGNALIS',
          comment: null,
          logo: <Signalis size={175} />,
          links: [
            'https://store.steampowered.com/app/1262350/SIGNALIS/',
            'https://twitter.com/LastStarfarer',
            'https://rose-engine.org/',
          ],
        },
        {
          award: 'Occult Classic',
          game: 'Weird West',
          comment: null,
          logo: <WeirdWest size={175} />,
          links: [
            'https://store.steampowered.com/app/1097350/Weird_West_Definitive_Edition/',
            'https://twitter.com/wolfeyegames?lang=en',
            'https://www.weirdwest.com/',
          ],
        },
        {
          award: 'Sweetest Execution',
          game: 'Cult of the Lamb',
          comment: null,
          logo: <Lamb size={175} />,
          links: [
            'https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/',
            'https://twitter.com/cultofthelamb',
            'https://www.cultofthelamb.com/',
          ],
        },
        {
          award: 'Grandest Adventure',
          game: 'ELDEN RING',
          comment: null,
          logo: <EldenRing size={175} />,
          links: [
            'https://store.steampowered.com/app/1245620/ELDEN_RING/',
            'https://twitter.com/ELDENRING',
            'https://en.bandainamcoent.eu/elden-ring/elden-ring',
          ],
        },
        {
          award: 'Best Fang For Your Buck',
          game: 'Vampire Survivors',
          comment: null,
          logo: <Vampire size={175} />,
          links: [
            'https://store.steampowered.com/app/1794680/Vampire_Survivors/',
            'https://twitter.com/poncle_vampire',
            'https://poncle.games/',
          ],
        },
        {
          award: 'Best Fang For Your Buck',
          game: 'Return to Monkey Island',
          comment: null,
          logo: <MonkeyIsland size={175} />,
          links: [
            'https://store.steampowered.com/app/2060130/Return_to_Monkey_Island/',
            'https://twitter.com/terribletoybox',
            'https://returntomonkeyisland.com/',
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
