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
  Zap,
  CheckCircle2,
} from "lucide-react";

import "../styles/CityGenerator.css";

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
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleGenerate = (event) => {
    event.preventDefault();

    if (
      !form.cityName.trim() ||
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
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      navigate(`/city/${cityId}`, {
        state: {
          city: form,
        },
      });
    }, 1600);
  };

  return (
    <div className="city-generator">

      {/* ================= BACKGROUND ================= */}

      <div className="cg-background">
        <div className="cg-city-image" />

        <div className="cg-background-shadow" />

        <div className="cg-light-beam cg-light-beam-one" />
        <div className="cg-light-beam cg-light-beam-two" />

        <div className="cg-background-glow cg-glow-one" />
        <div className="cg-background-glow cg-glow-two" />

        <div className="cg-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>


      {/* ================= HEADER ================= */}

      <header className="cg-header">

        <button
          type="button"
          className="cg-brand"
          onClick={() => navigate("/")}
        >
          <span className="cg-brand-icon">
            <Building2 size={23} strokeWidth={2.1} />
          </span>

          <span className="cg-brand-text">
            <strong>
              CityGen<span>AI</span>
            </strong>

            <small>URBAN SIMULATOR</small>
          </span>
        </button>


        <div className="cg-studio">
          <span className="cg-studio-dot" />
          <span>CITY DESIGN STUDIO</span>
        </div>


        <button
          type="button"
          className="cg-back"
          onClick={() => navigate("/plans")}
        >
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="cg-main">


        {/* ================= FORM ================= */}

        <section className="cg-form-card">

          <div className="cg-form-header">

            <div>
              <div className="cg-eyebrow">
                <span />
                AI CITY GENERATOR
              </div>

              <h1>Create your city.</h1>

              <p>
                Define the fundamentals and let AI build the blueprint.
              </p>
            </div>


            <div className="cg-ai-icon">
              <Sparkles size={22} />
            </div>

          </div>


          <form
            className="cg-form"
            onSubmit={handleGenerate}
          >

            <Field
              label="City name"
              icon={<Building2 size={17} />}
              value={form.cityName}
              placeholder="Nova Hyderabad"
              onChange={(value) =>
                updateField("cityName", value)
              }
            />


            <div className="cg-row">

              <Field
                label="City area"
                icon={<Map size={17} />}
                value={form.area}
                placeholder="250"
                suffix="km²"
                type="number"
                onChange={(value) =>
                  updateField("area", value)
                }
              />

              <Field
                label="Population"
                icon={<Users size={17} />}
                value={form.population}
                placeholder="750000"
                type="number"
                onChange={(value) =>
                  updateField("population", value)
                }
              />

            </div>


            <Field
              label="Development budget"
              icon={<Wallet size={17} />}
              value={form.budget}
              placeholder="25000"
              suffix="₹ Crore"
              type="number"
              onChange={(value) =>
                updateField("budget", value)
              }
            />


            <div className="cg-row">

              <SelectField
                label="Climate"
                icon={<CloudSun size={17} />}
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
                icon={<Mountain size={17} />}
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


            <div className="cg-description">

              <div className="cg-description-header">
                <label>City vision</label>
                <span>OPTIONAL</span>
              </div>

              <textarea
                value={form.description}
                maxLength={240}
                placeholder="Green transport, smart buildings, parks, renewable energy..."
                onChange={(event) =>
                  updateField(
                    "description",
                    event.target.value
                  )
                }
              />

              <span className="cg-counter">
                {form.description.length}/240
              </span>

            </div>


            <button
              type="submit"
              className="cg-generate-button"
              disabled={generating}
            >

              {generating ? (
                <>
                  <span className="cg-loader" />
                  <span>Generating city...</span>
                </>
              ) : (
                <>
                  <span className="cg-generate-left">
                    <Zap size={17} />
                    Generate City
                  </span>

                  <ArrowRight size={20} />
                </>
              )}

            </button>


            <div className="cg-engine">

              <span className="cg-engine-ready">
                <CheckCircle2 size={12} />
                AI ENGINE READY
              </span>

              <span className="cg-engine-divider" />

              <span>Urban simulation</span>

            </div>

          </form>

        </section>


        {/* ================= RIGHT SIDE ================= */}

        <section className="cg-preview">


          <div className="cg-preview-header">

            <div>

              <div className="cg-preview-label">
                AI CITY INTELLIGENCE
              </div>

              <h2>
                Turn your vision
                <br />
                into a living city.
              </h2>

              <p>
                CityGenAI analyzes your requirements and
                generates an intelligent urban blueprint.
              </p>

            </div>


            <div className="cg-ai-status">
              <span />
              AI ACTIVE
            </div>

          </div>


          {/* ================= SIMULATION ================= */}

          <div className="cg-simulation">

            <div className="cg-city-grid" />

            <div className="cg-ring cg-ring-outer" />
            <div className="cg-ring cg-ring-middle" />
            <div className="cg-ring cg-ring-inner" />

            <div className="cg-orbit cg-orbit-one">
              <span />
            </div>

            <div className="cg-orbit cg-orbit-two">
              <span />
            </div>

            <div className="cg-city-core">
              <Building2
                size={42}
                strokeWidth={1.7}
              />
            </div>

            <div className="cg-core-glow" />

            <div className="cg-core-label">
              <span>SIMULATION CORE</span>
              <strong>READY TO BUILD</strong>
            </div>

          </div>


          {/* ================= CAPABILITIES ================= */}

          <div className="cg-capabilities">

            <Capability
              icon={<Layers3 size={17} />}
              title="Smart zoning"
              text="AI optimized"
            />

            <Capability
              icon={<Route size={17} />}
              title="Road planning"
              text="Network optimized"
            />

            <Capability
              icon={<Trees size={17} />}
              title="Green systems"
              text="Sustainable"
            />

          </div>


          {/* ================= PROCESS ================= */}

          <div className="cg-process">

            <ProcessItem
              number="01"
              title="INPUT"
              text="Your requirements"
            />

            <div className="cg-process-line" />

            <ProcessItem
              number="02"
              title="ANALYZE"
              text="AI city intelligence"
            />

            <div className="cg-process-line" />

            <ProcessItem
              number="03"
              title="GENERATE"
              text="3D city model"
            />

          </div>

        </section>

      </main>

    </div>
  );
}


