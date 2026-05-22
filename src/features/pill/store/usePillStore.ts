import { FamilySchedule, Pill } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PillState {
  familySchedule: FamilySchedule;

  updatePaitentName: (name: string) => void;
  updateFamilyName: (name: string) => void;
  addPill: (
    timeOfDay: "morning" | "afternoon" | "evening" | "night",
    pill: Omit<Pill, "id">,
  ) => void;
  removePill: (
    timeOfDay: "morning" | "afternoon" | "evening" | "night",
    pillId: string,
  ) => void;

  generateShareLink: () => string;
  loadScheduleFormUrl: (encodedData: string) => void;
}

const initialSchedule: FamilySchedule = {
  familyName: "",
  paitentName: "",
  schedule: {
    morning: [],
    afternoon: [],
    evening: [],
    night: [],
  },
};

export const usePillStore = create<PillState>()(
  persist(
    (set, get) => ({
      familySchedule: initialSchedule,

      updatePaitentName: (name) => {
        set((state) => ({
          familySchedule: {
            ...state.familySchedule,
            paitentName: name,
          },
        }));
      },
      updateFamilyName: (name) => {
        set((state) => ({
          familySchedule: {
            ...state.familySchedule,
            familyName: name,
          },
        }));
      },

      addPill: (timeOfDay, pillData) => {
        set((state) => {
          const newPill: Pill = { ...pillData, id: crypto.randomUUID() };
          return {
            familySchedule: {
              ...state.familySchedule,
              schedule: {
                ...state.familySchedule.schedule,
                [timeOfDay]: [
                  ...state.familySchedule.schedule[timeOfDay],
                  newPill,
                ],
              },
            },
          };
        });
      },
      removePill(timeOfDay, pillId) {
        set((state) => {
          return {
            familySchedule: {
              ...state.familySchedule,
              schedule: {
                ...state.familySchedule.schedule,
                [timeOfDay]: state.familySchedule.schedule[timeOfDay].filter(
                  (pill) => pill.id !== pillId,
                ),
              },
            },
          };
        });
      },

      generateShareLink() {
        const { familySchedule } = get();
        const jsonStr = JSON.stringify(familySchedule);

        const encoded = btoa(encodeURIComponent(jsonStr));
        const baseUrl =
          typeof window !== "undefined" ? window.location.origin : "";
        return `${baseUrl}/view?data=${encoded}`;
      },
      loadScheduleFormUrl(encodedData) {
        try {
          const decodedJson = decodeURIComponent(atob(encodedData));
          const parsedSchedule = JSON.parse(decodedJson);
          set({ familySchedule: parsedSchedule });
        } catch (error) {
          console.error("Failed to load schedule from URL:", error);
        }
      },
    }),
    {
      name: "pill-snap-storage",
    },
  ),
);
