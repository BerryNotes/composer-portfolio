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

// ---- Featured songs hosted as real audio files (full tracks, press-play) ----
export type AudioTrack = { title: string; src: string; duration?: string };

// Titles match the released versions on Spotify where they exist;
// "Autumn Song" is unreleased.
export const FEATURED_AUDIO: AudioTrack[] = [
  { title: "Autumn Song", src: "/audio/autumn-song.mp3", duration: "2:58" },
  { title: "Water's Mist", src: "/audio/waters-mist.mp3", duration: "5:24" },
  {
    title: "Whereof One Cannot Speak Thereof One Must Be Silent",
    src: "/audio/ambiens.mp3",
    duration: "4:38",
  },
  { title: "The Fibonacci Sequences", src: "/audio/thansa.mp3", duration: "2:31" },
  { title: "2010 Honda Accord", src: "/audio/chipton.mp3", duration: "1:14" },
  { title: "Deciduous Daydream", src: "/audio/untitled-34.mp3", duration: "2:02" },
];

// ---- Featured songs for the home page, grouped by genre ----
// An item is either a Spotify track (spotifyTrackId) or a hosted file (src).
export type FeaturedItem = {
  title: string;
  spotifyTrackId?: string;
  src?: string;
  duration?: string;
};
export type FeaturedGroup = {
  label: string;
  accent: AccentKey;
  items: FeaturedItem[];
};

// Streaming tracks play a Spotify 30-second preview (downloaded so they run
// through the same player as the hosted files). Lasier is the full track.
export const HOME_FEATURED: FeaturedGroup[] = [
  {
    label: "Electronic",
    accent: "teal",
    items: [
      { title: "Games of Language", src: "/audio/preview/games-of-language.mp3", duration: "0:27" },
      { title: "Lasier", src: "/audio/lasier.mp3", duration: "2:45" },
      { title: "Deciduous Daydream", src: "/audio/untitled-34.mp3", duration: "2:02" },
    ],
  },
  {
    label: "Ambient",
    accent: "indigo",
    items: [
      { title: "Water's Mist", src: "/audio/waters-mist.mp3", duration: "5:24" },
      { title: "Friendship Is Magic", src: "/audio/preview/friendship-is-magic.mp3", duration: "0:27" },
      { title: "Last One", src: "/audio/preview/last-one.mp3", duration: "0:29" },
    ],
  },
  {
    label: "Classical",
    accent: "amber",
    items: [
      { title: "Rouick", src: "/audio/preview/rouick.mp3", duration: "0:19" },
      { title: "The Leaves Are Changing...", src: "/audio/preview/leaves-changing.mp3", duration: "0:20" },
      { title: "Reflecting on Life", src: "/audio/preview/reflecting-on-life.mp3", duration: "0:29" },
      { title: "Moonlight Waltz", src: "/audio/preview/moonlight-waltz.mp3", duration: "0:29" },
    ],
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
      {
        title: "Ring Doorbell",
        spotifyTrackId: "2crI9oMJFIbF3n6nCaTaPw",
      },
    ],
  },
  {
    key: "desmos",
    label: "Desmos experiments",
    blurb:
      "A side project composed entirely inside the Desmos graphing calculator.",
    accent: "teal",
    tracks: [
      {
        title: "I Didn't Know Desmos Could Sing",
        spotifyTrackId: "5Ae1iAiBUtgdAb9PuvAixP",
      },
      {
        title: "Making Beats in Desmos",
        spotifyTrackId: "44zIsnTmUvWcVrY0vmYZKv",
      },
    ],
  },
];

// ---- Full catalog (newest first) ----
export const RELEASES: Release[] = [
  {
    title: "The World Is Everything That Is the Case",
    year: "2026",
    kind: "Album",
    spotifyAlbumId: "6jg4Lc1foJRFO4NAWM9w2Y",
  },
  {
    title: "Tritone Substitutions",
    year: "2025",
    kind: "Album",
    spotifyAlbumId: "2K76bn4iZrqsrhdi8Rr6B3",
  },
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
  {
    title: "Inversions",
    year: "2025",
    kind: "EP",
    spotifyAlbumId: "2inRax2rgIDCjQoshl2Wei",
  },
  {
    title: "Stages of Grief",
    year: "2024",
    kind: "Album",
    spotifyAlbumId: "12fEWa8fymUpsizZcEjmw9",
  },
  {
    title: "Piano Medley for Fall",
    year: "2024",
    kind: "EP",
    spotifyAlbumId: "0fYeaC8FgXMIwd9ndsWFTM",
  },
  { title: "Get Dissed.", year: "2024", kind: "Single" },
  {
    title: "Stuck in an Elevator",
    year: "2023",
    kind: "Album",
    spotifyAlbumId: "0okNaeeNuMjItdHkCOffcM",
  },
  { title: "Reflections", year: "2022", kind: "Album" },
  {
    title: "Fleeting Emotions",
    year: "2022",
    kind: "Album",
    spotifyAlbumId: "2qAbhf7WbynitEpIJIiACR",
  },
  { title: "Ripples", year: "2021", kind: "Album" },
];

// ---- Albums to showcase in full on the music page (non-Desmos records) ----
export const ALBUM_EMBEDS: { title: string; spotifyAlbumId: string }[] = [
  { title: "The World Is Everything That Is the Case", spotifyAlbumId: "6jg4Lc1foJRFO4NAWM9w2Y" },
  { title: "Tritone Substitutions", spotifyAlbumId: "2K76bn4iZrqsrhdi8Rr6B3" },
  { title: "Stages of Grief", spotifyAlbumId: "12fEWa8fymUpsizZcEjmw9" },
  { title: "Inversions", spotifyAlbumId: "2inRax2rgIDCjQoshl2Wei" },
  { title: "Piano Medley for Fall", spotifyAlbumId: "0fYeaC8FgXMIwd9ndsWFTM" },
  { title: "Stuck in an Elevator", spotifyAlbumId: "0okNaeeNuMjItdHkCOffcM" },
  { title: "Fleeting Emotions", spotifyAlbumId: "2qAbhf7WbynitEpIJIiACR" },
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
