import axios, { AxiosError } from "axios";

const BASE_URL = "https://68f8f8e8deff18f212b83fba.mockapi.io";

const AppAPI = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


AppAPI.interceptors.response.use(
    (response) => response,
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