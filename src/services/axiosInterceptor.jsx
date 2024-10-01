import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_WORKING_ENVIRONMENT === "production"
      ? import.meta.env.VITE_PRODUCTION_BASE_URL
      : import.meta.env.VITE_DEVELOPMENT_BASE_URL,
});
export default instance;
