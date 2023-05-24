import axios from "axios";
import Values from "../Values";
import LocalStorageManager from "./LocalStorageManager";

axios.defaults.baseURL = Values.baseBackendUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
    return LocalStorageManager.getAuthToken();
};

export const setAuthToken = (token: string) => {
    LocalStorageManager.setAuthToken(token);
};

export const removeAuthToken = () => {
	LocalStorageManager.removeAuthToken();
};

export const setRefreshToken = (token: string) => {
	LocalStorageManager.setRefreshToken(token);
};

export const getApi = (BASE_URL: string) => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  // Request interceptor
  instance.interceptors.request.use(
    async (config: any) => {
      const authToken = LocalStorageManager.getAuthToken();

      if (authToken !== null && authToken !== 'null' && authToken.length > 0) {
        config.headers['Authorization'] = `${authToken}`;
      }

      try {
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
