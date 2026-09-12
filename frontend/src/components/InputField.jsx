function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  suffix,
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-medium text-white/60">
        {label}
      </label>

      <div className="relative">

        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-300/40 focus:bg-cyan-300/[0.02]"
        />

        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/25">
            {suffix}
          </span>
        )}

      </div>

    </div>
  );
}

export default InputField;