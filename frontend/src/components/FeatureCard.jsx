function FeatureCard({ icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.04]">

      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
        {icon}
      </div>

      <h3 className="mb-2 text-sm font-semibold">
        {title}
      </h3>

      <p className="text-xs leading-5 text-white/35">
        {text}
      </p>

    </div>
  );
}

export default FeatureCard;