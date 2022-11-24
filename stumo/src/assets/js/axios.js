import axios from 'axios'
import store from '../../store'

axios.defaults.baseURL = "https://stumoapi.com/api";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    (config)=>{
        config.headers["Content-Type"] = "application/json; charset=UTF-8";
        config.headers["Stumo-Userid"] = store.state.userinfo.id;
        
        // console.log("stumo cookie" + $cookies.get("stumo-token"));
        // console.log($cookies.get("stumo-token"));
        config.headers["stumo-token"] = $cookies.get("stumo-token");
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