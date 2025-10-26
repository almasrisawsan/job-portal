import type { IJobForSend } from "~/@types";
import { keyOf } from "../landing/popular/cats.utils";

export function mapFormToJobForSend(
  fd: FormData,
  categoryIndex: Map<string, number>
): IJobForSend {
  const get = (k: string) => String(fd.get(k) ?? "").trim();
  const categoryId =
    categoryIndex.get(keyOf(get("jobCategory"))) ?? (categoryIndex.size + 1); 

  return {
    title: get("jobTitle"),
    company: get("companyName"),
    location: get("jobLocation"),
    type: get("jobType"),
    salary: get("salaryRange"),
    description: get("jobDescription"),
    isFeatured: /^y(es)?$/i.test(get("featured")),
    categoryId,
    companyUrl: get("companyWebsite") || undefined,
    experience: get("experience") || undefined,
  };
}