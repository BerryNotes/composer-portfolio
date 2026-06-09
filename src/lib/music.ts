// Music catalog data. Track and album IDs below are real Spotify IDs, verified
// against the artist's catalog, so every embed renders a working inline player.

export type FeaturedTrack = {
  title: string;
  spotifyTrackId: string;
  note?: string;
};

export type FeaturedCategory = {
  key: string;
  label: string;
  blurb: string;
  accent: "teal" | "amber" | "rose" | "indigo";
  tracks: FeaturedTrack[];
};

export type Release = {
  title: string;
  year: string;
  kind: "Album" | "EP" | "Single";
  spotifyAlbumId?: string;
};

// ---- Three tracks pulled up for the home page (most-played / best entry points) ----
export const HOME_TRACKS: FeaturedTrack[] = [
  {
    title: "Reflecting on Life",
    spotifyTrackId: "1lDfdawaPGcLRgs23wXhNY",
    note: "The most-played piece in the catalog.",
  },
  {
    title: "I Didn't Know Desmos Could Sing",
    spotifyTrackId: "5Ae1iAiBUtgdAb9PuvAixP",
    note: "Sound design built inside a graphing calculator.",
  },
  {
    title: "Nostalgia",
    spotifyTrackId: "1C1W1BtUlCZGN8S87rwDhM",
    note: "Solo piano.",
  },
];

// ---- Featured picks, organized by sound (all playable) ----
export const FEATURED: FeaturedCategory[] = [
  {
    key: "piano",
    label: "Piano",
    blurb:
      "Solo piano and piano-led works — reflective, slow-moving, and spacious.",
    accent: "amber",
    tracks: [
      { title: "Reflecting on Life", spotifyTrackId: "1lDfdawaPGcLRgs23wXhNY" },
      { title: "Nostalgia", spotifyTrackId: "1C1W1BtUlCZGN8S87rwDhM" },
      {
        title: "Raindrops on My Window",
        spotifyTrackId: "5SaxnQFW0wgLxTb57dZKfd",
      },
    ],
  },
  {
    key: "desmos",
    label: "Desmos experiments",
    blurb:
      "An ongoing series of pieces composed and sequenced entirely inside the Desmos graphing calculator — a signature thread in the catalog.",
    accent: "teal",
    tracks: [
      {
        title: "I Didn't Know Desmos Could Sing",
        spotifyTrackId: "5Ae1iAiBUtgdAb9PuvAixP",
      },
      {
        title: "Desmos Sounds Like a Church Organ",
        spotifyTrackId: "0qoGSoAsSDo29dyWBfsdtC",
      },
      {
        title: "Making Beats in Desmos",
        spotifyTrackId: "44zIsnTmUvWcVrY0vmYZKv",
      },
      {
        title: "Megolovania in Desmos",
        spotifyTrackId: "4LHXqID1zi74ClT7YVKUxh",
      },
    ],
  },
  {
    key: "harmony",
    label: "Harmony & jazz",
    blurb:
      "Reharmonizations and chord-voicing studies — the Inversions side of the catalog.",
    accent: "indigo",
    tracks: [
      {
        title: "I Thought It Was Real",
        spotifyTrackId: "1ezjgiD2AQPkAPTGRvffQg",
      },
      {
        title: "Computer Love Song",
        spotifyTrackId: "3E2CE4GgA2PLJGzVqdgsjN",
      },
    ],
  },
];

// ---- Albums to embed in full on the music page (verified IDs) ----
export const ALBUM_EMBEDS: { title: string; spotifyAlbumId: string }[] = [
  { title: "Sounds from Desmos", spotifyAlbumId: "1goaHGnOcNDo3MwVSoVL26" },
  {
    title: "I Didn't Know Desmos Could Sing",
    spotifyAlbumId: "4re36e5PtHz2hvgNmMuwGI",
  },
];

// ---- Full catalog (newest first) ----
export const RELEASES: Release[] = [
  { title: "The World Is Everything That Is the Case", year: "2026", kind: "Album" },
  { title: "Tritone Substitutions", year: "2025", kind: "Album" },
  {
    title: "Sounds from Desmos",
    year: "2025",
    kind: "Album",
    spotifyAlbumId: "1goaHGnOcNDo3MwVSoVL26",
  },
  { title: "Desmos Is Enough to Make a Grown Man Cry", year: "2025", kind: "Single" },
  { title: "Rock on a Fire Hydrant", year: "2025", kind: "Single" },
  {
    title: "I Didn't Know Desmos Could Sing",
    year: "2025",
    kind: "Single",
    spotifyAlbumId: "4re36e5PtHz2hvgNmMuwGI",
  },
  { title: "Inversions", year: "2025", kind: "EP" },
  { title: "Stages of Grief", year: "2024", kind: "Album" },
  { title: "Piano Medley for Fall", year: "2024", kind: "EP" },
  { title: "Get Dissed.", year: "2024", kind: "Single" },
  { title: "Stuck in an Elevator", year: "2023", kind: "Album" },
  { title: "Reflections", year: "2022", kind: "Album" },
  { title: "Fleeting Emotions", year: "2022", kind: "Album" },
  { title: "Ripples", year: "2021", kind: "Album" },
];

export type AccentKey = FeaturedCategory["accent"];

export const ACCENT_VARS: Record<AccentKey, string> = {
  teal: "var(--teal)",
  amber: "var(--amber)",
  rose: "var(--rose)",
  indigo: "var(--indigo)",
};

export const ACCENT_GLOW_VARS: Record<AccentKey, string> = {
  teal: "var(--teal-glow)",
  amber: "var(--amber-glow)",
  rose: "var(--rose-glow)",
  indigo: "var(--indigo-glow)",
};
