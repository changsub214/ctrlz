import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import Manual from '@/views/Manual'

import First from '@/components/FirstView'
import Second from '@/components/SecondView'
import Third from '@/components/ThirdView'


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
    },
    {
        path:'/trd',
        name:'Third',
        component : Third,
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router