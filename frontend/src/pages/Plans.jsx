import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Plans.css";

/* ---------------------------------------------------------
   OPTIONAL: use your own city photo as the background.
   Put the image in /public (for example /public/city-bg.jpg)
   and set BG_IMAGE = "/city-bg.jpg". Leave null to use the
   built-in animated city scene.
   --------------------------------------------------------- */
const BG_IMAGE = null;

const FREE_LIMIT = 3;

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/#features" },
  { label: "Use Cases", to: "/#use-cases" },
  { label: "Pricing", to: "/plans", active: true },
  { label: "Gallery", to: "/#gallery" },
];

const FREE_FEATURES = [
  "AI city generation",
  "Interactive 3D visualization",
  "Smart zoning",
  "Road network planning",
  "Save generated layouts",
];

const PRO_FEATURES = [
  "Unlimited AI generations",
  "Advanced smart zoning",
  "Intelligent road networks",
  "Sustainability optimization",
  "Unlimited saved layouts",
  "Download and export",
  "Regenerate unlimited times",
];

const BUILDING_PATH = "M5 21V8l7-4 7 4v13M9 21v-6h6v6M9 11h1M14 11h1";

/* =========================================================
   Background scene (SVG, viewBox 1440 x 900, ground at y=700)
   sky -> mountains -> skyline -> glass tower -> land, river,
   bridge with cars -> trees
   ========================================================= */
const GROUND = 700;

const makeRow = (seed, wBase, wVar, hBase, hVar, gap) => {
  const list = [];
  let x = -20;
  let i = 0;
  while (x < 1460) {
    const w = wBase + ((i * seed) % wVar);
    const h = hBase + ((i * (seed + 23)) % hVar);
    list.push({ x, w, h, i });
    x += w + gap;
    i += 1;
  }
  return list;
};

const FAR = makeRow(19, 30, 30, 50, 80, 3);
const MID = makeRow(13, 34, 30, 70, 130, 4);

const TREES = Array.from({ length: 82 }).map((_, j) => {
  const top = j % 2 === 0;
  const k = Math.floor(j / 2);
  return {
    x: 8 + k * 36 + ((k * 7) % 14),
    y: top ? 762 + ((k * 5) % 14) : 892 + ((k * 3) % 8),
    r: top ? 14 + ((k * 3) % 10) : 20 + ((k * 5) % 10),
    tone: k % 3,
    delay: (k % 6) * 0.5,
  };
});

const TREE_COLORS = [
  ["#2f6b3d", "#4a9a56"],
  ["#3a7a47", "#5aa862"],
  ["#2a5f38", "#43904f"],
];

const TOWER_BODY = "M18 700 L30 340 L50 220 L58 130 L62 130 L70 220 L90 340 L102 700 Z";

