export default function GlassButton({
  children,
  onClick,
  primary = false,
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-lg px-5 py-3 text-sm transition-all duration-200",
        primary
          ? "bg-white text-black hover:bg-white/90"
          : "border border-white/10 bg-white/[0.035] text-white/65 hover:bg-white/[0.07] hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}