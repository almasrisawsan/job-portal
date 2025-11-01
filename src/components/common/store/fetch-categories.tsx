import { useEffect } from "react";
import { useFetch } from "src/hooks/useFetch";
import { useCategoryStore } from "src/store/categoryStore";
import { useJobsStore } from "src/store/jobsStore";
import type { Category } from "src/types/category.type";
import type { Job } from "src/types/jobs.type";

export default function FetchCategories() {
  const { categories, setCategories, setLoading, setError } =
    useCategoryStore();
  const { data, loading, error, refetch } = useFetch<Category[]>("/categories");

  useEffect(() => {
    setLoading(loading);

    if (error) setError(error || "Failed to fetch categories");
    else setError(null);

    if (data && data.length > 0 && categories.length === 0) setCategories(data);
  }, [data, loading, error, categories, setCategories, setLoading, setError]);

  // Retry fetching if store becomes empty later
  useEffect(() => {
    if (categories.length === 0 && !loading) refetch?.();
  }, [categories, loading, refetch]);

  return null;
}
