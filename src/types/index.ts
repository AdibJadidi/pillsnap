export type MedicationShape = "round" | "capsule" | "oval" | "square";
export type MedicationColor =
  | "White"
  | "yellow"
  | "pink"
  | "blue"
  | "red"
  | "green"
  | "purple";

export interface Pill {
  id: string;
  name: string;
  dosage: string;
  shape: MedicationShape;
  color: MedicationColor;
  instructions: string;
  image?: string;
}

export interface DaySchedule {
  morning: Pill[];
  afternoon: Pill[];
  evening: Pill[];
  night: Pill[];
}

export interface FamilySchedule {
  familyName: string;
  paitentName: string;
  schedule: DaySchedule;
}

export interface TakenStatus {
  [dateStr: string]: {
    morning: boolean;
    afternoon: boolean;
    evening: boolean;
    night: boolean;
  };
}
