import axios from "axios";

const baseurl = "https://68f8f8e8deff18f212b83fba.mockapi.io";

export function GetCatogries() {
  return axios.get(`${baseurl}/categories`);
}

export function GetJobs() {
  return axios.get(`${baseurl}/jobs`);
}

export function GetJobsByid(id) {
  return axios.get(`${baseurl}/jobs/${id}`);
}

export async function GetJobsByCatogriesId(id) {
  const resposive = await axios.get(`${baseurl}/jobs`);
  return resposive.data.filter((job) => String(job.categoryId) === String(id));
}

export function DeleteJobsByid(id) {
  return axios.delete(`${baseurl}/jobs/${id}`);
}
