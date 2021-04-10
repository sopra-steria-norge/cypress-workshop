import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

const httpConfig = {
  baseUrl: `https://api.covid19api.com/`,
  headers: {
    "Content-Type": "application/json",
  },
};

export const httpClient = (config) => axios.create(config);

export const httpCall = async (
  url: string,
  options: AxiosRequestConfig
): Promise<any> => {
  try {
    const response = await httpClient(httpConfig).request({
      url: httpConfig.baseUrl + url,
      ...options,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const httpGet = async (url: string): Promise<any> => {
  return httpCall(url, { method: "get" });
};

export const httpPost = async (url: string, body: Object): Promise<any> => {
  return httpCall(url, { data: body, method: "post" });
};

export const httpPut = async (url: string, body: Object): Promise<any> => {
  return httpCall(url, { data: body, method: "put" });
};

export const httpDelete = async (url: string): Promise<any> => {
  return httpCall(url, { method: "delete" });
};
