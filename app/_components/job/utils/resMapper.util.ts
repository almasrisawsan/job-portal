import type { IJobFromAPI, TJobForDisplay } from "~/@types";

export function mapJobToDisplay(res: IJobFromAPI): TJobForDisplay {
  return {
    id: res.id,
    title: res.title ?? res.jobTitle ?? "Untitled",
    company: res.company ?? res.companyName ?? "",
    location: res.location ?? res.jobLocation ?? "",
    type: res.type ?? res.jobType ?? "",
    salary: res.salary ?? res.salaryRange ?? "",
    description: res.description ?? res.jobDescription ?? "",
    requirements: res.requirements ?? [],
    createdAt: res.createdAt
  };
}

export function mapJobsToDisplay(res: IJobFromAPI[]): TJobForDisplay[] {
  return res.map(mapJobToDisplay);
}