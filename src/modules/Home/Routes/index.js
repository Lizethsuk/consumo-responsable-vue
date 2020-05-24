import HomeView from '../Views/HomeView.vue'
import Home from "../Pages/Home.vue"

const routes = [
    {
        path: '/',
        component: HomeView,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
               
            }
    
        ]
    }
]

export default routes