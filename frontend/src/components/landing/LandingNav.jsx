import { ArrowUpRight, Hexagon } from "lucide-react";

export default function LandingNav({ onStart }) {
  return (
    <header className="absolute left-0 right-0 top-0 z-30">

      <div className="flex h-[76px] items-center justify-between px-6 md:px-10">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.045] backdrop-blur-xl">

            <Hexagon
              size={17}
              strokeWidth={1.4}
              className="text-[#8fdce7]"
            />

          </div>

          <div>

            <div className="text-[15px] font-medium tracking-[-0.02em]">
              CityGenAI
            </div>

            <div className="mt-0.5 text-[7px] uppercase tracking-[0.28em] text-white/25">
              Urban Intelligence
            </div>

          </div>

        </div>

        {/* NAV */}

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">

          <button className="text-[12px] text-white/45 transition hover:text-white">
            Platform
          </button>

          <button className="text-[12px] text-white/45 transition hover:text-white">
            Solutions
          </button>

          <button className="text-[12px] text-white/45 transition hover:text-white">
            Resources
          </button>

          <button className="text-[12px] text-white/45 transition hover:text-white">
            About
          </button>

        </nav>

        {/* SIGN IN */}

        <button
          onClick={onStart}
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[12px] text-white/65 backdrop-blur-xl transition hover:border-white/20 hover:bg-white hover:text-black"
        >

          Sign in

          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

        </button>

      </div>

    </header>
  );
}