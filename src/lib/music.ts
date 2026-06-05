// Music catalog data. Spotify IDs marked TODO should be filled in by visiting
// the Spotify page for each release, copying the ID from the URL
// (open.spotify.com/album/<ID> or /track/<ID>), and pasting here.

export type FeaturedTrack = {
  title: string;
  spotifyTrackId?: string; // TODO: fill in
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
  spotifyAlbumId?: string; // TODO: fill in
};

// ---- Featured picks (your favorites, organized by sound) ----
// Adjust freely. These are the "if you only listen to a few, start here" picks.

export const FEATURED: FeaturedCategory[] = [
  {
    key: "piano",
    label: "Piano",
    blurb:
      "Solo piano and piano-led pieces. Reflective, slow-moving, room for the listener to breathe.",
    accent: "amber",
    tracks: [
      { title: "Reflecting on Life", note: "Most-played track on the channel." },
      { title: "Nostalgia" },
      { title: "Piano Medley for Fall", note: "From the EP of the same name." },
    ],
  },
  {
    key: "ambient",
    label: "Ambient",
    blurb:
      "Pads, textures, slow swells. Music to put on when you don't want it to ask much of you.",
    accent: "indigo",
    tracks: [
      { title: "Ripples", note: "From the album of the same name." },
      { title: "Stuck in an Elevator" },
      { title: "Fleeting Emotions" },
    ],
  },
  {
    key: "cinematic",
    label: "Cinematic",
    blurb:
      "Bigger emotional arcs. Strings, swelling synths, the kind of cue that scores a moment.",
    accent: "rose",
    tracks: [
      { title: "Stages of Grief", note: "Title track from the album." },
      { title: "The World Is Everything That Is the Case", note: "Title track." },
    ],
  },
  {
    key: "experimental",
    label: "Experimental",
    blurb:
      "Sounds-from-Desmos, jazz reharmonizations, things that started as a joke and kept going.",
    accent: "teal",
    tracks: [
      { title: "I Didn't Know Desmos Could Sing", note: "Big on YouTube." },
      { title: "Desmos Sounds Like a Church Organ" },
      { title: "Making Beats in Desmos" },
      { title: "Tritone Substitutions", note: "Title track." },
    ],
  },
];

// ---- Full catalog ----
// Order: newest first.

export const RELEASES: Release[] = [
  { title: "The World Is Everything That Is the Case", year: "2026", kind: "Album" },
  { title: "Tritone Substitutions", year: "2025", kind: "Album" },
  { title: "Sounds from Desmos", year: "2025", kind: "Album" },
  { title: "Desmos Is Enough to Make a Grown Man Cry", year: "2025", kind: "Single" },
  { title: "Rock on a Fire Hydrant", year: "2025", kind: "Single" },
  { title: "I Didn't Know Desmos Could Sing", year: "2025", kind: "Single" },
  { title: "Inversions", year: "2025", kind: "EP" },
  { title: "Stages of Grief", year: "2024", kind: "Album" },
  { title: "Piano Medley for Fall", year: "2024", kind: "EP" },
  { title: "Get Dissed.", year: "2024", kind: "Single" },
  { title: "Stuck in an Elevator", year: "2023", kind: "Album" },
  { title: "Fleeting Emotions", year: "2022", kind: "Album" },
  { title: "Reflections", year: "2022", kind: "Album" },
  { title: "Ripples", year: "2021", kind: "Album" },
];

export type AccentKey = FeaturedCategory["accent"];

// CSS variable lookup so per-category accents resolve to the right palette token.
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
