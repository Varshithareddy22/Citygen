import {
  BarChart3,
  Building2,
  ChevronRight,
  CircleDot,
  Layers3,
  Map,
  MessageSquare,
  Navigation,
  Trees,
  Waves,
  Zap,
} from "lucide-react";

import Logo from "../components/ui/Logo";
import CityCanvas from "../components/city/CityCanvas";

export default function CityStudio({
  city,
  onBack,
}) {
  if (!city) return null;

  return (
    <main className="h-screen overflow-hidden bg-[#050708] text-white">

      {/* TOP BAR */}

      <header className="flex h-[62px] items-center justify-between border-b border-white/[0.07] px-5">

        <div className="flex items-center gap-8">

          <Logo />

          <nav className="hidden items-center gap-6 md:flex">

            <button className="text-xs text-white">
              Design
            </button>

            <button className="text-xs text-white/35">
              Simulate
            </button>

            <button className="text-xs text-white/35">
              Analyze
            </button>

            <button className="text-xs text-white/35">
              Compare
            </button>

          </nav>

        </div>

        <div className="flex items-center gap-3">

          <span className="hidden text-[10px] text-white/25 sm:block">
            AI ENGINE READY
          </span>

          <div className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.04]" />

        </div>

      </header>

      {/* WORKSPACE */}

      <div className="grid h-[calc(100vh-62px)] grid-cols-[56px_1fr_300px]">

        {/* LEFT RAIL */}

        <aside className="border-r border-white/[0.07] bg-[#07090a]">

          <div className="flex flex-col items-center gap-6 py-5">

            <ToolIcon icon={<Map size={17} />} active />

            <ToolIcon icon={<Building2 size={17} />} />

            <ToolIcon icon={<Navigation size={17} />} />

            <ToolIcon icon={<Trees size={17} />} />

            <ToolIcon icon={<Waves size={17} />} />

            <ToolIcon icon={<Zap size={17} />} />

            <div className="my-2 h-px w-6 bg-white/10" />

            <ToolIcon icon={<Layers3 size={17} />} />

          </div>

        </aside>

        {/* CITY */}

        <section className="relative overflow-hidden">

          <CityCanvas
            city={city}
          />

          {/* TITLE */}

          <div className="absolute left-7 top-6">

            <div className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              City simulation
            </div>

            <h1 className="mt-1 text-2xl font-medium">
              {city.name}
            </h1>

          </div>

          {/* KPI */}

          <div className="absolute left-7 top-[105px] flex gap-2">

            <Kpi
              label="Area"
              value={`${city.area} km²`}
            />

            <Kpi
              label="Population"
              value={formatNumber(
                city.population
              )}
            />

            <Kpi
              label="Budget"
              value={city.budget}
            />

            <Kpi
              label="Climate"
              value={city.climate}
            />

          </div>

          {/* VIEW */}

          <div className="absolute right-6 top-6 flex rounded-lg border border-white/10 bg-black/40 p-1 backdrop-blur-xl">

            <button className="px-3 py-1.5 text-xs text-white/30">
              2D
            </button>

            <button className="rounded-md bg-white px-3 py-1.5 text-xs text-black">
              3D
            </button>

          </div>

          {/* BOTTOM BAR */}

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/10 bg-black/55 p-1 backdrop-blur-xl">

            <ModeButton icon={<Map size={14} />} text="Map" />

            <ModeButton icon={<Building2 size={14} />} text="Buildings" />

            <ModeButton icon={<Navigation size={14} />} text="Transport" />

            <ModeButton icon={<Layers3 size={14} />} text="Layers" />

          </div>

        </section>

        {/* RIGHT PANEL */}

        <aside className="overflow-y-auto border-l border-white/[0.07] bg-[#07090a]">

          {/* AI */}

          <div className="border-b border-white/[0.07] p-5">

            <div className="flex items-center gap-2">

              <MessageSquare
                size={15}
                className="text-white/60"
              />

              <span className="text-sm font-medium">
                AI Assistant
              </span>

            </div>

            <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.025] p-4">

              <p className="text-xs leading-5 text-white/50">
                Your city is currently
                optimized for balanced
                growth and sustainability.
              </p>

            </div>

            <div className="mt-3 space-y-2">

              <Suggestion>
                Increase green corridors
              </Suggestion>

              <Suggestion>
                Add a second transit hub
              </Suggestion>

              <Suggestion>
                Improve water recycling
              </Suggestion>

            </div>

          </div>

          {/* STATISTICS */}

          <div className="border-b border-white/[0.07] p-5">

            <div className="flex items-center gap-2">

              <BarChart3 size={15} />

              <span className="text-sm font-medium">
                City statistics
              </span>

            </div>

            <div className="mt-5 flex items-center justify-center">

              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white/10">

                <div
                  className="absolute inset-[-10px] rounded-full border-[10px] border-transparent border-t-[#8fdce7] border-r-[#8fdce7]"
                />

                <div className="text-center">

                  <div className="text-2xl font-medium">
                    {city.sustainability}
                  </div>

                  <div className="text-[9px] uppercase tracking-wider text-white/25">
                    score
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* METRICS */}

          <div className="p-5">

            <div className="mb-4 text-sm font-medium">
              Infrastructure
            </div>

            <Metric
              icon={<Navigation size={14} />}
              label="Roads"
              value={city.roads}
            />

            <Metric
              icon={<Building2 size={14} />}
              label="Buildings"
              value={city.buildings.length}
            />

            <Metric
              icon={<Trees size={14} />}
              label="Parks"
              value={city.parks}
            />

            <Metric
              icon={<Waves size={14} />}
              label="Water plants"
              value={city.waterPlants}
            />

            <Metric
              icon={<Zap size={14} />}
              label="Power stations"
              value={city.powerStations}
            />

          </div>

        </aside>

      </div>

    </main>
  );
}

function ToolIcon({ icon, active }) {
  return (
    <button
      className={[
        "flex h-8 w-8 items-center justify-center rounded-lg transition",
        active
          ? "bg-white text-black"
          : "text-white/30 hover:bg-white/[0.05] hover:text-white",
      ].join(" ")}
    >
      {icon}
    </button>
  );
}

function Kpi({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/45 px-4 py-2 backdrop-blur-xl">

      <div className="text-[8px] uppercase tracking-widest text-white/25">
        {label}
      </div>

      <div className="mt-1 text-xs text-white/75">
        {value}
      </div>

    </div>
  );
}

function ModeButton({ icon, text }) {
  return (
    <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] text-white/40 hover:bg-white/[0.06] hover:text-white">
      {icon}
      {text}
    </button>
  );
}

function Suggestion({ children }) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-left text-[11px] text-white/40 hover:text-white">

      {children}

      <ChevronRight size={12} />

    </button>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.05] py-3">

      <div className="flex items-center gap-2 text-xs text-white/40">
        {icon}
        {label}
      </div>

      <span className="text-xs text-white/70">
        {value}
      </span>

    </div>
  );
}

function formatNumber(value) {
  return new Intl.NumberFormat(
    "en-IN"
  ).format(value);
}