import axios from "axios";

export const API_URL = process.env.MEDBOX_TARGET_API || "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
