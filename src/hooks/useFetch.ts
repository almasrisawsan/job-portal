import { useEffect, useState } from "react";
import { AppAPI } from "src/services/api";

export function useFetch<T>(endpoint: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        AppAPI.get<T>(endpoint)
            .then((res) => {
                if (isMounted) {
                    setData(res.data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.error || "Something went wrong");
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [endpoint]);

    return { data, loading, error };
}
