import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategorieEdit from '../views/CategorieEdit'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategorieEdit }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
