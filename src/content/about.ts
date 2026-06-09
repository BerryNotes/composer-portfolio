/* =====================================================================
   ABOUT PAGE — EDIT YOUR WORDS HERE
   =====================================================================

   This is the only file you need to touch to change the About page text.
   You do NOT need to understand the code — just edit the words that sit
   between the back-tick marks (` ... `) or the quote marks (" ... ").

   Rules of thumb:
     - Keep the back-ticks `  ` and quotes "  " exactly where they are.
       Only change the words INSIDE them.
     - Each paragraph is one block between back-ticks, separated by a comma.
       To add a paragraph, copy a whole `...`, line and add a comma after.
       To remove one, delete its whole `...`, line.
     - An em-dash is — (you can paste one, or just use a hyphen -).
     - When you are done, save the file and run  publish.bat  (in the
       project folder) to put it live.

   ===================================================================== */

export const ABOUT = {
  // Small label above the big heading.
  eyebrow: "About",

  // The big heading. {name} is automatically replaced with your name.
  heading: "Hi, I'm {name}.",

  // The one-line intro under the heading.
  subtitle:
    "A self-taught composer for film, games, theater, and the occasional artist record — based in Austin, Texas.",

  // The main body. Each back-tick block is one paragraph.
  paragraphs: [
    `It started in 2016, with nothing grander than a desire to learn the piano; YouTube tutorials and a great deal of listening did the rest, and by 2020 the songs I had been writing for myself had become songs I was releasing for other people. I have been self-taught the whole way through — which means the habits I carry are the ones the music asked for, and not the ones a classroom handed me.`,

    `When a project comes to me, I do not begin from technique, or from anything I have written before. I begin by picturing the thing itself, and asking the only question that matters at the start — what is this supposed to make a person feel? — and then I improvise toward that feeling until it holds. Improvisation is the part of the craft I trust most; it is the difference between reading a map and walking the ground. What comes out of that is a wide catalog: solo piano and ambient textures on one end, small-ensemble orchestral cues and jazz reharmonization on the other, and, off to the side, a series of pieces composed inside a graphing calculator. The range is not an accident. Each project gets the sound it actually needs, and not the one I would have defaulted to.`,

    `For the people I work with, that restlessness comes with discipline. I make my decisions inside the guidelines I am given, and I bring everything creative I can without ever stepping outside the bounds of the project; a score, after all, should sound as though it could only ever have been written for the one thing it serves. The work I want most is the music for a small indie game with a tragic story — the kind of project where the feeling is the whole point — but if you are building anything at all that needs a score, I would be glad to hear about it.`,
  ],

  // The little fact grid at the bottom. label on the left, value on the right.
  // Add or remove lines freely (keep them in { } with a comma after).
  facts: [
    { label: "Writes", value: "Acoustic, electronic, hybrid" },
    { label: "Plays", value: "Piano, guitar, bass, synths" },
    { label: "Strength", value: "Improvisation" },
    { label: "Trained", value: "Self-taught" },
    { label: "Playing since", value: "2016" },
    { label: "Based in", value: "Austin, TX" },
  ],
};
