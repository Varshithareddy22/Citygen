import { motion } from "framer-motion";

function FeatureCard({
  icon,
  title,
  description,
  green = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        rounded-2xl
        border
        ${
          green
            ? "border-emerald-400/25"
            : "border-blue-400/20"
        }
        bg-[#050910]/75
        p-5
        backdrop-blur-xl
        transition
        duration-300
        hover:bg-[#08101c]/90
      `}
    >

      <div
        className={`
          mb-4
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          ${
            green
              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
              : "border-blue-400/30 bg-blue-400/10 text-blue-400"
          }
          transition
          duration-300
          group-hover:scale-110
        `}
      >
        {icon}
      </div>

      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <p className="
        mt-2
        text-sm
        leading-6
        text-gray-400
      ">
        {description}
      </p>

    </motion.div>
  );
}

export default FeatureCard;