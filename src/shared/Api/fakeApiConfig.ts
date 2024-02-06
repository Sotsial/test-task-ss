import axios, { AxiosError, AxiosResponse } from "axios";
import { clearToken } from "../../app/store/authSlice";
import { store } from "../../app/store/store";

const fakeApiInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

fakeApiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    config.headers = config.headers || {};

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

fakeApiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(clearToken());
    }
    return Promise.reject(error);
  }
);

export default fakeApiInstance;
