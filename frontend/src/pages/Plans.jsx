import { useNavigate } from "react-router-dom";
import "../styles/Plans.css";

/* =========================================================
   CONFIG
   ========================================================= */

const BG_IMAGE = "/city-bg.png";
const APP_ROUTE = "/generate";

const FREE_LIMIT = 3;

/* =========================================================
   CONTENT
   ========================================================= */

const FREE_FEATURES = [
  "AI city generation",
  "Smart zoning",
  "Interactive 3D visualization",
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
];

const WHY = [
  {
    icon: "infinity",
    title: "Unlimited Generations",
    text: "Create and explore without limits.",
  },
  {
    icon: "leaf",
    title: "Sustainable Planning",
    text: "Optimize for a greener future.",
  },
  {
    icon: "chart",
    title: "Advanced Visualization",
    text: "Detailed 3D city layouts.",
  },
  {
    icon: "download",
    title: "Export Your City",
    text: "Download and use your layouts.",
  },
];

/* =========================================================
   BACKGROUND
   ========================================================= */

const CityBackground = () => {
  return (
    <div className="pl-bg" aria-hidden="true">
      <div
        className="pl-photo"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
        }}
      />

      <div className="pl-photo-overlay" />
    </div>
  );
};

/* =========================================================
   CHECK ICON
   ========================================================= */

const CheckIcon = ({ type }) => {
  return (
    <span
      className={`pl-check ${type}`}
      aria-hidden="true"
    >
      ✓
    </span>
  );
};

/* =========================================================
   WHY ICON
   ========================================================= */

const WhyIcon = ({ name }) => {
  if (name === "infinity") {
    return (
      <span className="pl-why-inf">
        ∞
      </span>
    );
  }

  if (name === "leaf") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          className="solid"
          d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"
        />

        <path d="M5 19l8-8" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6 20v-7M12 20V5M18 20v-10" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 4v11M7.5 11l4.5 4.5 4.5-4.5M5 20h14" />
    </svg>
  );
};

/* =========================================================
   MAIN
   ========================================================= */

