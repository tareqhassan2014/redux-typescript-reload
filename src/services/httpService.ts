import axios, { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
});

const responseBody = (response: AxiosResponse) => response.data.data;

export const httpMethods = {
    get: (url: string) => axiosInstance.get(url).then(responseBody),
    delete: (url: string) => axiosInstance.delete(url).then(responseBody),
    post: (url: string, body: object) =>
        axiosInstance.post(url, body).then(responseBody),
    patch: (url: string, body: object) =>
        axiosInstance.patch(url, body).then(responseBody),
};
