import { Pill } from "@/types";
import PillRender from "./PillRender";

const PillBox = ({ pill }: { pill: Pill }) => {
  const { name, dosage, instructions, color, shape } = pill;
  console.log("pill", pill);

  return (
    <div className="flex items-center flex-col gap-1 ">
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
