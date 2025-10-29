import type { FC } from "react";
import type { JobDetailsData } from "./types";

const JobDetailsIcon: FC<JobDetailsData> = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-accent">
        <Icon className="w-5 h-5 text-accent-foreground" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
};

export default JobDetailsIcon;
