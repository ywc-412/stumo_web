import axios from 'axios'
import store from '../../store'

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    (config)=>{
        config.headers["Content-Type"] = "application/json; charset=UTF-8";
        config.headers["Stumo-Userid"] = store.state.userinfo.id;
        // config.headers["Stumo-Nickname"] = store.state.userinfo.nickname;
        
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