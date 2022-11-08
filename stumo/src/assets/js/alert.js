import store from '../../store'

export default {
    alert(msg){
        store.state.isOpenDialog = true;
        store.state.dialogMsg = msg;
    },
    confirm(msg){
        store.state.isOpenDialog = true;
        store.state.dialogMsg = msg;
    }
};