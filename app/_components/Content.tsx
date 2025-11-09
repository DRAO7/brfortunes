"use client";

import { useEffect, useRef, useState } from "react";
import Podcasts from "./Podcasts";
import Lists from "./Lists";

export default function Content() {
  const [locked, setLocked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [originalTop, setOriginalTop] = useState<number | null>(null);

  useEffect(() => {
    // measure initial absolute position once
    if (containerRef.current && originalTop === null) {
      const rect = containerRef.current.getBoundingClientRect();
      setOriginalTop(rect.top + window.scrollY);
    }

    const onScroll = () => {
      if (originalTop == null) return;

      const stickLine = 90; // same line we used before
      if (window.scrollY >= originalTop - stickLine) {
        setLocked(true);
      } else {
        setLocked(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [originalTop]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!locked || !hovering || !containerRef.current) return;

    const el = containerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = el;

    const isDown = e.deltaY > 0;
    const isUp = e.deltaY < 0;

    // let page scroll at the edges
    if (isUp && scrollTop === 0) return;
    if (isDown && scrollTop + clientHeight >= scrollHeight) return;

    e.preventDefault();
    el.scrollTop += e.deltaY;
  };

  return (
    <div
      ref={containerRef}
      className={`no-scrollbar ${
        locked ? "fixed z-40 bg-white" : "absolute left-0 top-10"
      }`}
      style={
        locked
          ? {
              top: 90,
              left: "calc((100vw - 1349px) / 2)",
              maxHeight: "calc(100vh - 110px)",
              overflowY: "auto",
            }
          : undefined
      }
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onWheel={handleWheel}
    >
      {/* explicit stack, so spacing never changes */}
      <div className="flex flex-col">
        <div>
          <Podcasts />
        </div>
        <div className="mt-10">
          <Lists />
        </div>
      </div>
    </div>
  );
}
