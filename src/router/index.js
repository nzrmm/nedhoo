import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import Foods from '../views/Foods.vue';
import Details from '../views/Details.vue';
import Cart from '../views/Cart.vue';
import OrderSuccess from '../views/OrderSuccess.vue';


const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/foods',
        name : 'Foods',
        component : Foods
    },
    {
        path : '/details/:id',
        name : 'Details',
        component : Details
    },
    {
        path : '/cart',
        name : 'Cart',
        component : Cart
    },
    {
        path : '/order-success',
        name : 'Order Success',
        component : OrderSuccess
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;