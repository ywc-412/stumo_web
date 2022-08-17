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
        component: () => import("@/views/Login.vue"),
    },
    {
        path: '/myPage',
        name: 'MyPage',
        component: () => import("@/views/MyPage.vue"),
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
        path: '/applList',
        name: 'ApplList',
        component: () => import("@/views/ApplList.vue"),
    },
    {
        path: '/applConfirm',
        name: 'ApplConfirm',
        component: () => import("@/views/ApplConfirm.vue"),
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
