import { useState } from "react";

import {
  Activity,
  Building2,
  Car,
  Droplets,
  Leaf,
  Map,
  Mountain,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

function Dashboard() {

  const [form, setForm] = useState({
    city: "",
    area: "",
    population: "",
    budget: "",
    climate: "",
    terrain: "",
    description: "",
  });

  const [generated, setGenerated] = useState(false);

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const generateCity = () => {

    console.log("CityGen request:", form);

    setGenerated(true);
  };

  return (
    <main className="min-h-screen bg-[#030506] text-white">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030506]/85 backdrop-blur-xl">

        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">

              <Map
                size={18}
                className="text-cyan-300"
              />

            </div>

            <div>

              <div className="text-sm font-semibold">
                City<span className="text-cyan-300">Gen</span>
              </div>

              <div className="text-[8px] tracking-[0.2em] text-white/20">
                URBAN INTELLIGENCE
              </div>

            </div>

          </div>


          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] text-white/40 sm:flex">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              AI ENGINE READY

            </div>


            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold">
              V
            </div>

          </div>

        </div>

      </header>


      {/* MAIN */}

      <div className="mx-auto grid max-w-[1600px] gap-5 p-5 lg:grid-cols-[390px_1fr]">


        {/* INPUT PANEL */}

        <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">

          <div className="mb-7">

            <div className="mb-3 flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-cyan-300">

              <Sparkles size={13} />

              CITY GENERATOR

            </div>


            <h1 className="text-2xl font-semibold tracking-tight">
              Design your city
            </h1>


            <p className="mt-2 text-sm leading-6 text-white/35">
              Define the fundamentals. CityGen's AI engine
              will transform them into an urban blueprint.
            </p>

          </div>


          <div className="space-y-5">

            <InputField
              label="City name"
              placeholder="e.g. Nova Hyderabad"
              value={form.city}
              onChange={(value) => updateField("city", value)}
            />


            <div className="grid grid-cols-2 gap-3">

              <InputField
                label="City area"
                placeholder="250"
                suffix="km²"
                type="number"
                value={form.area}
                onChange={(value) => updateField("area", value)}
              />


              <InputField
                label="Population"
                placeholder="2M"
                value={form.population}
                onChange={(value) => updateField("population", value)}
              />

            </div>


            <InputField
              label="Development budget"
              placeholder="₹50,000 Cr"
              value={form.budget}
              onChange={(value) => updateField("budget", value)}
            />


            <SelectField
              label="Climate type"
              value={form.climate}
              onChange={(value) => updateField("climate", value)}
              options={[
                "Tropical",
                "Arid",
                "Temperate",
                "Mediterranean",
                "Continental",
              ]}
            />


            <SelectField
              label="Terrain type"
              value={form.terrain}
              onChange={(value) => updateField("terrain", value)}
              options={[
                "Flat",
                "Hilly",
                "Mountainous",
                "Coastal",
                "Desert",
              ]}
            />


            <div>

              <label className="mb-2 block text-xs font-medium text-white/60">

                City vision

                <span className="ml-1 text-white/20">
                  optional
                </span>

              </label>


              <textarea
                rows="4"
                value={form.description}
                onChange={(event) =>
                  updateField(
                    "description",
                    event.target.value
                  )
                }
                placeholder="Example: A green, walkable city with autonomous public transport..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/40 focus:bg-cyan-300/[0.02]"
              />

            </div>


            <button
              onClick={generateCity}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >

              <Sparkles
                size={16}
                className="transition-transform group-hover:rotate-12"
              />

              Generate city

            </button>


            {generated && (

              <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">

                <div className="flex items-center gap-2 text-xs text-emerald-300">

                  <Activity size={14} />

                  Generation request prepared

                </div>

                <p className="mt-2 text-[11px] leading-5 text-white/30">
                  The AI generation engine will be connected
                  to this request in the backend phase.
                </p>

              </div>

            )}

          </div>

        </section>


        {/* VISUALIZATION */}

        <section className="relative min-h-[760px] overflow-hidden rounded-3xl border border-white/10 bg-[#070a0c]">

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "55px 55px",
            }}
          />


          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[100px]" />


          {/* Viewer header */}

          <div className="absolute left-6 right-6 top-6 z-20 flex items-start justify-between">

            <div>

              <div className="text-[9px] tracking-[0.2em] text-white/25">
                CITY SIMULATION
              </div>

              <h2 className="mt-1 text-lg font-medium">
                {form.city || "Untitled City"}
              </h2>

            </div>


            <div className="flex items-center gap-2">

              <button className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-[10px] text-white/40 backdrop-blur transition hover:text-white">
                2D
              </button>

              <button className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-[10px] text-cyan-300">
                3D
              </button>

            </div>

          </div>


          <CityWorld />


          {/* Bottom metrics */}

          <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-2 gap-2 md:grid-cols-4">

            <Metric
              icon={<Building2 size={14} />}
              label="BUILDINGS"
              value={generated ? "12,840" : "—"}
            />

            <Metric
              icon={<Users size={14} />}
              label="POPULATION"
              value={generated ? form.population || "2.0M" : "—"}
            />

            <Metric
              icon={<Leaf size={14} />}
              label="GREEN SCORE"
              value={generated ? "87%" : "—"}
            />

            <Metric
              icon={<Zap size={14} />}
              label="RENEWABLE"
              value={generated ? "72%" : "—"}
            />

          </div>

        </section>

      </div>

    </main>
  );
}


/* CITY WORLD */

function CityWorld() {

  const buildings = Array.from({
    length: 45,
  });

  return (
    <div className="absolute inset-0 flex items-end justify-center pb-36 pt-28">

      {/* Horizon */}

      <div className="absolute left-0 right-0 top-[45%] h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />


      {/* Ground */}

      <div
        className="absolute bottom-[-30%] h-[70%] w-[120%] rotate-x-[62deg] opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />


      {/* Buildings */}

      <div className="relative flex h-[430px] w-[90%] items-end justify-center gap-1">

        {buildings.map((_, index) => {

          const height =
            45 + ((index * 73) % 230);

          const width =
            16 + ((index * 29) % 32);

          return (
            <div
              key={index}
              className="relative border border-cyan-300/[0.08] bg-gradient-to-t from-cyan-400/[0.015] to-cyan-300/[0.10] transition duration-500 hover:from-cyan-300/[0.08] hover:to-cyan-300/[0.20]"
              style={{
                height,
                width,
              }}
            >

              <div className="absolute inset-[4px] grid grid-cols-2 gap-[3px] opacity-40">

                {Array.from({
                  length: Math.max(
                    2,
                    Math.floor(height / 22)
                  ),
                }).map((_, i) => (

                  <span
                    key={i}
                    className="h-[3px] rounded-sm bg-cyan-200/25"
                  />

                ))}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}


/* METRIC */

function Metric({
  icon,
  label,
  value,
}) {

  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">

      <div className="mb-2 flex items-center gap-2 text-white/25">

        {icon}

        <span className="text-[9px] tracking-wider">
          {label}
        </span>

      </div>

      <div className="text-lg font-medium">
        {value}
      </div>

    </div>
  );
}

export default Dashboard;