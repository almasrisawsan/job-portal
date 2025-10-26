import { api } from "api/api";
import type { IJobForSend, IJobFromAPI } from "~/@types";



export async function createJob(payload: IJobForSend): Promise<IJobFromAPI> {
  const { data } = await api.post<IJobFromAPI>("/jobs", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
}