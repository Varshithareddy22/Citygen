import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function HeroContent({ onStart }) {
  return (
    <section className="absolute inset-0 z-10">

      <div className="absolute left-6 top-1/2 w-[min(570px,90vw)] -translate-y-1/2 md:left-10 lg:left-16">

        {/* LABEL */}

        <div className="mb-6 flex items-center gap-2">

          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
            <Sparkles
              size={12}
              className="text-[#8fdce7]"
            />
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            AI-powered urban planning
          </span>

        </div>

        {/* TITLE */}

        <h1 className="text-[58px] font-medium leading-[0.91] tracking-[-0.065em] sm:text-[72px] lg:text-[88px]">

          <span className="block text-white">
            Design
          </span>

          <span className="block text-white">
            Tomorrow's
          </span>

          <span className="block text-[#8fdce7]">
            City.
          </span>

        </h1>

        {/* DESCRIPTION */}

        <p className="mt-7 max-w-[430px] text-[14px] leading-6 text-white/45 sm:text-[15px]">

          The intelligent platform for
          sustainable urban planning.
          Describe your vision and watch
          CityGen transform it into a
          complete 3D city.

        </p>

        {/* BUTTONS */}

        <div className="mt-8 flex items-center gap-3">

          <button
            onClick={onStart}
            className="group flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[13px] font-medium text-black transition duration-200 hover:bg-[#8fdce7]"
          >

            Get started

            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </button>

          <button className="rounded-lg border border-white/10 bg-black/25 px-5 py-3 text-[13px] text-white/55 backdrop-blur-xl transition hover:border-white/20 hover:text-white">

            Explore demo

          </button>

        </div>

      </div>

    </section>
  );
}