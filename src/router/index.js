import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import podcastDetail from '../views/PodcastDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/podcast/:id',
      name: 'podcast',
      component: podcastDetail,
      props:true,
    },
   
  ]
})

export default router
