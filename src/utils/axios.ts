import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';
import { camelizeKeys, decamelizeKeys } from 'humps';

const axiosApp = axios.create({
  baseURL: config.apiURL,
});

axiosApp.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['content-type'] === 'application/json; charset=utf-8'
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});
axiosApp.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  if (newConfig.headers['Content-Type'] === 'multipart/form-data')
    return newConfig;
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }
  return newConfig;
});

export { axiosApp };
