import { Pill } from "@/types";
import PillRender from "./PillRender";
import { usePathname } from "next/navigation";
import { CheckCircle2, CheckCircle2Icon, Trash2 } from "lucide-react";
import { usePillStore } from "../store/usePillStore";

interface PillBoxProps {
  pill: Pill;
  timeOfDay: "morning" | "afternoon" | "evening" | "night";
}
const PillBox = ({ pill, timeOfDay }: PillBoxProps) => {
  const { id, name, dosage, instructions, color, shape, taken } = pill;
  const { removePill, togglePillTaken } = usePillStore();
  const pathname = usePathname();
  const isAdmin = pathname.includes("dashboard");

  return (
    <div
      onClick={() => togglePillTaken(timeOfDay, id)}
      className={`relative flex flex-col items-center justify-center text-center p-2.5 h-full w-full gap-y-1 select-none rounded-xl cursor-pointer border transition-all duration-300 ${
        taken
          ? "bg-emerald-950/20 border-emerald-800/40 opacity-60"
          : "bg-zinc-900/60 border-zinc-800/40 hover:border-zinc-700"
      }`}
    >
      {taken && (
        <div className="absolute top-1 left-1 text-emerald-400">
          <CheckCircle2Icon size={12} fill="currentColor" />
        </div>
      )}

      {isAdmin && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            removePill(timeOfDay, id);
          }}
          className="absolute top-2 right-1 rounded-md text-red-300 hover:text-red-400 hover:bg-zinc-950/60 transition-opacity"
          title="Delete Pill"
        >
          <Trash2 size={16} />
        </button>
      )}
      <div>
        <PillRender shape={shape} color={color} />
      </div>
      <div className="text-xs font-medium text-zinc-100">{name}</div>
      <div className="text-xs text-zinc-400">{dosage}</div>
      <div className="text-xs text-zinc-400">{instructions}</div>
    </div>
  );
};

export default PillBox;