const CityBackground = () => {
  if (BG_IMAGE) {
    return (
      <div className="pl-bg" aria-hidden="true">
        <div
          className="pl-photo"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        />
      </div>
    );
  }

  return (
    <div className="pl-bg" aria-hidden="true">
      <span className="pl-cloud c1" />
      <span className="pl-cloud c2" />
      <span className="pl-cloud c3" />

      <svg
        className="pl-scene"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="plGlass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d6ebff" />
            <stop offset="0.55" stopColor="#8fbbea" />
            <stop offset="1" stopColor="#4f86c9" />
          </linearGradient>
          <linearGradient id="plLand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6aab68" />
            <stop offset="1" stopColor="#356f43" />
          </linearGradient>
          <linearGradient id="plRiver" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#5aa4e0" />
            <stop offset="1" stopColor="#3f86c8" />
          </linearGradient>
          <clipPath id="plTowerClip">
            <path d={TOWER_BODY} />
          </clipPath>
        </defs>

        {/* distant mountains */}
        <path
          d="M880 700 L1030 520 L1120 590 L1230 470 L1340 560 L1440 520 V700 Z"
          fill="#a9c8e8"
          opacity="0.6"
        />

        {/* far skyline */}
        {FAR.map(({ x, w, h, i }) => (
          <rect
            key={`f${i}`}
            x={x}
            y={GROUND - h}
            width={w}
            height={h}
            fill="#bcd3ea"
            opacity="0.85"
          />
        ))}

        {/* mid skyline with twinkling windows */}
        {MID.map(({ x, w, h, i }) => {
          const hh = x > 1250 ? h + 60 : h;
          const y = GROUND - hh;
          const cols = Math.floor((w - 8) / 9);
          const rows = Math.floor((hh - 12) / 13);
          const windows = [];
          for (let r = 0; r < rows; r += 1) {
            for (let c = 0; c < cols; c += 1) {
              if ((i + c * 3 + r * 2) % 6 === 0) {
                windows.push(
                  <rect
                    key={`${r}-${c}`}
                    className="pl-win"
                    x={x + 5 + c * 9}
                    y={y + 8 + r * 13}
                    width="4"
                    height="6"
                    rx="1"
                    style={{ "--d": `${((c + r + i) % 8) * 0.6}s` }}
                  />
                );
              }
            }
          }
          return (
            <g key={`m${i}`}>
              <rect
                className="pl-mid"
                x={x}
                y={y}
                width={w}
                height={hh}
                style={{ "--rise": `${i * 0.05}s` }}
              />
              {windows}
            </g>
          );
        })}

        {/* hero glass tower + neighbour */}
        <g transform="translate(40 0)">
          <path d="M112 700 V440 L134 410 L156 440 V700 Z" fill="url(#plGlass)" opacity="0.9" />
          <path d={TOWER_BODY} fill="url(#plGlass)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
          <g clipPath="url(#plTowerClip)" stroke="rgba(255,255,255,0.35)" strokeWidth="1">
            {[38, 49, 60, 71, 82].map((x) => (
              <line key={x} x1={x} y1="230" x2={x} y2="700" />
            ))}
            {Array.from({ length: 18 }).map((_, k) => (
              <line key={k} x1="10" y1={250 + k * 26} x2="110" y2={250 + k * 26} />
            ))}
            {Array.from({ length: 14 }).map((_, r) =>
              [0, 1, 2, 3, 4].map((c) =>
                (r * 3 + c * 2) % 7 === 0 ? (
                  <rect
                    key={`${r}-${c}`}
                    className="pl-win"
                    x={34 + c * 12}
                    y={250 + r * 30}
                    width="6"
                    height="9"
                    rx="1"
                    stroke="none"
                    style={{ "--d": `${(r + c) * 0.5}s` }}
                  />
                ) : null
              )
            )}
          </g>
          <line x1="60" y1="130" x2="60" y2="92" stroke="#fff" strokeWidth="1.6" />
          <circle className="pl-beacon" cx="60" cy="90" r="2.6" />
        </g>

        {/* land */}
        <rect x="0" y={GROUND} width="1440" height="200" fill="url(#plLand)" />

        {/* river */}
        <path
          d="M0 800 C240 760 440 790 640 815 S1040 870 1440 820 V868 C1040 915 820 880 620 858 S220 835 0 868 Z"
          fill="url(#plRiver)"
        />
        <path
          className="pl-shimmer"
          d="M40 822 C240 788 440 814 640 838 S1040 888 1400 842"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="14 30"
          opacity="0.55"
        />
        <path
          className="pl-shimmer slow"
          d="M80 848 C260 818 460 836 640 856 S1000 896 1380 856"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="10 34"
          opacity="0.4"
        />

        {/* bridge / highway with cars */}
        {Array.from({ length: 8 }).map((_, k) => (
          <rect key={k} x={1030 + k * 55} y="742" width="6" height="32" fill="#46566c" />
        ))}
        <rect x="1010" y="728" width="430" height="14" fill="#55657b" />
        <line
          className="pl-lane-dash"
          x1="1010"
          y1="735"
          x2="1440"
          y2="735"
          stroke="#fff"
          strokeWidth="1.4"
          strokeDasharray="10 12"
          opacity="0.7"
        />
        <rect className="pl-lane-car a" x="0" y="730" width="16" height="5" rx="2" fill="#e8890c" />
        <rect className="pl-lane-car b" x="0" y="736" width="16" height="5" rx="2" fill="#ffffff" />

        {/* trees */}
        {TREES.map(({ x, y, r, tone, delay }, i) => (
          <g key={i} className="pl-tree" style={{ "--s": `${delay}s` }}>
            <circle cx={x} cy={y} r={r} fill={TREE_COLORS[tone][0]} />
            <circle
              cx={x - r * 0.3}
              cy={y - r * 0.3}
              r={r * 0.6}
              fill={TREE_COLORS[tone][1]}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

/* =========================================================
   Mini skyline at the bottom of each card
   ========================================================= */
const MINI = (() => {
  const list = [];
  let x = 0;
  let i = 0;
  while (x < 400) {
    const w = 12 + ((i * 7) % 12);
    const h = 14 + ((i * 13) % 26);
    list.push({ x, w, h, i });
    x += w + 3;
    i += 1;
  }
  return list;
})();

const MiniSkyline = ({ turbines = false }) => (
  <div className="pl-mini" aria-hidden="true">
    <svg viewBox="0 0 400 50" preserveAspectRatio="xMidYMax slice">
      {MINI.map(({ x, w, h, i }) => (
        <g key={i}>
          <rect x={x} y={50 - h} width={w} height={h} className="pl-mini-b" />
          {i % 3 === 0 && (
            <rect
              x={x + 3}
              y={50 - h + 4}
              width="3"
              height="4"
              className="pl-mini-win"
              style={{ "--d": `${(i % 5) * 0.7}s` }}
            />
          )}
        </g>
      ))}
      {turbines &&
        [
          [118, 30],
          [212, 24],
          [320, 32],
        ].map(([x, h]) => (
          <g key={x} transform={`translate(${x} ${50 - h})`} className="pl-turbine">
            <line x1="0" y1="0" x2="0" y2={h} />
            <g className="pl-blades">
              <line x1="0" y1="-9" x2="0" y2="9" />
              <line x1="-9" y1="0" x2="9" y2="0" />
            </g>
          </g>
        ))}
    </svg>
  </div>
);

/* ========================================================= */

const Check = () => (
  <svg className="pl-check" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4.5 10.5l3.5 3.5 7.5-8" />
  </svg>
);

const Building = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={BUILDING_PATH} />
  </svg>
);

const FeatureList = ({ items }) => (
  <ul className="pl-features">
    {items.map((item) => (
      <li key={item}>
        <Check />
        {item}
      </li>
    ))}
  </ul>
);

export default function Plans() {
  const navigate = useNavigate();
  const [activating, setActivating] = useState(false);

  const used = Number(localStorage.getItem("citygen_free_generations") || 0);
  const isPro = localStorage.getItem("citygen_pro") === "true";
  const freeRemaining = Math.max(0, FREE_LIMIT - used);

  const startFree = () => {
    if (freeRemaining <= 0) {
      alert(
        "Your 3 free generations are finished. Upgrade to CityGenAI Pro for unlimited generations."
      );
      return;
    }
    navigate("/generate");
  };

  const activatePro = () => {
    if (activating) return;
    if (isPro) {
      navigate("/generate");
      return;
    }
    setActivating(true);
    localStorage.setItem("citygen_pro", "true");
    setTimeout(() => navigate("/generate"), 900);
  };

  return (
    <main className="pl-page">
      <CityBackground />

      {/* NAVBAR */}
      <nav className="pl-nav">
        <button className="pl-brand" onClick={() => navigate("/")}>
          <span className="pl-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M3 21V9l6-4v16M9 21V3l7 4v14M16 21v-9l5 3v6M2 21h20" />
            </svg>
          </span>
          <span className="pl-brand-text">
            CityGen<em>AI</em>
          </span>
        </button>

        <ul className="pl-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                className={`pl-link ${link.active ? "active" : ""}`}
                onClick={() => navigate(link.to)}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="pl-app" onClick={() => navigate("/generate")}>
          Go to App <span aria-hidden="true">→</span>
        </button>
      </nav>

      {/* HEADING */}
      <header className="pl-heading">
        <h1>
          Choose Your <span>Plan</span>
        </h1>
        <p>Start building smarter, more sustainable cities with AI.</p>
      </header>

      {/* PLANS */}
      <section className="pl-cards" aria-label="Pricing plans">
        {/* FREE (orange) */}
        <article className="pl-card pl-card-free">
          <div className="pl-title">
            <h2>Free Trial</h2>
            <span className="pl-chip">Starter</span>
          </div>
          <p className="pl-desc">
            Try CityGenAI with 3 free generations. No payment needed.
          </p>

          <div className="pl-mid-row">
            <div className="pl-price">
              <small>₹</small>
              <b>0</b>
              <span>forever</span>
            </div>

            <div className="pl-plots-box">
              <div className="pl-plots-top">
                <span>Generations left</span>
                <strong>
                  {freeRemaining}
                  <i> / {FREE_LIMIT}</i>
                </strong>
              </div>
              <div className="pl-plots">
                {Array.from({ length: FREE_LIMIT }).map((_, i) => {
                  const built = i < Math.min(used, FREE_LIMIT);
                  return (
                    <div
                      key={i}
                      className={`pl-plot ${built ? "built" : "open"}`}
                      title={built ? "Used" : "Available"}
                    >
                      {built ? <Building /> : <span aria-hidden="true">+</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            className="pl-btn"
            onClick={startFree}
            disabled={freeRemaining <= 0}
          >
            {freeRemaining <= 0 ? "Trial used" : "Start free trial"}
            {freeRemaining > 0 && <span className="pl-arrow">→</span>}
          </button>

          <p className="pl-included">What's included</p>
          <FeatureList items={FREE_FEATURES} />

          <MiniSkyline />
        </article>

        {/* PRO (blue) */}
        <article className="pl-card pl-card-pro">
          <div className="pl-title">
            <h2>Unlimited</h2>
            <span className="pl-chip">CityGenAI Pro</span>
          </div>
          <p className="pl-desc">
            Generate, regenerate and save unlimited layouts. Pay once.
          </p>

          <div className="pl-mid-row">
            <div className="pl-price">
              <small>₹</small>
              <b>499</b>
              <span>one-time</span>
            </div>

            <div className="pl-plots-box">
              <div className="pl-plots-top">
                <span>Generations</span>
                <strong>
                  <span className="pl-infinity">∞</span>
                  <i> unlimited</i>
                </strong>
              </div>
              <div className="pl-plots">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="pl-plot built">
                    <Building />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            className={`pl-btn ${activating ? "is-loading" : ""}`}
            onClick={activatePro}
          >
            {activating
              ? "Unlocking your city…"
              : isPro
              ? "Pro active · Open generator"
              : "Unlock Pro for ₹499"}
            {!activating && <span className="pl-arrow">→</span>}
          </button>

          <p className="pl-included">Everything in Free, plus</p>
          <FeatureList items={PRO_FEATURES} />

          <MiniSkyline turbines />
        </article>
      </section>
    </main>
  );
}
