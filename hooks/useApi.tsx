import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export const useApi = <T = any, P = any>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log(`useApi useEffect triggered for URL: ${url}`);
        let cancelled = false;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get<T[]>(url);
                console.log(res);
                if (!cancelled) setData(res.data);
            } catch (e) {
                const err = e as AxiosError;
                if (!cancelled) setError(err.message);
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        };

        fetchData();
        return () => {
            cancelled = true;
        };
    }, [url]);



    // ✅ Post Data function
    const postData = async (payload: P) => {
        try {
            setIsLoading(true);
            const res = await axios.post(url, payload);
            return res.data;
        } catch (e) {
            const err = e as AxiosError;
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, postData };
};
