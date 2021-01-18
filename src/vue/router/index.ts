import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PokemonList',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonList.vue')
  },
  {
    path: '/pokemon/:pokemonName',
    name: 'pokemondetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonDetails.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
