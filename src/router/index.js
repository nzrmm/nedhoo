import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import Foods from '../views/Foods.vue';
import Details from '../views/Details.vue';

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
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;