"use client";

import { useEffect, useState } from "react";
import BottomNavBar from "./_components/BottomNavBar";
import Feed from "./_components/Feed";
import UpperNavbar from "./_components/UpperNavbar";
import MidNavBar from "./_components/MidNavbar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fade top two bars between 0 and 200px scroll
  const fadeStart = 0;
  const fadeEnd = 200;
  const progress = Math.min(
    Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
    1
  );
  const topOpacity = 1 - progress;

  // height of top bars (adjust if necessary)
  const topBarsHeight = 240;

  return (
    <div className="min-h-screen bg-white">
      {/* 1) fixed top bars */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div
          className="pointer-events-auto transition-opacity duration-300"
          style={{ opacity: topOpacity }}
        >
          <UpperNavbar />
        </div>
        <div
          className="pointer-events-auto transition-opacity duration-300"
          style={{ opacity: topOpacity }}
        >
          <MidNavBar />
        </div>
      </div>

      {/* 2) spacer for fixed bars */}
      <div style={{ height: topBarsHeight }} />

      {/* 3) sticky bottom navbar */}
      <div className="sticky top-0 z-40 bg-white">
        <div className="mt-10">
          {" "}
          {/* small margin to separate from mid bar */}
          <BottomNavBar />
        </div>
      </div>

      {/* 4) feed */}
      <main className="pb-20 flex justify-center">
        <Feed />
      </main>
    </div>
  );
}
