"use client";
import React from "react";
import { usePillStore } from "../store/usePillStore";

const UserForm = () => {
  const { updateFamilyName, updatePaitentName } = usePillStore();
  return (
    <div className="flex flex-col gap-y-4 p-6">
      <h2 className="text-zinc-100">User Information</h2>
      <div className="grid grid-cols-3 gap-4 bg-[#091535]/60 backdrop-blur-md rounded-lg p-4">
        <div className=" flex-1 flex flex-col gap-2 text-zinc-200">
          <label htmlFor="name" className="text-xs">
            Paitent Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-zinc-950/40 border border-zinc-700 rounded-md max-w-sm h-8 focus:border-sky-500 active:border-sky-500 outline-none"
            onChange={(e) => updatePaitentName(e.target.value)}
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 text-zinc-200">
          <label htmlFor="family" className="text-xs">
            Family Name
          </label>
          <input
            type="text"
            id="family"
            className="bg-zinc-950/40 border border-zinc-700 rounded-md max-w-sm h-8 focus:border-sky-500 active:border-sky-500 outline-none"
            onChange={(e) => updateFamilyName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
