import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Building2,
  Map,
  Route,
  Leaf,
} from "lucide-react";

import FeatureCard from "../components/FeatureCard";
import StatItem from "../components/StatItem";
import FloatingBadge from "../components/FloatingBadge";


function LandingPage() {

  /* =====================================================
     MOUSE PARALLAX
  ====================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  const backgroundX = useTransform(
    smoothX,
    [-1, 1],
    ["-1.5%", "1.5%"]
  );

  const backgroundY = useTransform(
    smoothY,
    [-1, 1],
    ["-1%", "1%"]
  );

  /* Very subtle 3D movement */

  const rotateX = useTransform(
    smoothY,
    [-1, 1],
    [0.5, -0.5]
  );

  const rotateY = useTransform(
    smoothX,
    [-1, 1],
    [-0.5, 0.5]
  );


  /* =====================================================
     VIDEO CROSSFADE SYSTEM
  ====================================================== */

  const videoA = useRef(null);
  const videoB = useRef(null);

  const [activeVideo, setActiveVideo] = useState("A");
  const [videoDuration, setVideoDuration] = useState(0);

  const FADE_DURATION = 2.5;


  /* Get video duration */

  useEffect(() => {

    const video = videoA.current;

    if (!video) return;

    const handleMetadata = () => {

      if (
        video.duration &&
        Number.isFinite(video.duration)
      ) {
        setVideoDuration(video.duration);
      }

    };

    if (video.readyState >= 1) {
      handleMetadata();
    }

    video.addEventListener(
      "loadedmetadata",
      handleMetadata
    );

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        handleMetadata
      );
    };

  }, []);


  /* Handle seamless video switching */

  useEffect(() => {

    const firstVideo = videoA.current;
    const secondVideo = videoB.current;

    if (
      !firstVideo ||
      !secondVideo ||
      !videoDuration
    ) {
      return;
    }

    const currentVideo =
      activeVideo === "A"
        ? firstVideo
        : secondVideo;

    const nextVideo =
      activeVideo === "A"
        ? secondVideo
        : firstVideo;


    const handleTimeUpdate = () => {

      const remaining =
        videoDuration -
        currentVideo.currentTime;


      /*
        Start the second video before
        the current video reaches the end.
      */

      if (
        remaining <= FADE_DURATION &&
        nextVideo.paused
      ) {

        nextVideo.currentTime = 0;

        nextVideo
          .play()
          .catch(() => {});

        setActiveVideo(
          activeVideo === "A"
            ? "B"
            : "A"
        );
      }

    };


    currentVideo.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );


    return () => {

      currentVideo.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

    };

  }, [
    activeVideo,
    videoDuration,
  ]);


  /* =====================================================
     MOUSE EVENTS
  ====================================================== */

  const handleMouseMove = (event) => {

    const {
      clientX,
      clientY,
    } = event;

    const x =
      clientX /
      window.innerWidth;

    const y =
      clientY /
      window.innerHeight;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);

  };


  const handleMouseLeave = () => {

    mouseX.set(0);
    mouseY.set(0);

  };


  /* =====================================================
     PAGE
  ====================================================== */

  return (

    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#02050a]
        text-white
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >


      {/* =================================================
          CINEMATIC VIDEO BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        <motion.div

          style={{
            x: backgroundX,
            y: backgroundY,
            rotateX,
            rotateY,
            scale: 1.08,
          }}

          animate={{
            scale: [
              1.08,
              1.10,
              1.08,
            ],
          }}

          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute
            -inset-[3%]
          "
        >


          {/* =============================================
              VIDEO A
          ============================================== */}

          <video
            ref={videoA}

            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover

              transition-opacity
              duration-[2500ms]
              ease-in-out

              ${
                activeVideo === "A"
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}

            autoPlay
            muted
            playsInline
            preload="auto"
          >

            <source
              src="/citygen-hero.mp4"
              type="video/mp4"
            />

          </video>


          {/* =============================================
              VIDEO B

              Same video starts while A is
              fading out.
          ============================================== */}

          <video
            ref={videoB}

            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover

              transition-opacity
              duration-[2500ms]
              ease-in-out

              ${
                activeVideo === "B"
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}

            muted
            playsInline
            preload="auto"
          >

            <source
              src="/citygen-hero.mp4"
              type="video/mp4"
            />

          </video>


        </motion.div>


        {/* =================================================
            CINEMATIC OVERLAYS
        ================================================== */}


        {/* Overall darkness */}

        <div
          className="
            absolute
            inset-0
            bg-black/30
          "
        />


        {/* Left side darkness for text */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#02050a]/95
            via-[#02050a]/55
            to-transparent
          "
        />


        {/* Top cinematic fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-48
            bg-gradient-to-b
            from-[#02050a]/90
            to-transparent
          "
        />


        {/* Bottom cinematic fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-80
            bg-gradient-to-t
            from-[#02050a]
            via-[#02050a]/80
            to-transparent
          "
        />


        {/* Blue atmosphere */}

        <div
          className="
            absolute
            inset-0
            bg-blue-950/10
          "
        />


        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]
          "
        />


      </div>


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className="
          relative
          z-30
          mx-auto
          flex
          h-24
          max-w-[1450px]
          items-center
          justify-between
          px-6
          lg:px-10
        "
      >


        {/* LOGO */}

        <a
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-blue-400
              ring-1
              ring-blue-400/30
              shadow-[0_0_25px_rgba(59,130,246,0.08)]
            "
          >

            <Building2 size={23} />

          </div>


          <div>

            <h2
              className="
                text-xl
                font-semibold
                tracking-tight
              "
            >
              CityGen
              <span className="text-blue-400">
                AI
              </span>
            </h2>


            <p
              className="
                text-[10px]
                tracking-wide
                text-gray-500
              "
            >
              Design Smarter. Build Better.
            </p>

          </div>

        </a>


        {/* GET STARTED */}

        <a
          href="/generate"

          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-cyan-300
            to-blue-500
            px-6
            py-3
            text-sm
            font-semibold
            text-black
            shadow-[0_0_30px_rgba(59,130,246,0.3)]
            transition
            duration-300
            hover:scale-105
            hover:shadow-[0_0_45px_rgba(59,130,246,0.5)]
          "
        >

          Get Started

          <ArrowRight
            size={17}
            className="
              transition
              group-hover:translate-x-1
            "
          />

        </a>

      </nav>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative z-20">


        {/* =================================================
            HERO
        ================================================== */}

        <section
          className="
            relative
            mx-auto
            flex
            min-h-[calc(100vh-6rem)]
            max-w-[1450px]
            items-center
            px-6
            pb-48
            lg:px-10
          "
        >


          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div className="max-w-[650px]">


            {/* LABEL */}

            <motion.div

              initial={{
                opacity: 0,
                x: -30,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.7,
              }}

              className="
                mb-7
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  h-px
                  w-10
                  bg-blue-400
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  text-gray-300
                "
              >
                AI-Powered Urban Planning
              </span>

            </motion.div>


            {/* HEADING */}

            <motion.h1

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              className="
                text-5xl
                font-semibold
                leading-[0.98]
                tracking-tight
                sm:text-6xl
                lg:text-[76px]
              "
            >

              Generate the

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-blue-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                City of Tomorrow
              </span>

            </motion.h1>


            {/* DESCRIPTION */}

            <motion.p

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.2,
              }}

              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-gray-300
                sm:text-lg
              "
            >
              Transform your ideas into realistic,
              sustainable and intelligent cities
              using AI, real-world data and
              interactive 3D visualization.
            </motion.p>


            {/* CTA */}

            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.35,
              }}

              className="
                mt-8
                flex
                flex-wrap
                gap-4
              "
            >

              <a
                href="/generate"

                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-300
                  to-blue-500
                  px-8
                  py-4
                  font-semibold
                  text-black
                  shadow-[0_0_35px_rgba(59,130,246,0.4)]
                  transition
                  duration-300
                  hover:scale-105
                "
              >

                Explore Now

                <ArrowRight
                  size={19}
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />

              </a>

            </motion.div>


            {/* STATS */}

            <motion.div

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                duration: 1,
                delay: 0.6,
              }}

              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-7
              "
            >

              <StatItem
                value="AI"
                label="Powered Planning"
              />

              <div
                className="
                  hidden
                  h-10
                  w-px
                  bg-white/15
                  sm:block
                "
              />

              <StatItem
                value="Real Data"
                label="Smarter Decisions"
              />

              <div
                className="
                  hidden
                  h-10
                  w-px
                  bg-white/15
                  sm:block
                "
              />

              <StatItem
                value="3D"
                label="Interactive Visualization"
              />

            </motion.div>

          </div>


          {/* =================================================
              FLOATING BADGE 1
          ================================================== */}

          <motion.div

            animate={{
              y: [0, -8, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              right-[12%]
              top-[18%]
              hidden
              lg:block
            "
          >

            <FloatingBadge>

              <div>

                <p
                  className="
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Smart Infrastructure
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-blue-300
                  "
                >
                  Optimized with AI
                </p>

              </div>

            </FloatingBadge>

          </motion.div>


          {/* =================================================
              FLOATING BADGE 2
          ================================================== */}

          <motion.div

            animate={{
              y: [0, 8, 0],
            }}

            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              right-[4%]
              top-[38%]
              hidden
              lg:block
            "
          >

            <FloatingBadge>

              <div>

                <p
                  className="
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Sustainable Growth
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-emerald-300
                  "
                >
                  Greener Tomorrow
                </p>

              </div>

            </FloatingBadge>

          </motion.div>


        </section>


        {/* =================================================
            FEATURE CARDS
        ================================================== */}

        <section
          id="features"

          className="
            relative
            z-30
            mx-auto
            -mt-28
            w-full
            max-w-[1380px]
            px-6
            lg:px-10
          "
        >

          

        </section>


      


      </main>

    </div>
  );
}


export default LandingPage;