import { useState } from "react";
import { ArrowLeft, ArrowRight, Globe2 } from "lucide-react";

function Login({ onLogin, onBack }) {
  const [mode, setMode] = useState("signin");

  const isSignUp = mode === "signup";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050607] px-6 text-white">

      {/* subtle background */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

      {/* BACK */}

      <button
        onClick={onBack}
        className="absolute left-6 top-6 flex items-center gap-2 text-xs text-white/35 transition hover:text-white"
      >
        <ArrowLeft size={15} />
        Back
      </button>

      <div className="relative z-10 w-full max-w-[410px]">

        {/* LOGO */}

        <div className="mb-10 flex flex-col items-center">

          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
            <Globe2
              size={20}
              strokeWidth={1.5}
              className="text-white/80"
            />
          </div>

          <div className="text-lg font-medium tracking-tight">
            CityGen
          </div>

          <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
            Urban Intelligence
          </div>

        </div>

        {/* CARD */}

        <div className="rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl">

          <div className="mb-7">

            <h1 className="text-2xl font-medium tracking-[-0.03em]">
              {isSignUp
                ? "Create your account"
                : "Welcome back"}
            </h1>

            <p className="mt-2 text-sm leading-6 text-white/35">
              {isSignUp
                ? "Start designing intelligent cities with CityGen."
                : "Continue building the future with CityGen."}
            </p>

          </div>

          {/* GOOGLE */}

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm text-white/75 transition hover:bg-white/[0.06]">

            <span className="font-semibold">
              G
            </span>

            Continue with Google

          </button>

          <div className="my-6 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/[0.08]" />

            <span className="text-[10px] uppercase tracking-widest text-white/20">
              or
            </span>

            <div className="h-px flex-1 bg-white/[0.08]" />

          </div>

          {/* EMAIL */}

          {isSignUp && (
            <div className="mb-4">

              <label className="mb-2 block text-xs text-white/45">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-white/25"
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
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-white/25"
            />

          </div>

          <div className="mb-6">

            <div className="mb-2 flex justify-between">

              <label className="text-xs text-white/45">
                Password
              </label>

              {!isSignUp && (
                <button className="text-[11px] text-white/25 hover:text-white/60">
                  Forgot?
                </button>
              )}

            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-white/25"
            />

          </div>

          {/* ACTION */}

          <button
            onClick={onLogin}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >

            {isSignUp
              ? "Create account"
              : "Sign in"}

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />

          </button>

          {/* SWITCH */}

          <div className="mt-6 text-center text-xs text-white/30">

            {isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              onClick={() =>
                setMode(
                  isSignUp
                    ? "signin"
                    : "signup"
                )
              }
              className="ml-1 text-white/70 hover:text-white"
            >
              {isSignUp
                ? "Sign in"
                : "Create one"}
            </button>

          </div>

        </div>

        <p className="mt-6 text-center text-[10px] leading-5 text-white/15">
          By continuing, you agree to CityGen's
          terms and privacy policy.
        </p>

      </div>

    </main>
  );
}

export default Login;