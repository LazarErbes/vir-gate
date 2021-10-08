import { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosTransformer } from 'axios';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        common: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers.common = {
        ...config.headers.common,
    };

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);

    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // Do something with response data
    if (response.status === 201) {
        // Do something
    }

    if (response.status === 202) {
        // Do something
    }

    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    if (error.response && error.response.status === 400) {
    }

    if (error.response && error.response.status === 500) {
        // Do something
    }

    console.error(`[response error] [${JSON.stringify(error)}]`);

    return Promise.reject(error);
};

export const defaultTransformers = (): AxiosTransformer[] => {
    const { transformRequest } = axios.defaults;
    if (!transformRequest) {
        return [];
    } else if (transformRequest instanceof Array) {
        return transformRequest;
    } else {
        return [transformRequest];
    }
};

api.interceptors.response.use(onResponse, onResponseError);
api.interceptors.request.use(onRequest, onRequestError);

export default api;
