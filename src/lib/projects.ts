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
      "Berrynote is the YouTube channel I have been releasing original work on since 2022. The catalog rotates between synth pieces, piano arrangements, and short instrumental sketches — each one written, performed, recorded, and mixed in-house. The channel has grown to approximately nineteen thousand subscribers.\n\nThe work has had a second life as a small stock library. Several pieces have been licensed by video creators as background music, and the channel has produced a steady stream of commission work — short cues, intros, and mood pieces — placed through Fiverr.",
    spotifyArtistId: "2jJghoeA1TrjnflUJD4esO",
    links: [
      {
        label: "YouTube channel",
        href: "https://www.youtube.com/channel/UCkHfGiD8iH3_QfKJGruB44w",
      },
    ],
  },
  {
    slug: "hamlet-uatx",
    title: "Hamlet",
    client: "UATX",
    role: "Composer, sound designer, show-control developer",
    year: "2026",
    category: "Concert",
    image: "/projects/ophelia.jpg",
    summary:
      "Original score and a custom web-based cue system for UATX's production of Hamlet. Two performances, approximately 150 in attendance per night.",
    description:
      "A traditional staging of Hamlet directed by London at UATX. I composed the full incidental score — five cues spanning the production, with the Ophelia songs and the court song as the centerpieces. Playback was pre-recorded rather than live, requiring each cue to stand on its own and trigger cleanly against the performances.\n\nIn place of off-the-shelf show-control software, I built the playback system itself: a small web application that allowed the stage manager to drive cues from a laptop on a single keypress. Composer and operator on alternating nights — an arrangement that kept iteration tight, since a cue underperforming in technical rehearsal could be re-mixed and redeployed the same evening.\n\nTwo performances, approximately 150 in attendance per night.",
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
      "Three jam projects across three years, each scoped to the constraints of its event and each requiring a distinct musical palette. Linked itch.io pages are at the bottom of this page.\n\nMagical Sneky (2026, Metroidvania Month 31 × Magical Girl Game Jam 13). A short magical-girl metroidvania. Score co-written with Tricky Ethan; the brief was calm ambient — soft pads and slow movement designed to support precision platforming without competing with it. I also handled the SFX pass.\n\nParts Inc. (2025, VR Jam 7). A VR action game with a dark-comic loop: dismember goblins, sell the parts, upgrade. Sole composer. The score is orchestral, brass and percussion forward, written to take the violence seriously enough to be satisfying without tipping into horror. Combat, menu, and selling SFX written in-house.\n\nCritter Catcher (2023, Bear Jams Spring 2023). A submarine exploration game centered on collecting deep-sea specimens. Sole composer. Electronic and ambient — slow pads, sub-bass, sparse melodic motifs — built to support the loneliness of solo deep-sea work. The intro cue establishes the tone before the player has acted.",
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