const Plans = () => {
  const navigate = useNavigate();

  /* =======================================================
     FREE GENERATIONS
     ======================================================= */

  const used = Number(
    localStorage.getItem(
      "citygen_free_generations"
    ) || 0
  );

  const isPro =
    localStorage.getItem("citygen_pro") === "true";

  const freeRemaining = Math.max(
    0,
    FREE_LIMIT - used
  );

  /* =======================================================
     BACK
     ======================================================= */

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  /* =======================================================
     FREE TRIAL
     ======================================================= */

  const handleFreeTrial = () => {
    if (freeRemaining <= 0) {
      alert(
        "Your 3 free generations are finished. Upgrade to CityGenAI Pro for unlimited generations."
      );

      return;
    }

    navigate(APP_ROUTE);
  };

  /* =======================================================
     SUBSCRIBE
     ======================================================= */

  const handleSubscribe = () => {
    /*
      Temporary demo behaviour.

      Later replace this with:
      1. Payment gateway
      2. Payment verification
      3. Supabase Pro activation
    */

    if (!isPro) {
      localStorage.setItem(
        "citygen_pro",
        "true"
      );
    }

    navigate(APP_ROUTE);
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="plans-page">

      {/* =================================================
          BACKGROUND
          ================================================= */}

      <CityBackground />

      {/* =================================================
          BACK BUTTON
          ================================================= */}

      <button
        className="pl-back"
        type="button"
        onClick={handleBack}
      >
        <span className="pl-back-arrow">
          ←
        </span>

        <span>
          Back
        </span>
      </button>

      {/* =================================================
          MAIN CONTENT
          ================================================= */}

      <main className="pl-content">

        {/* =================================================
            HERO
            ================================================= */}

        <section className="pl-top">

          <div className="pl-brand">

            <div className="pl-brand-icon">

              <svg
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 32V16L15 10V32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M15 32V7L24 3V32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M24 32V13L34 8V32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M4 35H36"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <span>
              CityGenAI
            </span>

          </div>

          <div className="pl-hero">

            <h1>
              Choose Your{" "}
              <span>
                Plan
              </span>
            </h1>

            <p>
              Start free or unlock the full
              power of CityGenAI.
            </p>

          </div>

        </section>

        {/* =================================================
            PRICING
            ================================================= */}

        <section
          className="pl-pricing"
          aria-label="Pricing plans"
        >

          {/* =================================================
              FREE CARD
              ================================================= */}

          <article className="pl-card pl-free-card">

            {/* HEADER */}
            <div className="pl-card-header">

              <div className="pl-title-area">

                <h2>
                  Free Trial
                </h2>

                <p>
                  Try CityGenAI with 3 free generations.
                </p>

              </div>

              <span className="pl-plan-badge free">
                Starter
              </span>

            </div>

            {/* PRICE ROW */}
            <div className="pl-card-main">

              <div className="pl-price">

                <div className="pl-price-number">
                  <small>₹</small>
                  0
                </div>

                <span>
                  Forever
                </span>

              </div>

              <div className="pl-generation-box">

                <div className="pl-generation-top">

                  <span>
                    AI generations
                  </span>

                  <strong>
                    {freeRemaining} / {FREE_LIMIT}
                  </strong>

                </div>

                <div className="pl-generation-dots">

                  {Array.from({
                    length: FREE_LIMIT,
                  }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < freeRemaining
                          ? "active"
                          : ""
                      }
                    />
                  ))}

                </div>

              </div>

            </div>

            {/* CTA */}
            <button
              className="pl-cta pl-free-cta"
              type="button"
              onClick={handleFreeTrial}
            >
              <span>
                Start Free Trial
              </span>

              <b>
                →
              </b>
            </button>

            {/* FEATURES */}
            <div className="pl-features">

              <h3>
                What's included
              </h3>

              <div className="pl-feature-grid">

                {FREE_FEATURES.map(
                  (feature) => (
                    <div
                      className="pl-feature"
                      key={feature}
                    >
                      <CheckIcon type="free" />

                      <span>
                        {feature}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

            <div className="pl-card-cityline" />

          </article>

          {/* =================================================
              PRO CARD
              ================================================= */}

          <article className="pl-card pl-pro-card">

            {/* MOST POPULAR */}
            <div className="pl-popular">

              <span>
                ★
              </span>

              MOST POPULAR

            </div>

            {/* HEADER */}
            <div className="pl-card-header">

              <div className="pl-title-area">

                <h2>
                  CityGenAI{" "}
                  <span>
                    Pro
                  </span>
                </h2>

                <p>
                  Generate, regenerate and save unlimited layouts.
                </p>

              </div>

            </div>

            {/* PRICE ROW */}
            <div className="pl-card-main">

              <div className="pl-price">

                <div className="pl-price-number">
                  <small>₹</small>
                  499
                </div>

                <span>
                  One-time payment
                </span>

                <div className="pl-no-subscription">
                  No subscription
                </div>

              </div>

              <div className="pl-generation-box">

                <div className="pl-generation-top">

                  <span>
                    AI generations
                  </span>

                </div>

                <div className="pl-unlimited-row">

                  <span className="pl-infinity">
                    ∞
                  </span>

                  <strong>
                    Unlimited
                  </strong>

                </div>

              </div>

            </div>

            {/* SUBSCRIBE */}
            <button
              className="pl-cta pl-pro-cta"
              type="button"
              onClick={handleSubscribe}
            >
              <span>
                Subscribe
              </span>

              <b>
                →
              </b>
            </button>

            {/* FEATURES */}
            <div className="pl-features">

              <h3>
                Everything in Free, plus
              </h3>

              <div className="pl-feature-grid">

                {PRO_FEATURES.map(
                  (feature) => (
                    <div
                      className="pl-feature"
                      key={feature}
                    >
                      <CheckIcon type="pro" />

                      <span>
                        {feature}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

            <div className="pl-card-cityline blue" />

          </article>

        </section>

        {/* =================================================
            WHY UPGRADE
            ================================================= */}

        <section className="pl-why">

          <h2>
            Why Upgrade to{" "}
            <span>
              CityGenAI Pro?
            </span>
          </h2>

          <div className="pl-why-grid">

            {WHY.map((item) => (
              <article
                className="pl-why-card"
                key={item.title}
              >

                <div className="pl-why-icon">
                  <WhyIcon
                    name={item.icon}
                  />
                </div>

                <div className="pl-why-text">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Plans;