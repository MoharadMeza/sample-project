import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export const setupAxios = (axios: AxiosInstance, store: any) => {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const { auth } = store.getState();

      if (auth.accessToken) {
        config.headers = {
          Authorization: `Bearer ${auth.accessToken}`,
        };
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );
};
