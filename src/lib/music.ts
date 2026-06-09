// Music catalog data. Spotify IDs marked TODO can be filled in by opening the
// release's Spotify page and copying the segment after /album/ or /track/ in
// the URL. The page handles missing IDs gracefully — entries without one
// simply display without a Play button or external link.

export type FeaturedTrack = {
  title: string;
  spotifyTrackId?: string;
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

// ---- Featured picks (favorites, organized by sound) ----

export const FEATURED: FeaturedCategory[] = [
  {
    key: "piano",
    label: "Piano",
    blurb:
      "Solo piano and piano-led works. Reflective, slow-moving, and spacious.",
    accent: "amber",
    tracks: [
      {
        title: "Reflecting on Life",
        spotifyTrackId: "1lDfdawaPGcLRgs23wXhNY",
        note: "The most-played track on the channel.",
      },
      { title: "Nostalgia" },
      {
        title: "Piano Medley for Fall",
        note: "Title track from the EP of the same name.",
      },
    ],
  },
  {
    key: "ambient",
    label: "Ambient",
    blurb:
      "Pads, textures, and slow swells. Designed to occupy a room without demanding attention.",
    accent: "indigo",
    tracks: [
      { title: "Ripples", note: "Title track from the album." },
      { title: "Stuck in an Elevator" },
      { title: "Fleeting Emotions" },
    ],
  },
  {
    key: "cinematic",
    label: "Cinematic",
    blurb:
      "Larger emotional arcs. Strings, swelling synths, and cues written to score a moment.",
    accent: "rose",
    tracks: [
      { title: "Stages of Grief", note: "Title track from the album." },
      {
        title: "The World Is Everything That Is the Case",
        note: "Title track from the 2026 album.",
      },
    ],
  },
  {
    key: "experimental",
    label: "Experimental",
    blurb:
      "Desmos-driven sound design, jazz reharmonizations, and ideas that began as experiments and were developed in full.",
    accent: "teal",
    tracks: [
      {
        title: "I Didn't Know Desmos Could Sing",
        spotifyTrackId: "5Ae1iAiBUtgdAb9PuvAixP",
        note: "A breakout track on YouTube.",
      },
      {
        title: "Desmos Sounds Like a Church Organ",
        spotifyTrackId: "0qoGSoAsSDo29dyWBfsdtC",
      },
      {
        title: "Making Beats in Desmos",
        spotifyTrackId: "44zIsnTmUvWcVrY0vmYZKv",
      },
      { title: "Tritone Substitutions", note: "Title track from the album." },
    ],
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
