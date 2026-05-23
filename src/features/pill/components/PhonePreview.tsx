"use client";
import { motion } from "framer-motion";
import { usePillStore } from "../store/usePillStore";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import PillBox from "./PillBox";
import { Pill } from "@/types";

const PhonePreview = () => {
  const { familySchedule } = usePillStore();
  const { paitentName, schedule } = familySchedule;
  console.log("schedule", schedule);

  return (
    <div className="w-[320px] h-[640px] flex flex-col bg-zinc-950 border-8 border-zinc-800 relative rounded-[40px] shadow-2xl overflow-hidden">
      <div className="flex  justify-between w-full h-6 bg-zinc-950 rounded-full z-10 px-5 py-3">
        <span className="text-white text-xs">9:41</span>
        <div className="flex space-x-1">
          <Signal color="white" size={"16px"} />
          <Wifi color="white" size={"16px"} />
          <BatteryFull color="white" size={"16px"} />
        </div>
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-full z-10" />
      <div className="flex-1 p-6 flex flex-col overflow-y-auto no-scrollbar h-full">
        <div className="flex ">
          <h1 className="text-lg font-bold text-zinc-100">
            Pill Schedule <span className="text-zinc-500">({paitentName})</span>
          </h1>
        </div>
        {schedule?.morning?.length > 0 && (
          <div>
            <h2
              className={`mt-4 text-xs font-bold wrap-break-word leading-relaxed text-zinc-100`}
            >
              Morning
            </h2>
            <div className="grid grid-cols-2 gap-2 grid-rows-2">
              {schedule?.morning?.map((pill: Pill) => (
                <div key={pill.id} className="bg-zinc-800 rounded-lg p-2">
                  <PillBox pill={pill} />
                </div>
              ))}
            </div>
          </div>
        )}
        {schedule?.afternoon?.length > 0 && (
          <div>
            <h2
              className={`mt-4 text-xs font-bold wrap-break-word leading-relaxed text-zinc-100`}
            >
              Afternoon
            </h2>
            <div className="grid grid-cols-2 gap-2 grid-rows-2">
              {schedule?.afternoon?.map((pill) => (
                <div key={pill.id} className="bg-zinc-800 rounded-lg p-2">
                  <PillBox pill={pill} />
                </div>
              ))}
            </div>
          </div>
        )}
        {schedule?.evening?.length > 0 && (
          <div>
            <h2
              className={`mt-4 text-xs font-bold wrap-break-word leading-relaxed text-zinc-100`}
            >
              Evening
            </h2>
            <div className="grid grid-cols-2 gap-2 grid-rows-2">
              {schedule?.evening?.map((pill) => (
                <div key={pill.id} className="bg-zinc-800 rounded-lg p-2">
                  <PillBox pill={pill} />
                </div>
              ))}
            </div>
          </div>
        )}
        {schedule?.night?.length > 0 && (
          <div>
            <h2
              className={`mt-4 text-xs font-bold wrap-break-word leading-relaxed text-zinc-100`}
            >
              Night
            </h2>
            <div className="grid grid-cols-2 gap-2 grid-rows-2">
              {schedule?.night?.map((pill) => (
                <div key={pill.id} className="bg-zinc-800 rounded-lg p-2">
                  <PillBox pill={pill} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <span className="text-[10px] text-zinc-500 tracking-widest font-semibold uppercase opacity-60">
            PillSnap
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;
