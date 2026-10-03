const StatItem = ({ value, label }) => {
  return (
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-bold text-white">
        {value}
      </span>

      <span className="text-xs md:text-sm text-white/60 mt-1">
        {label}
      </span>
    </div>
  );
};

export default StatItem; 