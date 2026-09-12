import { ArrowUpRight, Globe2 } from "lucide-react";

function Navbar({ onLaunch }) {
  return (
    <nav className="relative z-50 flex w-full items-center justify-between px-6 py-5 lg:px-10">

      {/* LOGO */}
      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
          <Globe2
            size={17}
            strokeWidth={1.5}
            className="text-white/80"
          />
        </div>

        <div>
          <div className="text-[15px] font-medium tracking-[-0.02em]">
            CityGen
          </div>

          <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
            Urban Intelligence
          </div>
        </div>

      </div>

      {/* CENTER NAV */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">

        <a
          href="#vision"
          className="text-[13px] text-white/40 transition hover:text-white"
        >
          Vision
        </a>

        <a
          href="#technology"
          className="text-[13px] text-white/40 transition hover:text-white"
        >
          Technology
        </a>

        <a
          href="#about"
          className="text-[13px] text-white/40 transition hover:text-white"
        >
          About
        </a>

      </div>

      {/* RIGHT */}
      <button
        onClick={onLaunch}
        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[13px] text-white/75 backdrop-blur-xl transition hover:bg-white hover:text-black"
      >
        Sign in

        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>

    </nav>
  );
}

export default Navbar;