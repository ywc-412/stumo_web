import axios from 'axios'
import store from '../../store'

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    (config)=>{
        console.log("==============");
        console.log(store.state.userinfo);
        console.log("==============");
        config.headers["Content-Type"] = "application/json; charset=UTF-8";
        config.headers["UserInfo"] = "userinfo";
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