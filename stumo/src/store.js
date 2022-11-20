import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage
// });

export default new Vuex.Store({
    state:{
        userinfo: {},
        loginToken: "",
        isLoading: false,
        isOpenAlertDialog: false,
        isOpenConfirmDialog: false,
        dialogMsg: "",
        dialogCallbackFunction: null
    }
    // plugins: [new VuexPersistence().plugin],
});