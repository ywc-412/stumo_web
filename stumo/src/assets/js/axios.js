import axios from 'axios'
import store from '../../store'

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    (config)=>{
        config.headers["Content-Type"] = "application/json; charset=UTF-8";
        config.headers["Stumo-Userid"] = store.state.userinfo.id;
        // config.headers["Stumo-Nickname"] = store.state.userinfo.nickname;
        
        store.state.isLoading = true;

        return config;
    },
    (error)=> {
        store.state.isLoading = false;
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        store.state.isLoading = false;
        return response;
    },
    (error) => {
        store.state.isLoading = false;
        return Promise.reject(error);
    }
)

export default axios;