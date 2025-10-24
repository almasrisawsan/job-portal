import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface JobDetailsData {
  icon: LucideIcon;
  label: string;
  value: ReactNode; // string | number | JSX
}