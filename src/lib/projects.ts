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
  image?: string;
  gallery?: { src: string; alt: string }[];
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
    year: "2022 – Present",
    category: "Original",
    image: "/projects/berrynote-art.jpg",
    summary:
      "An ongoing YouTube channel of original instrumental works — piano pieces, synth compositions, and arrangements. Approximately 19,000 subscribers.",
    description:
      "My YouTube channel since 2022 — synth pieces, piano arrangements, and instrumental sketches, all written, performed, and mixed in-house, now at roughly nineteen thousand subscribers. Several pieces have been licensed by video creators, and it has driven steady commission work through Fiverr.",
    spotifyArtistId: "2jJghoeA1TrjnflUJD4esO",
    links: [
      {
        label: "YouTube channel",
        href: "https://www.youtube.com/channel/UCkHfGiD8iH3_QfKJGruB44w",
      },
    ],
  },
  {
    slug: "hamlet",
    title: "Hamlet",
    role: "Composer, sound designer, show-control developer",
    year: "2026",
    category: "Concert",
    image: "/projects/ophelia.jpg",
    summary:
      "Original score and a custom web-based cue system for a college production of Hamlet. Two performances, approximately 150 in attendance per night.",
    description:
      "A college production of Hamlet, staged traditionally. I composed the full incidental score — five pre-recorded cues, with the Ophelia songs and the court song at its center — and built the show-control system that fired them: a small web app the stage manager drove from a laptop. Two performances, roughly 150 in attendance each night.",
    tracks: [
      { title: "Court", src: "/audio/hamlet-1.mp3", duration: "1:00" },
      { title: "Funeral", src: "/audio/hamlet-2.mp3", duration: "1:07" },
      { title: "Ophelia", src: "/audio/hamlet-3.mp3", duration: "0:44" },
    ],
    links: [
      {
        label: "Show-control repo",
        href: "https://github.com/BerryNotes/hamlet-show-control",
      },
    ],
  },
  {
    slug: "game-jams",
    title: "Game jams",
    role: "Composer, sound designer",
    year: "2023 – 2026",
    category: "Game",
    image: "/projects/critter-catcher.jpg",
    gallery: [
      { src: "/projects/magical-sneky.jpg", alt: "Magical Sneky gameplay" },
      { src: "/projects/parts-inc.jpg", alt: "Parts Inc. gameplay" },
      { src: "/projects/critter-catcher.jpg", alt: "Critter Catcher title art" },
    ],
    tracks: [
      { title: "Pause Menu", src: "/audio/gamejam-1.mp3", duration: "0:34" },
      { title: "Shard Dungeon", src: "/audio/gamejam-2.mp3", duration: "3:49" },
      { title: "Title", src: "/audio/gamejam-3.mp3", duration: "2:06" },
      { title: "Unity", src: "/audio/gamejam-4.mp3", duration: "0:32" },
    ],
    summary:
      "Original scores and sound design for three indie game-jam entries across three years — calm ambient, small-ensemble orchestral, and electronic-ambient.",
    description:
      "Three game-jam scores across three years, each with its own palette (itch.io links below).\n\nMagical Sneky (2026) — a magical-girl metroidvania; calm ambient, co-written with Tricky Ethan, plus the SFX pass.\n\nParts Inc. (2025) — a dark-comic VR action game; brass-and-percussion orchestral, sole composer, all SFX in-house.\n\nCritter Catcher (2023) — a submarine exploration game; electronic-ambient, sole composer, built around the loneliness of the deep.",
    links: [
      {
        label: "Magical Sneky on itch.io",
        href: "https://lofi-boi.itch.io/magical-snek",
      },
      {
        label: "Parts Inc. on itch.io",
        href: "https://wolfina2.itch.io/parts-inc",
      },
      {
        label: "Critter Catcher on itch.io",
        href: "https://zirk.itch.io/critter-catcher",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
