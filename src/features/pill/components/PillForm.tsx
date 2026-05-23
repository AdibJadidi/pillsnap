"use client";
import { MedicationColor, MedicationShape } from "@/types";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { usePillStore } from "../store/usePillStore";

interface IPillFormInput {
  name: string;
  dosage: string;
  instructions: string;
  color: MedicationColor;
  shape: MedicationShape;
  timeOfDay: "morning" | "afternoon" | "evening" | "night";
}

const PillForm = () => {
  const addPill = usePillStore((state) => state.addPill);

  const { register, handleSubmit, control, reset, watch } =
    useForm<IPillFormInput>({
      defaultValues: {
        name: "",
        dosage: "",
        instructions: "",
        color: "white",
        shape: "round",
        timeOfDay: "morning",
      },
    });

  const currentColor = watch("color");
  const currentShape = watch("shape");
  const currentTime = watch("timeOfDay");

  const colors: { id: MedicationColor; bg: string }[] = [
    { id: "white", bg: "bg-stone-100" },
    { id: "blue", bg: "bg-sky-400" },
    { id: "red", bg: "bg-red-400" },
    { id: "pink", bg: "bg-rose-300" },
    { id: "green", bg: "bg-emerald-400" },
    { id: "purple", bg: "bg-purple-400" },
    { id: "yellow", bg: "bg-amber-300" },
  ];

  const times: { id: string; label: string }[] = [
    { id: "morning", label: "Morning" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" },
    { id: "night", label: "Night" },
  ];

  const onSubmit = (data: IPillFormInput) => {
    console.log(data);
    addPill(data.timeOfDay, {
      name: data.name,
      dosage: data.dosage,
      instructions: data.instructions,
      color: data.color,
      shape: data.shape,
    });

    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 p-6"
    >
      <h2 className="text-zinc-100">Add New Pill</h2>
      <div className="flex flex-col gap-12 bg-[#091535]/60 backdrop-blur-md rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className=" flex-1 flex flex-col gap-2 text-zinc-200">
            <label htmlFor="name" className="text-xs">
              Pill Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="bg-zinc-950/40 border border-zinc-700 rounded-md md:max-w-sm h-8 focus:border-sky-500 active:border-sky-500 outline-none"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 text-zinc-200">
            <label htmlFor="dosage" className="text-xs">
              Dosage
            </label>
            <input
              type="text"
              id="dosage"
              {...register("dosage")}
              className="bg-zinc-950/40 border border-zinc-700 rounded-md md:max-w-sm h-8 focus:border-sky-500 active:border-sky-500 outline-none"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 text-zinc-200">
            <label htmlFor="instructions" className="text-xs">
              Instructions
            </label>
            <input
              type="text"
              id="instructions"
              {...register("instructions")}
              className="bg-zinc-950/40 border border-zinc-700 rounded-md md:max-w-sm h-8 focus:border-sky-500 active:border-sky-500 outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex-1 flex flex-col space-y-2">
            <label className="text-xs text-zinc-200">Pill Color</label>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-wrap gap-2">
                <Controller
                  name="color"
                  control={control}
                  render={({ field }) => (
                    <>
                      {colors.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => field.onChange(c.id)}
                          className={`w-8 h-8 rounded-full ${c.bg} transition-all cursor-pointer ${
                            currentColor === c.id
                              ? "ring-2 ring-offset-2 ring-offset-[#091535] ring-white scale-110"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        />
                      ))}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <label className="text-xs text-zinc-200">Pill Shape</label>
            <div className="flex gap-4">
              <Controller
                name="shape"
                control={control}
                render={({ field }) => (
                  <>
                    <button
                      type="button"
                      onClick={() => field.onChange("round")}
                      className={`flex items-center justify-center rounded-xl w-11 h-9 transition-all cursor-pointer ${
                        currentShape === "round"
                          ? "bg-sky-600 text-white"
                          : "bg-zinc-950/40 border border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="rounded-full w-4 h-4 bg-current"></div>
                    </button>

                    <button
                      type="button"
                      onClick={() => field.onChange("capsule")}
                      className={`flex items-center justify-center rounded-xl w-11 h-9 transition-all cursor-pointer ${
                        currentShape === "capsule"
                          ? "bg-sky-600 text-white"
                          : "bg-zinc-950/40 border border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="rounded-full w-6 h-3 bg-current flex overflow-hidden">
                        <div className="w-1/2 h-full bg-black/20" />
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => field.onChange("oval")}
                      className={`flex items-center justify-center rounded-xl w-11 h-9 transition-all cursor-pointer ${
                        currentShape === "oval"
                          ? "bg-sky-600 text-white"
                          : "bg-zinc-950/40 border border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="rounded-[40%] w-5 h-3.5 bg-current"></div>
                    </button>

                    <button
                      type="button"
                      onClick={() => field.onChange("square")}
                      className={`flex items-center justify-center rounded-xl w-11 h-9 transition-all cursor-pointer ${
                        currentShape === "square"
                          ? "bg-sky-600 text-white"
                          : "bg-zinc-950/40 border border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="rounded-sm w-4 h-4 bg-current rotate-45"></div>
                    </button>
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <label className="text-xs text-zinc-200">Time</label>
            <div className="flex gap-4 flex-wrap">
              <Controller
                name="timeOfDay"
                control={control}
                render={({ field }) => (
                  <>
                    {times.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => field.onChange(t.id)}
                        className={`px-3 h-9 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          currentTime === t.id
                            ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20"
                            : "bg-zinc-950/40 border border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-emerald-600 w-56 max-w-xs rounded-md h-10 text-sm font-bold text-zinc-100 cursor-pointer">
            Add Pill
          </button>
        </div>
      </div>
    </form>
  );
};

export default PillForm;
