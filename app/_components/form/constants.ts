import type { TCats, TJob } from "~/@types";

export const JOB_CATEGORIES: TCats[] = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Engineering",
  "DevOps / Cloud",
  "UI/UX Design",
  "Data Science / AI",
  "Mobile Development",
  "Quality Assurance (QA)",
] as const;

export const JOB_TYPES: TJob[] = [
    "Full Time",
    "Part Time",
    "Remote"
] as const;
