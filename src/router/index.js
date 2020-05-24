import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRoutes from '../modules/Home/Routes'


Vue.use(VueRouter)

let routes = [];

routes = routes.concat(HomeRoutes);

const router = new VueRouter({
    routes
})

export default router
