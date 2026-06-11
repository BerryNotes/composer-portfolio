"use client";

// Page-wide fixed backdrop that fades as you scroll: fully present at the
// top of the page, settling to a dimmer floor once you're into the content —
// visible the whole way down, but never competing with the text.

import { useEffect, useRef, useState } from "react";

type Props = {
  image: string;
  base: number; // opacity at the top of the page
  floor: number; // opacity once scrolled into the page
  fade?: number; // scroll distance (px) over which the fade happens
  veilClassName?: string;
};

export function Backdrop({
  image,
  base,
  floor,
  fade = 900,
  veilClassName = "bg-gradient-to-b from-background/30 via-background/55 to-background/85",
}: Props) {
  const [opacity, setOpacity] = useState(base);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      ticking.current = false;
      const t = Math.min(1, window.scrollY / fade);
      setOpacity(floor + (base - floor) * (1 - t));
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [base, floor, fade]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          opacity,
          transition: "opacity 0.15s linear",
        }}
      />
      <div className={`absolute inset-0 ${veilClassName}`} />
    </div>
  );
}