/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  icon,
  value,
  placeholder,
  suffix,
  type = "text",
  onChange,
}) {
  return (
    <div className="cg-field">

      <label>{label}</label>

      <div className="cg-input">

        <span className="cg-input-icon">
          {icon}
        </span>

        <input
          type={type}
          min={type === "number" ? "1" : undefined}
          value={value}
          placeholder={placeholder}
          onChange={(event) =>
            onChange(event.target.value)
          }
        />

        {suffix && (
          <span className="cg-suffix">
            {suffix}
          </span>
        )}

      </div>

    </div>
  );
}


/* =========================================================
   SELECT
========================================================= */

function SelectField({
  label,
  icon,
  value,
  onChange,
  options,
}) {
  return (
    <div className="cg-field">

      <label>{label}</label>

      <div className="cg-input">

        <span className="cg-input-icon">
          {icon}
        </span>

        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
        >

          <option value="">
            Select {label.toLowerCase()}
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

        <span className="cg-select-arrow">
          ▾
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   CAPABILITY
========================================================= */

function Capability({
  icon,
  title,
  text,
}) {
  return (
    <div className="cg-capability">

      <div className="cg-capability-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>

    </div>
  );
}


/* =========================================================
   PROCESS
========================================================= */

function ProcessItem({
  number,
  title,
  text,
}) {
  return (
    <div className="cg-process-item">

      <span className="cg-process-number">
        {number}
      </span>

      <div>
        <strong>{title}</strong>
        <small>{text}</small>
      </div>

    </div>
  );
}


export default CityGenerator;