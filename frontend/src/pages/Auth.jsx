import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import Logo from "../components/ui/Logo";
import CityCanvas from "../components/city/CityCanvas";

const authCity = {
  name: "Future City",
  area: 100,
  population: 500000,
  budget: "₹8,000 Cr",
  buildings: [],
};

export default function Auth({
  onBack,
  onSuccess,
}) {
  const [signup, setSignup] =
    useState(false);

  return (
    <main className="grid min-h-screen bg-[#050708] text-white lg:grid-cols-2">

      {/* LEFT CITY */}

      <section className="relative hidden overflow-hidden lg:block">

        <CityCanvas city={authCity} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050708]" />

        <div className="absolute left-8 top-8 z-20">
          <Logo />
        </div>

        <div className="absolute bottom-10 left-10 z-20 max-w-sm">

          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            CITYGEN AI
          </p>

          <h2 className="mt-3 text-4xl font-medium tracking-tight">
            Build cities
            <br />
            that think ahead.
          </h2>

        </div>

      </section>

      {/* RIGHT */}

      <section className="relative flex items-center justify-center px-6">

        <button
          onClick={onBack}
          className="absolute left-6 top-7 flex items-center gap-2 text-xs text-white/35 hover:text-white"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <div className="w-full max-w-[380px]">

          <div className="mb-9">
            <Logo />
          </div>

          <h1 className="text-3xl font-medium tracking-tight">
            {signup
              ? "Create your account"
              : "Welcome back"}
          </h1>

          <p className="mt-2 text-sm text-white/35">
            {signup
              ? "Start designing the cities of tomorrow."
              : "Sign in to continue to CityGen."}
          </p>

          <div className="mt-8">

            <button className="w-full rounded-lg border border-white/10 bg-white/[0.035] py-3 text-sm text-white/75 hover:bg-white/[0.06]">
              <span className="mr-2 font-semibold">
                G
              </span>
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3">

              <div className="h-px flex-1 bg-white/[0.08]" />

              <span className="text-[10px] text-white/20">
                OR
              </span>

              <div className="h-px flex-1 bg-white/[0.08]" />

            </div>

            {signup && (
              <div className="mb-4">

                <label className="mb-2 block text-xs text-white/45">
                  Name
                </label>

                <input
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
                />

              </div>
            )}

            <div className="mb-4">

              <label className="mb-2 block text-xs text-white/45">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
              />

            </div>

            <div className="mb-6">

              <label className="mb-2 block text-xs text-white/45">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                autoComplete={
                  signup
                    ? "new-password"
                    : "current-password"
                }
                className="w-full rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
              />

            </div>

            <button
              onClick={onSuccess}
              className="w-full rounded-lg bg-white py-3.5 text-sm font-medium text-black hover:bg-white/90"
            >
              {signup
                ? "Create account"
                : "Sign in"}

              <ArrowRight
                size={15}
                className="ml-2 inline"
              />
            </button>

            <p className="mt-7 text-center text-xs text-white/30">

              {signup
                ? "Already have an account?"
                : "Don't have an account?"}

              <button
                onClick={() =>
                  setSignup(!signup)
                }
                className="ml-1 text-white/70 hover:text-white"
              >
                {signup
                  ? "Sign in"
                  : "Create one"}
              </button>

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}