import { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import Logo from "../components/ui/Logo";
import CityCanvas from "../components/city/CityCanvas";
import { generateCityData } from "../data/cityGenerator";

export default function CreateCity({
  onBack,
  onGenerate,
}) {
  const [form, setForm] = useState({
    name: "",
    area: "",
    population: "",
    budget: "",
    climate: "Temperate",
    terrain: "Plain",
    vision: "",
  });

  function update(key, value) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function generate() {
    const city = generateCityData(form);
    onGenerate(city);
  }

  return (
    <main className="min-h-screen bg-[#050708] text-white">

      {/* HEADER */}

      <header className="flex h-[68px] items-center justify-between border-b border-white/[0.07] px-6">

        <div className="flex items-center gap-5">

          <button
            onClick={onBack}
            className="text-white/35 hover:text-white"
          >
            <ArrowLeft size={17} />
          </button>

          <Logo />

        </div>

        <div className="hidden text-[10px] uppercase tracking-[0.2em] text-white/25 md:block">
          City Generator
        </div>

        <div className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.04]" />

      </header>

      <div className="grid min-h-[calc(100vh-68px)] lg:grid-cols-[430px_1fr]">

        {/* FORM */}

        <aside className="border-r border-white/[0.07] bg-[#07090a] p-6 lg:p-8">

          <div className="mb-8">

            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8fdce7]">
              <Sparkles size={12} />
              AI CITY GENERATOR
            </div>

            <h1 className="text-3xl font-medium tracking-tight">
              Create your city
            </h1>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Define the fundamentals.
              CityGen will transform them
              into an urban blueprint.
            </p>

          </div>

          <div className="space-y-5">

            <Field
              label="City name"
              value={form.name}
              placeholder="e.g. EcoVista"
              onChange={(v) =>
                update("name", v)
              }
            />

            <div className="grid grid-cols-2 gap-3">

              <Field
                label="City area"
                value={form.area}
                placeholder="120"
                suffix="km²"
                onChange={(v) =>
                  update("area", v)
                }
              />

              <Field
                label="Population"
                value={form.population}
                placeholder="750,000"
                onChange={(v) =>
                  update("population", v)
                }
              />

            </div>

            <Field
              label="Development budget"
              value={form.budget}
              placeholder="₹10,000 Cr"
              onChange={(v) =>
                update("budget", v)
              }
            />

            <Select
              label="Climate type"
              value={form.climate}
              options={[
                "Temperate",
                "Tropical",
                "Mediterranean",
                "Arid",
                "Cold",
              ]}
              onChange={(v) =>
                update("climate", v)
              }
            />

            <Select
              label="Terrain type"
              value={form.terrain}
              options={[
                "Plain",
                "Hilly",
                "Coastal",
                "Mountain",
                "Desert",
              ]}
              onChange={(v) =>
                update("terrain", v)
              }
            />

            <div>

              <label className="mb-2 block text-xs text-white/45">
                City vision
                <span className="ml-1 text-white/20">
                  optional
                </span>
              </label>

              <textarea
                value={form.vision}
                onChange={(e) =>
                  update(
                    "vision",
                    e.target.value
                  )
                }
                rows={5}
                placeholder="Describe your city..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
              />

            </div>

            <button
              onClick={generate}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-sm font-medium text-black hover:bg-white/90"
            >
              <Sparkles size={15} />
              Generate city
            </button>

          </div>

        </aside>

        {/* 3D */}

        <section className="relative min-h-[600px] overflow-hidden">

          <CityCanvas
            city={generateCityData(form)}
          />

          <div className="pointer-events-none absolute left-7 top-7">

            <div className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Live preview
            </div>

            <div className="mt-1 text-xl font-medium">
              {form.name || "Your future city"}
            </div>

          </div>

          <div className="absolute right-6 top-6 flex rounded-lg border border-white/10 bg-black/40 p-1 backdrop-blur-xl">

            <button className="rounded-md px-3 py-1.5 text-xs text-white/30">
              2D
            </button>

            <button className="rounded-md bg-white px-3 py-1.5 text-xs text-black">
              3D
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}

function Field({
  label,
  value,
  placeholder,
  suffix,
  onChange,
}) {
  return (
    <div>

      <label className="mb-2 block text-xs text-white/45">
        {label}
      </label>

      <div className="relative">

        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/25">
            {suffix}
          </span>
        )}

      </div>

    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <div>

      <label className="mb-2 block text-xs text-white/45">
        {label}
      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none focus:border-white/25"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#101213]"
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30"
        />

      </div>

    </div>
  );
}