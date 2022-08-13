import axios from 'axios'

axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
    (config)=>{
        config.headers["Content-Type"] = "application/json; charset=UTF-8";
        return config;
    },
    (error)=> {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axios;