import axios from "axios";

const baseurl = "https://68f8f8e8deff18f212b83fba.mockapi.io";

export function GetCatogries() {
  return axios.get(`${baseurl}/categories`);
}

export function GetJobs() {
  return axios.get(`${baseurl}/jobs`);
}
