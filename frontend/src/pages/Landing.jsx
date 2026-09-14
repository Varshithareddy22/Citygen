import { ArrowUpRight, MousePointer2 } from "lucide-react";

import LandingNav from "../components/landing/LandingNav";
import HeroContent from "../components/landing/HeroContent";
import CityCanvas from "../components/city/CityCanvas";

const landingCity = {
  name: "CityGenAI",
  area: 120,
  population: 750000,
  budget: "₹10,000 Cr",
  climate: "Temperate",
  terrain: "Coastal",
};

export default function Landing({ onStart }) {
  return (
    <main className="relative h-screen min-h-[680px] overflow-hidden bg-[#050607] text-white">

      {/* =====================================================
          3D CITY
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <CityCanvas city={landingCity} />
      </div>

      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_58%_48%,transparent_0%,rgba(5,6,7,0.08)_35%,rgba(5,6,7,0.55)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#050607] via-[#050607]/70 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-[#050607] via-[#050607]/75 to-transparent" />

      {/* Left readability gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[58%] bg-gradient-to-r from-[#050607]/90 via-[#050607]/55 to-transparent" />

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <LandingNav onStart={onStart} />

      {/* =====================================================
          HERO
      ====================================================== */}

      <HeroContent onStart={onStart} />

      {/* =====================================================
          CITY STATUS
      ====================================================== */}

      <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-xl lg:flex">

        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fdce7] opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fdce7]" />
        </span>

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
          Live 3D environment
        </span>

      </div>

      {/* =====================================================
          INTERACTION HINT
      ====================================================== */}

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">

        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/30">

          <MousePointer2 size={12} />

          <span>Drag to explore</span>

        </div>

      </div>

      {/* =====================================================
          SMALL CITY LABEL
      ====================================================== */}

      <div className="absolute bottom-9 left-8 z-20 hidden md:block">

        <div className="text-[9px] uppercase tracking-[0.25em] text-white/20">
          Generative urban environment
        </div>

        <div className="mt-1 flex items-center gap-2 text-[11px] text-white/40">
          {landingCity.name}
          <ArrowUpRight size={11} />
        </div>

      </div>

    </main>
  );
}