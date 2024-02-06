import axios, { AxiosError, AxiosResponse } from "axios";

const jsonServerConfig = axios.create({
  baseURL: "http://localhost:3001/",
});

jsonServerConfig.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

jsonServerConfig.interceptors.response.use(
  (response: AxiosResponse) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 1000);
    });
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default jsonServerConfig;
