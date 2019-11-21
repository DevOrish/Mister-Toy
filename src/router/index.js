import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ToyApp from '../views/Toy-App.vue'
import ToyEdit from '../views/Toy-Edit.vue'
import ToyDetails from '../views/Toy-Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/toy',
    component: ToyApp
  },
  {
    path: '/edit/:id?',
    component: ToyEdit
  },
  {
    path: '/details/:id?',
    component: ToyDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
