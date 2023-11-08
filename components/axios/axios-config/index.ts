import { Environment } from "@/components/environment";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


class AxiosService {
  axiosInstance: AxiosInstance;

  multiPartFormDataConfig: AxiosRequestConfig = {
    baseURL: Environment.URL_BASE,
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  constructor() {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: Environment.URL_BASE,
    };

    this.axiosInstance = axios.create(axiosConfig);
  }

  async get(url: string, params?: any): Promise<any> {
    return this.axiosInstance.get(url, params);
  }

  async post(url: string, params?: any): Promise<any> {
    return this.axiosInstance.post(url, params);
  }

  async postT<Body, Result>(
    url: string,
    params?: Body,
    customConfig?: AxiosRequestConfig
  ): Promise<Result> {
    const response = await this.axiosInstance.post(url, params, customConfig);
    return response.data;
  }

  async put(url: string, params: any): Promise<any> {
    return this.axiosInstance.put(url, params);
  }

  async putT<Body, Result>(url: string, params: Body): Promise<Result> {
    const response = await this.axiosInstance.put(url, params);
    return response.data;
  }

  async delete(url: string, params: any): Promise<any> {
    return this.axiosInstance.delete(url, params);
  }

  async patch(url: string, params: any): Promise<any> {
    return this.axiosInstance.patch(url, params);
  }
}

const ApiService: AxiosService = new AxiosService();

export { ApiService };