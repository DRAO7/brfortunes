// app/admin/_components/AdminPageShell.tsx
"use client";

import { useEffect, useRef, useState } from "react";

import AdminFeed from "./AdminFeed";
import UpperNavbar from "@/app/_components/UpperNavbar";
import MidNavBar from "@/app/_components/MidNavbar";
import BottomNavBar from "@/app/_components/BottomNavBar";
import Content from "@/app/_components/Content";
import Rankings from "@/app/_components/Rankings";

type DbPost = {
  id: number;
  title: string | null;
  content: string | null;
  avatarUrl: string | null;
  logoUrl: string | null;
  imageUrl: string | null;
};

interface AdminPageShellProps {
  dbPost: DbPost | null;
}

export default function AdminPageShell({ dbPost }: AdminPageShellProps) {
  const [scrollY, setScrollY] = useState(0);
  const [lockRanking, setLockRanking] = useState(false);
  const [hoverRanking, setHoverRanking] = useState(false);
  const rankingAnchorRef = useRef<HTMLDivElement | null>(null);
  const fixedRankingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);

      if (rankingAnchorRef.current) {
        const rect = rankingAnchorRef.current.getBoundingClientRect();
        if (rect.top <= 90) {
          setLockRanking(true);
        } else {
          setLockRanking(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeStart = 0;
  const fadeEnd = 200;
  const progress = Math.min(
    Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
    1
  );
  const topOpacity = 1 - progress;

  const topBarsHeight = 240;

  return (
    <div className="min-h-screen bg-white">
      {/* fixed top bars */}
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

      {/* spacer */}
      <div style={{ height: topBarsHeight }} />

      {/* sticky bottom navbar */}
      <div className="sticky top-0 z-40 bg-white">
        <div className="mt-10">
          <BottomNavBar />
        </div>
      </div>

      {/* main */}
      <main className="pb-20 flex justify-center">
        <div className="relative w-full max-w-[1349px]">
          {/* left sidebar */}
          <Content />

          {/* admin feed (now receives dbPost) */}
          <div className="flex justify-center">
            <AdminFeed dbPost={dbPost} />
          </div>

          {/* right sidebar (original) */}
          <div
            ref={rankingAnchorRef}
            className="absolute right-0 top-10"
            style={{
              opacity: lockRanking ? 0 : 1,
              pointerEvents: lockRanking ? "none" : "auto",
            }}
          >
            <Rankings />
          </div>
        </div>
      </main>

      {/* fixed right sidebar */}
      {lockRanking && (
        <div
          ref={fixedRankingRef}
          className="fixed z-40 no-scrollbar"
          style={{
            top: 90,
            right: "calc((100vw - 1349px) / 2)",
            maxHeight: "calc(100vh - 110px)",
            overflowY: "auto",
          }}
          onMouseEnter={() => setHoverRanking(true)}
          onMouseLeave={() => setHoverRanking(false)}
          onWheel={(e) => {
            if (!hoverRanking || !fixedRankingRef.current) return;

            const el = fixedRankingRef.current;
            const { scrollTop, scrollHeight, clientHeight } = el;

            const isDown = e.deltaY > 0;
            const isUp = e.deltaY < 0;

            if (isUp && scrollTop === 0) return;
            if (isDown && scrollTop + clientHeight >= scrollHeight) return;

            e.preventDefault();
            el.scrollTop += e.deltaY;
          }}
        >
          <Rankings />
        </div>
      )}
    </div>
  );
}
