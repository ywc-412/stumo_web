import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/";

axios.interceptors.request.use(
    (config)=>{
        config.headers["Content-Type"] = "application/json; charset=UTF-8";
        return config;
    },
    (error)=> {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

export default axios;