// import createRouter and createWebHistory from the package vue-router
import { createRouter, createWebHistory } from 'vue-router'

// import the pages to be used in the router
import PageArtists from '@/pages/Artists.vue';
import PageHome from '@/pages/Home.vue';
import PageRanking from '@/pages/Ranking.vue';
import PageSongs from '@/pages/Songs.vue';
import PageVoting from '@/pages/Voting.vue';

// actual routes
const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: PageHome 
    },
    { 
        path: '/artists', 
        name: 'artists', 
        component: PageArtists 
    },
    { 
        path: '/songs', 
        name: 'songs', 
        component: PageSongs 
    },
    { 
        path: '/voting', 
        name: 'voting', 
        component: PageVoting 
    },
    { 
        path: '/ranking', 
        name: 'ranking', 
        component: PageRanking 
    },
]

// Export because I will use this in app.js
export const router = createRouter({
  history: createWebHistory(),
  routes
})