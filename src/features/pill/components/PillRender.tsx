import { MedicationColor, MedicationShape } from "@/types";
import React from "react";

const SHAPE_CLASSES: Record<MedicationShape, string> = {
  round: "rounded-full w-12 h-12 flex items-center justify-center",
  capsule: "rounded-full w-16 h-8 flex",
  oval: "rounded-[40%] w-14 h-10 flex items-center justify-center",
  square: "rounded-md w-10 h-10 flex items-center justify-center",
};

const COLOR_MAP: Record<
  MedicationColor,
  { base: string; border: string; glow: string }
> = {
  white: {
    base: "bg-stone-100",
    border: "border-stone-300",
    glow: "shadow-stone-200/40",
  },
  yellow: {
    base: "bg-amber-300",
    border: "border-amber-400",
    glow: "shadow-amber-400/40",
  },
  pink: {
    base: "bg-rose-300",
    border: "border-rose-400",
    glow: "shadow-rose-400/40",
  },
  blue: {
    base: "bg-sky-400",
    border: "border-sky-500",
    glow: "shadow-sky-400/40",
  },
  red: {
    base: "bg-red-400",
    border: "border-red-500",
    glow: "shadow-red-400/40",
  },
  green: {
    base: "bg-emerald-400",
    border: "border-emerald-500",
    glow: "shadow-emerald-400/40",
  },
  purple: {
    base: "bg-purple-400",
    border: "border-purple-500",
    glow: "shadow-purple-400/40",
  },
};

interface PillRenderProps {
  shape: MedicationShape;
  color: MedicationColor;
}
const PillRender = ({ shape, color }: PillRenderProps) => {
  const styles = COLOR_MAP[color];
  const shapeClass = SHAPE_CLASSES[shape];
  return (
    <div
      className={`relative ${shapeClass} ${styles.base} ${styles.border} ${styles.glow}`}
    >
      {shape === "round" && (
        <div className="absolute w-full h-[1.5px] top-1/2 -translate-y-1/2 bg-zinc-900"></div>
      )}
      {shape === "capsule" && (
        <div className="w-1/2 h-full bg-white rounded-l-full" />
      )}
      {shape !== "capsule" && (
        <>
          <div className="absolute inset-0.5 rounded-[40%] bg-white/22 opacity-40 blur-[1px]" />
          <div className="absolute bottom-0.5 right-1 w-2 h-2 rounded-full bg-white/20 blur-[2px]" />
        </>
      )}
    </div>
  );
};

export default PillRender;
