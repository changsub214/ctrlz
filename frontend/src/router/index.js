import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import Manual from '@/views/Manual'
import MyAccount from '@/views/My'

import First from '@/components/FirstView'
import Second from '@/components/SecondView'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'First',
        component : First,
        children:[
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path:'/sign-up',
                name:'SignUp',
                component: SignUp
            },
            {
                path:'/manual',
                name:'Manual',
                component: Manual
            }
        ]
    },
    {
        path:'/sec/:id',
        name:'Second',
        component : Second,
        props : true,
        children:[
            {
                path:'/myaccount',
                name:'MyAccount',
                component : MyAccount
            }
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router