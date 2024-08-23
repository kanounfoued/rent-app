import axios from 'axios';

type Props = {
  baseURL: string;
  token?: string;
  logout: () => void;
};

export default ({ baseURL, token, logout }: Props) => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.status === 401) logout();
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
