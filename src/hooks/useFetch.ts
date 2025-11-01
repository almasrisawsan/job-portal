// src/hooks/useFetch.ts
import { useEffect, useState, useCallback } from "react";
import { AppAPI } from "src/services/api";

interface UseFetchOptions {
    skip?: boolean;
}

export function useFetch<T>(endpoint: string, options?: UseFetchOptions) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(!options?.skip);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await AppAPI.get<T>(endpoint);
            setData(res.data);
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
        if (!options?.skip) {
            fetchData();
        }
    }, [fetchData, options?.skip]);

    return { data, loading, error, refetch: fetchData };
}
