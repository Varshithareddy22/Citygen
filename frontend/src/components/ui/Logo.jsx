import { Globe2 } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
        <Globe2
          size={17}
          strokeWidth={1.5}
        />
      </div>

      <div>
        <div className="text-[15px] font-medium">
          CityGenAI
        </div>

        <div className="text-[8px] tracking-[0.25em] text-white/30">
          URBAN INTELLIGENCE
        </div>
      </div>

    </div>
  );
}