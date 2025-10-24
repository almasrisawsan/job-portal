import type { Job } from "./types";
import type { JobDetailsData } from "./components/JobDetailsIcon/types";
import {
  GraduationCap,
  Briefcase,
  Clock,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";

export const getJobDetailsItems = (jobDetails: Job): JobDetailsData[] => ([
  { icon: GraduationCap, label: "Minimum Qualification", value: "Bachelor" },
  { icon: Briefcase, label: "Experience Level", value: "Mid level" },
  { icon: Clock, label: "Experience Length", value: "2 years" },
  { icon: MapPin, label: "Location", value: jobDetails.location },
  { icon: Calendar, label: "Application Deadline", value: "12/08/2022" },
  { icon: DollarSign, label: "Salary Range", value: jobDetails.salary },
]);