import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError,InternalAxiosRequestConfig } from 'axios'
// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});

// 请求拦截器
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在发送请求之前可以做一些处理，比如添加token等
        // config.headers['Authorization'] = `Bearer ${token}`;





        return config as InternalAxiosRequestConfig<any>;  // 不推荐这个做法它实际上是在告诉 TypeScript：“我知道这里有类型不匹配，但请忽略它。”
    },
    (error: AxiosError) => {
        // 对请求错误做些什么





        return Promise.reject(error)
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        // 可以在这里统一处理响应格式等






        return response
    },
    (error: AxiosError) => {
        // 对响应错误做点什么，比如显示错误消息
        // 可以根据状态码进行不同的错误处理






        if (error.response) {
            // 服务器返回了一个状态码，范围在2xx之外
            console.error('Error Status:', error.response.status);
            console.error('Error Data:', error.response.data);
        } else if (error.request) {
            // 请求已经发出，但没有收到响应
            console.error('No Response Received:', error.request);
        } else {
            // 在设置请求时发生了错误
            console.error('Error Message:', error.message);
        }



        return Promise.reject(error)
    }
);

export default instance