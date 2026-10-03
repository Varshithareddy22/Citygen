import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Map,
  Users,
  Wallet,
  CloudSun,
  Mountain,
  Sparkles,
  Layers3,
  Route,
  Trees,
  Building,
  MapPinned,
  Settings2,
  Eye,
  Zap,
  Cpu,
} from "lucide-react";

function CityGenerator() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cityName: "",
    area: "",
    population: "",
    budget: "",
    climate: "",
    terrain: "",
    description: "",
  });

  const [generating, setGenerating] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();

    if (
      !form.cityName ||
      !form.area ||
      !form.population ||
      !form.budget ||
      !form.climate ||
      !form.terrain
    ) {
      alert("Please complete all required city details.");
      return;
    }

    setGenerating(true);

    setTimeout(() => {
      const cityId = form.cityName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");

      navigate(`/city/${cityId}`, {
        state: {
          city: form,
        },
      });
    }, 1800);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#020509] text-white">

      {/* BACKGROUND VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/citygen-city.mp4" type="video/mp4" />
      </video>


      {/* CINEMATIC OVERLAY */}

      <div className="pointer-events-none absolute inset-0 z-10">

        <div className="absolute inset-0 bg-[#020509]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020509]/90 via-[#020509]/45 to-[#020509]/20" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#020509]/70 via-transparent to-[#020509]/65" />

      </div>


      {/* SUBTLE 3D FLOOR */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-22%]
          left-[28%]
          z-10
          h-[42%]
          w-[48%]
          opacity-[0.13]
          [background-image:linear-gradient(rgba(56,189,248,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.4)_1px,transparent_1px)]
          [background-size:48px_48px]
          [transform:perspective(900px)_rotateX(65deg)]
        "
      />


      {/* NAVBAR */}

      <nav className="absolute left-0 right-0 top-0 z-50">

        <div className="flex h-[76px] items-center justify-between px-5 lg:px-8">

          {/* LOGO */}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-[#03070c]/70
              px-4
              py-2
              backdrop-blur-xl
            "
          >

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-blue-500/10
                text-blue-400
                ring-1
                ring-blue-400/30
              "
            >
              <Building2 size={19} />
            </div>

            <div className="text-left">

              <h2 className="text-sm font-semibold">
                CityGen<span className="text-blue-400">AI</span>
              </h2>

              <p className="text-[8px] uppercase tracking-[0.25em] text-gray-600">
                Urban Simulator
              </p>

            </div>

          </button>


          {/* CENTER STATUS */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-[#03070c]/65
              px-5
              py-2
              backdrop-blur-xl
              md:flex
            "
          >

            <span className="relative flex h-2 w-2">

              <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />

            </span>

            <span className="text-[9px] uppercase tracking-[0.28em] text-gray-400">
              City Design Studio
            </span>

          </div>


          {/* BACK */}

          <button
            type="button"
            onClick={() => navigate("/plans")}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-[#03070c]/70
              px-4
              py-2
              text-xs
              text-gray-400
              backdrop-blur-xl
              transition
              hover:border-cyan-400/30
              hover:text-white
            "
          >

            <ArrowLeft size={14} />

            Back

          </button>

        </div>

      </nav>


      {/* LEFT INPUT PANEL */}

      <aside
        className="
          absolute
          left-5
          top-[92px]
          bottom-5
          z-40
          flex
          w-[350px]
          flex-col
          rounded-2xl
          border
          border-white/10
          bg-[#04080e]/90
          shadow-[0_25px_90px_rgba(0,0,0,0.65)]
          backdrop-blur-2xl
          lg:left-7
        "
      >

        {/* HEADER */}

        <div className="shrink-0 border-b border-white/[0.08] px-5 py-4">

          <div className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                  CITYGENAI
                </p>

              </div>

              <h1 className="mt-1 text-[20px] font-medium">
                Create New City
              </h1>

            </div>

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-cyan-400/20
                bg-cyan-400/10
                text-cyan-300
              "
            >
              <Sparkles size={16} />
            </div>

          </div>

        </div>


        {/* FORM - NO SCROLL */}

        <form
          onSubmit={handleGenerate}
          className="flex flex-1 flex-col px-5 py-3"
        >

          <InputField
            label="City Name"
            icon={<Building2 size={14} />}
            value={form.cityName}
            onChange={(value) =>
              updateField("cityName", value)
            }
            placeholder="Nova Hyderabad"
          />


          <InputField
            label="City Area (km²)"
            icon={<Map size={14} />}
            value={form.area}
            onChange={(value) =>
              updateField("area", value)
            }
            placeholder="250"
            type="number"
          />


          <InputField
            label="Population"
            icon={<Users size={14} />}
            value={form.population}
            onChange={(value) =>
              updateField("population", value)
            }
            placeholder="750000"
            type="number"
          />


          <InputField
            label="Development Budget (₹ Crore)"
            icon={<Wallet size={14} />}
            value={form.budget}
            onChange={(value) =>
              updateField("budget", value)
            }
            placeholder="25000"
          />


          <div className="grid grid-cols-2 gap-3">

            <SelectField
              label="Climate"
              icon={<CloudSun size={14} />}
              value={form.climate}
              onChange={(value) =>
                updateField("climate", value)
              }
              options={[
                "Tropical",
                "Arid",
                "Temperate",
                "Mediterranean",
                "Humid",
              ]}
            />


            <SelectField
              label="Terrain"
              icon={<Mountain size={14} />}
              value={form.terrain}
              onChange={(value) =>
                updateField("terrain", value)
              }
              options={[
                "Flat",
                "Hilly",
                "Mountainous",
                "Coastal",
                "Mixed",
              ]}
            />

          </div>


          {/* DESCRIPTION */}

          <div className="mb-3 flex-1">

            <div className="mb-1.5 flex items-center justify-between">

              <label className="text-[10px] text-gray-500">
                Natural-Language Description
              </label>

              <span className="text-[8px] uppercase tracking-wider text-gray-700">
                Optional
              </span>

            </div>

            <textarea
              value={form.description}
              onChange={(e) =>
                updateField("description", e.target.value)
              }
              placeholder="Green transport, smart buildings, parks, renewable energy..."
              className="
                h-full
                min-h-[80px]
                max-h-[105px]
                w-full
                resize-none
                rounded-lg
                border
                border-white/[0.08]
                bg-black/35
                p-3
                text-xs
                leading-5
                text-white
                outline-none
                placeholder:text-gray-700
                transition
                focus:border-cyan-400/40
                focus:bg-cyan-400/[0.025]
              "
            />

          </div>


          {/* GENERATE */}

          <button
            type="submit"
            disabled={generating}
            className="
              group
              flex
              h-11
              shrink-0
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-blue-500
              text-xs
              font-semibold
              text-black
              shadow-[0_0_30px_rgba(34,211,238,0.2)]
              transition
              duration-300
              hover:scale-[1.015]
              hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >

            {generating ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/30 border-t-black" />

                Generating City...
              </>
            ) : (
              <>
                <Zap size={14} />

                Generate City

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </>
            )}

          </button>


          {/* ENGINE STATUS */}

          <div className="mt-2 flex shrink-0 items-center justify-center gap-2">

            <Cpu size={10} className="text-gray-700" />

            <span className="text-[8px] uppercase tracking-[0.15em] text-gray-700">
              AI Urban Simulation Engine
            </span>

          </div>

        </form>

      </aside>


      {/* RIGHT TOOLBAR */}

      <aside
        className="
          absolute
          right-5
          top-1/2
          z-40
          -translate-y-1/2
          rounded-2xl
          border
          border-white/10
          bg-[#04080e]/90
          p-2
          shadow-[0_20px_70px_rgba(0,0,0,0.6)]
          backdrop-blur-2xl
        "
      >

        <ToolButton
          icon={<Layers3 size={17} />}
          label="Layers"
          active
        />

        <ToolButton
          icon={<Route size={17} />}
          label="Roads"
        />

        <ToolButton
          icon={<Building size={17} />}
          label="Buildings"
        />

        <ToolButton
          icon={<Trees size={17} />}
          label="Green"
        />

        <ToolButton
          icon={<MapPinned size={17} />}
          label="Zones"
        />

        <div className="my-2 h-px bg-white/[0.08]" />

        <ToolButton
          icon={<Eye size={17} />}
          label="View"
        />

        <ToolButton
          icon={<Settings2 size={17} />}
          label="Settings"
        />

      </aside>


      {/* SMALL 3D HUD */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-5
          right-[105px]
          z-30
          hidden
          rounded-xl
          border
          border-white/10
          bg-black/35
          px-4
          py-2.5
          backdrop-blur-xl
          lg:block
        "
      >

        <div className="flex items-center gap-4">

          <div>

            <p className="text-[7px] uppercase tracking-[0.2em] text-gray-600">
              Environment
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Live City Simulation
            </p>

          </div>

          <div className="h-6 w-px bg-white/10" />

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-[9px] text-cyan-300">
              READY
            </span>

          </div>

        </div>

      </div>


      {/* CORNER HUD */}

      <div className="pointer-events-none absolute inset-0 z-30">

        <span className="absolute left-5 top-[92px] h-6 w-6 border-l border-t border-cyan-400/25" />

        <span className="absolute right-5 top-[92px] h-6 w-6 border-r border-t border-cyan-400/25" />

        <span className="absolute bottom-5 left-5 h-6 w-6 border-b border-l border-cyan-400/25" />

        <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-cyan-400/25" />

      </div>

    </div>
  );
}


/* INPUT */

function InputField({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="mb-3">

      <label className="mb-1 block text-[9px] text-gray-500">
        {label}
      </label>

      <div className="relative">

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
          {icon}
        </span>

        <input
          type={type}
          min={type === "number" ? "1" : undefined}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            h-9
            w-full
            rounded-lg
            border
            border-white/[0.08]
            bg-black/35
            pl-9
            pr-3
            text-xs
            text-white
            outline-none
            placeholder:text-gray-700
            transition
            focus:border-cyan-400/40
            focus:bg-cyan-400/[0.025]
          "
        />

      </div>

    </div>
  );
}


/* SELECT */

function SelectField({
  label,
  icon,
  value,
  onChange,
  options,
}) {
  return (
    <div className="mb-3">

      <label className="mb-1 block text-[9px] text-gray-500">
        {label}
      </label>

      <div className="relative">

        <span className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-600">
          {icon}
        </span>

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-9
            w-full
            appearance-none
            rounded-lg
            border
            border-white/[0.08]
            bg-[#070c12]
            pl-9
            pr-2
            text-[11px]
            text-gray-300
            outline-none
            focus:border-cyan-400/40
          "
        >

          <option value="">
            Select
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}


/* TOOLBAR */

function ToolButton({
  icon,
  label,
  active = false,
}) {
  return (
    <button
      type="button"
      title={label}
      className={`
        flex
        h-[55px]
        w-[55px]
        flex-col
        items-center
        justify-center
        gap-1
        rounded-xl
        transition
        ${
          active
            ? "bg-cyan-400/10 text-cyan-300"
            : "text-gray-600 hover:bg-white/[0.05] hover:text-gray-300"
        }
      `}
    >

      {icon}

      <span className="text-[8px]">
        {label}
      </span>

    </button>
  );
}


export default CityGenerator;