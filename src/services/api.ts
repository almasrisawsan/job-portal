import axios, { AxiosError } from "axios";

const AppAPI = axios.create({
    baseURL: "https://68f8f8e8deff18f212b83fba.mockapi.io",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Return only data and handle basic errors
AppAPI.interceptors.response.use(
    (response) => response,  // ✅ This extracts the data automatically
    (error: AxiosError) => {
        if (!error.response) {
            return Promise.reject({ status: 500, error: "Network error" });
        }
        return Promise.reject({
            status: error.response.status,
            error: error.message
        });
    }
);

export { AppAPI };