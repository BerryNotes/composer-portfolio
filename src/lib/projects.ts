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
  year: number;
  category: "Film" | "Television" | "Game" | "Collaboration" | "Concert";
  summary: string;
  description: string;
  poster?: string;
  spotifyAlbumId?: string;
  spotifyPlaylistId?: string;
  tracks?: Track[];
  links?: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    client: "Director / Studio",
    role: "Original Score",
    year: 2025,
    category: "Film",
    summary: "Replace this with a real one-line description.",
    description:
      "Write a few honest sentences about what the project was, what you wrote, and one specific thing you remember. Mention the instruments. Name the people you worked with if it feels right. Keep it short.",
    spotifyAlbumId: "REPLACE_WITH_SPOTIFY_ALBUM_ID",
    tracks: [
      { title: "Main Title", duration: "2:14" },
      { title: "Second Cue", duration: "3:02" },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    client: "Game Studio",
    role: "Composer, Sound Designer",
    year: 2024,
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
    year: 2024,
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
