import {
  ArrowUpRight,
  MousePointer2,
  Sparkles,
} from "lucide-react";

import Logo from "../components/ui/Logo";
import GlassButton from "../components/ui/GlassButton";
import CityCanvas from "../components/city/CityCanvas";

const demoCity = {
  name: "CityGen",
  area: 120,
  population: 720000,
  budget: "₹12,000 Cr",
  buildings: [],
};

export default function Landing({
  onStart,
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050708] text-white">

      {/* 3D CITY */}

      <div className="absolute inset-0">
        <CityCanvas city={demoCity} />
      </div>

      {/* atmosphere */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,transparent_15%,rgba(5,7,8,0.35)_60%,#050708_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#050708] to-transparent" />

      {/* NAV */}

      <header className="relative z-20 flex items-center justify-between px-7 py-5 lg:px-10">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <span className="text-xs text-white/45">
            Platform
          </span>

          <span className="text-xs text-white/45">
            Solutions
          </span>

          <span className="text-xs text-white/45">
            Resources
          </span>

          <span className="text-xs text-white/45">
            About
          </span>
        </nav>

        <button
          onClick={onStart}
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/65 backdrop-blur-xl hover:text-white"
        >
          Sign in
          <ArrowUpRight
            size={13}
            className="ml-1 inline"
          />
        </button>

      </header>

      {/* HERO */}

      <section className="relative z-10 flex min-h-[calc(100vh-76px)] items-center px-7 lg:px-16">

        <div className="max-w-[520px] pb-16">

          <div className="mb-6 flex items-center gap-2 text-xs text-white/40">
            <Sparkles size={14} />
            AI-POWERED URBAN PLANNING
          </div>

          <h1 className="text-6xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">

            <span className="text-white">
              Design
            </span>

            <br />

            <span className="text-white">
              Tomorrow's
            </span>

            <br />

            <span className="text-[#8fdce7]">
              City.
            </span>

          </h1>

          <p className="mt-7 max-w-[410px] text-sm leading-6 text-white/45">
            The intelligent platform for
            sustainable urban planning.
            Describe your vision and watch
            CityGen transform it into a
            complete 3D city.
          </p>

          <div className="mt-8 flex gap-3">

            <GlassButton
              primary
              onClick={onStart}
            >
              Get started
              <ArrowUpRight
                size={15}
                className="ml-1 inline"
              />
            </GlassButton>

            <GlassButton>
              Explore demo
            </GlassButton>

          </div>

        </div>

      </section>

      {/* BOTTOM */}

      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">

        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
          <MousePointer2 size={12} />
          Drag to explore city
        </div>

      </div>

    </main>
  );
}