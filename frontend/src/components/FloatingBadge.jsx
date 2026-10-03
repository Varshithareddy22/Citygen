import { motion } from "framer-motion";

function FloatingBadge({
  title,
  subtitle,
  color = "blue",
  className = "",
}) {
  const isGreen = color === "green";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`
        ${className}
        items-center
        gap-3
        rounded-xl
        border
        ${
          isGreen
            ? "border-emerald-400/30"
            : "border-blue-400/30"
        }
        bg-black/45
        px-5
        py-3
        backdrop-blur-xl
        shadow-2xl
      `}
    >

      <div
        className={`
          h-3
          w-3
          rounded-full
          ${
            isGreen
              ? "bg-emerald-400 shadow-[0_0_18px_#34d399]"
              : "bg-blue-400 shadow-[0_0_18px_#60a5fa]"
          }
        `}
      />

      <div>

        <p className="text-sm font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          {subtitle}
        </p>

      </div>

    </motion.div>
  );
}

export default FloatingBadge;