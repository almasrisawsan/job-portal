import type { Job } from "./types";
import { BASE_URL } from "../../constant";
import useFetch from "~/utils/useFetch";
import { getJobDetailsItems } from "./constant";

const useJobDetails = (id: string) => {
  const { isLoading, error, data } = useFetch<Job>(`${BASE_URL}/jobs/${id}`);

  let jobDetailsItems;
  if (data) {
    jobDetailsItems = getJobDetailsItems(data);
  }

  return { isLoading, error, data, jobDetailsItems };
};

export default useJobDetails;
