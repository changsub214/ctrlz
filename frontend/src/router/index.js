import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/sign-up',
        name:'SignUp',
        component: SignUp
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router