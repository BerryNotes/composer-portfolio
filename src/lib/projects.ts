export type Track = {
  title: string;
  duration?: string;
  src?: string;
  spotifyTrackId?: string;
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  role: string;
  year: string;
  category:
    | "Film"
    | "Television"
    | "Game"
    | "Collaboration"
    | "Concert"
    | "Original";
  summary: string;
  description: string;
  poster?: string;
  spotifyAlbumId?: string;
  spotifyPlaylistId?: string;
  spotifyArtistId?: string;
  tracks?: Track[];
  links?: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "berrynote",
    title: "Berrynote",
    role: "Composer, performer, producer",
    year: "2022 – Now",
    category: "Original",
    summary:
      "A YouTube channel of original instrumentals, synth pieces, and arrangements. About 19,000 people have stuck around so far.",
    description:
      "Berrynote is the channel I've been building since 2022. It started as a place to put down whatever I was writing for myself, and it kept going. Some weeks it's a synth piece, some weeks a piano arrangement of something I love. The audience showed up slowly and then a little faster, and now there are almost nineteen thousand of them.\n\nEverything you hear on the channel I wrote, played, recorded, and mixed myself. The longer I do it, the more I treat each upload like a small commission I gave myself. Pick a feeling, write toward it, ship it, learn from how it lands.",
    spotifyArtistId: "2jJghoeA1TrjnflUJD4esO",
    links: [
      {
        label: "YouTube channel",
        href: "https://www.youtube.com/channel/UCkHfGiD8iH3_QfKJGruB44w",
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    client: "Game Studio",
    role: "Composer, Sound Designer",
    year: "2024",
    category: "Game",
    summary: "Adaptive score for an indie title.",
    description:
      "Talk about the music system, not just the music. What layers, what triggers, what feeling you were chasing. If you used Wwise or FMOD, say so. People care about how it actually worked.",
    spotifyAlbumId: "REPLACE_WITH_SPOTIFY_ALBUM_ID",
    tracks: [
      { title: "Opening Theme", duration: "1:48" },
      { title: "Exploration Layer A", duration: "2:30" },
    ],
  },
  {
    slug: "project-three",
    title: "Project Three",
    client: "Artist Name",
    role: "Arranger, Co-Producer",
    year: "2024",
    category: "Collaboration",
    summary: "Strings and brass for an artist EP.",
    description:
      "How did you end up on the record. What did you arrange. Who played. A sentence about a session moment that mattered will say more than a paragraph of descriptors.",
    tracks: [
      { title: "Single A", duration: "3:21" },
      { title: "Single B", duration: "3:47" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
