import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login/Login.vue"),
    },
    {
        path: '/redirectLogin',
        name: 'RedirectLogin',
        component: () => import("@/views/Login/RedirectLogin.vue"),
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import("@/views/Login/Logout.vue"),
    },
    {
        path: '/myPage',
        name: 'MyPage',
        component: () => import("@/views/MyPage/MyPage.vue"),
    },
    {
        path: '/myChat',
        name: 'MyChat',
        component: () => import("@/views/Chat/MyChat.vue"),
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import("@/views/Chat/Chat.vue"),
    },
    {
        path: '/moView',
        name: 'MoView',
        component: () => import("@/views/MoView.vue"),
    },
    {
        path: '/moRegi',
        name: 'MoRegi',
        component: () => import("@/views/MoRegi.vue"),
    },
    {
        path: '/moAppl',
        name: 'MoAppl',
        component: () => import("@/views/MoAppl.vue"),
    },
    {
        path: '/myAppl',
        name: 'MyAppl',
        component: () => import("@/views/MyAppl.vue"),
    },
    {
        path: '/applList/:meetingNo',
        name: 'ApplList',
        component: () => import("@/views/Appl/ApplList.vue"),
    },
    {
        path: '/applConfirm',
        name: 'ApplConfirm',
        component: () => import("@/views/Appl/ApplConfirm.vue"),
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
