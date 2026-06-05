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
      "Berrynote is the channel I've been building since 2022. It started as a place to put down whatever I was writing for myself, and it kept going. Some weeks it's a synth piece, some weeks a piano arrangement of something I love. The audience showed up slowly and then a little faster, and now there are almost nineteen thousand of them.\n\nEverything you hear on the channel I wrote, played, recorded, and mixed myself. The longer I do it, the more I treat each upload like a small commission I gave myself. Pick a feeling, write toward it, ship it, learn from how it lands.\n\nThe channel has had its own quiet second life as a stock library. A handful of pieces have been picked up by other video creators as background music, and for a while I took commissions through Fiverr on the back of it — short cues, intros, mood pieces for people who'd found Berrynote and wanted something custom in the same voice.",
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
    summary:
      "Original score and a custom web-based cue system for UATX's production of Hamlet. Two performances, ~150 people each.",
    description:
      "UATX put on a traditional staging of Hamlet this year, directed by London. I wrote the full score — about five cues spanning the production, including the Ophelia songs and the court song, which are the two I'm proudest of. Playback was recorded rather than live, so the cues had to sit right on their own and trigger cleanly against the performances.\n\nBecause off-the-shelf show-control software felt like overkill for the size of the run, I also built the playback system itself — a small web app the stage manager could drive from a laptop, with the cues queued in order and fired on a keypress. The composer and the operator were the same person on different days, which kept the loop tight: if a cue wasn't landing in tech, I could re-mix it that night and have it on the system by the next run-through.\n\nTwo performances, around 150 people each night.",
    links: [
      {
        label: "Show-control repo",
        href: "https://github.com/BerryNotes/hamlet-show-control",
      },
    ],
  },
  {
    slug: "magical-sneky",
    title: "Magical Sneky",
    client: "Metroidvania Month 31 × Magical Girl Game Jam 13",
    role: "Composer (with Tricky Ethan), sound designer",
    year: "2026",
    category: "Game",
    summary:
      "Calm ambient score for a short magical-girl metroidvania about a python transformed into a magical girl.",
    description:
      "A jam entry for Metroidvania Month 31 crossed with Magical Girl Game Jam 13. The game is a tight twenty-minute precision platformer set in a mushroom dimension, and the brief I gave myself was simple: don't get in the way of the platforming, but make the world feel inhabited.\n\nEthan (Tricky Ethan) and I split the score. We landed on calm ambient as the shared palette — soft pads, slow movement, room for the player to breathe between deaths. The level theme is the one I keep coming back to. I handled the SFX pass as well.",
    links: [
      {
        label: "Play on itch.io",
        href: "https://lofi-boi.itch.io/magical-snek",
      },
    ],
  },
  {
    slug: "parts-inc",
    title: "Parts Inc.",
    client: "VR Jam 7",
    role: "Composer, sound designer",
    year: "2025",
    category: "Game",
    summary:
      "Solo audio for a VR action game where you dismember goblins and sell the parts back for upgrades.",
    description:
      "Parts Inc. is a VR jam game with a dark-comic premise: you punch and slice goblins apart, then sell the body parts to fund your next round of upgrades. The whole tone hinges on whether the audio takes the violence seriously or winks at it.\n\nI went orchestral. Brass-and-percussion-forward, more 'heroic shopkeeper' than horror, so the loop of fight → harvest → upgrade reads as satisfying rather than grim. Solo on music and SFX — every swing, sever, sale, and menu click is mine.",
    links: [
      {
        label: "Play on itch.io",
        href: "https://wolfina2.itch.io/parts-inc",
      },
    ],
  },
  {
    slug: "critter-catcher",
    title: "Critter Catcher",
    client: "Bear Jams Spring 2023",
    role: "Composer, sound designer",
    year: "2024",
    category: "Game",
    summary:
      "Electronic-ambient underwater score for a submarine exploration game about hunting rare deep-sea critters.",
    description:
      "Critter Catcher puts you in a submarine, sent down to collect five rare specimens from the ocean depths. The whole thing wants to feel quiet and a little eerie — you're alone down there.\n\nI did all the audio solo. The palette is electronic and ambient: slow pads, sub-bass that does most of the heavy lifting, a few sparse melodic motifs that surface when something interesting happens. The intro is the cue I'd point anyone to first — it sets the loneliness up before the player has done anything.",
    links: [
      {
        label: "Play on itch.io",
        href: "https://zirk.itch.io/critter-catcher",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
