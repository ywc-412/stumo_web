import store from '../../store'

export default {
    alert(msg, callbackFunction){
        store.state.isOpenAlertDialog = true;
        store.state.dialogMsg = msg;
        store.state.dialogCallbackFunction = callbackFunction;
    },
    confirm(msg, callbackFunction){
        store.state.isOpenConfirmDialog = true;
        store.state.dialogMsg = msg;
        store.state.dialogCallbackFunction = callbackFunction;
    }
};