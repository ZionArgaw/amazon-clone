import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-38286/us-central1/api",
  baseURL: "https://api-g3u462qrla-uc.a.run.app/",
});

export { axiosInstance };