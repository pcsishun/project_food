import VueRouter from 'vue-router'
import Marketplace from './components/Marketplace.vue'
import Register from './components/Register'
import Cart from './components/Cart'


const routes = [
    {path:'/', component: Marketplace},
    {path:'/marketplace', component: Marketplace},
    {path:'/register', component: Register},
    {path:'/cart', component: Cart},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

