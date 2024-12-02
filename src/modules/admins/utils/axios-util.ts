import axios from "axios";

export const getBaseURL = () => {
  const { hostname } = window.location;
  const subdomain = hostname.split(".")[0];

  const protocol = import.meta.env.VITE_NODE_ENV === "production" ? "https" : "http";
  const domain =
  import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_DOMAIN
      : "localhost:3000";
  return `${protocol}://${subdomain}.${domain}/api`;
};

const api = axios.create({
  baseURL: getBaseURL(),
});

const isFormData = (data: any) => data instanceof FormData;

api.interceptors.request.use(
  (config) => {
    interface Tokens {
      accessToken: string;
      refreshToken: string;
    }

    const tokenString: string | null = localStorage.getItem("tokens");
    const tokens: Tokens | null = tokenString ? JSON.parse(tokenString) : null;

    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }
    if (config.data) {
      if (isFormData(config.data)) {
        // For FormData, let the browser set the Content-Type automatically
        // This ensures the correct boundary string is set
        delete config.headers["Content-Type"];
      } else {
        config.headers["Content-Type"] = "application/json";
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
