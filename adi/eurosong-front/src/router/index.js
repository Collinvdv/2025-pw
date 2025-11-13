// ------ Import 
import { createRouter, createWebHistory } from 'vue-router';

// ------ Pages 
import Artists from "@/pages/Artists.vue";
import Home from "@/pages/Home.vue";
import Ranking from "@/pages/Ranking.vue";
import Songs from "@/pages/Songs.vue";
import Voting from "../pages/Voting.vue";

// ------ Config of routes 
const routes = [
    {
        path: '/artists',
        name: 'artists',
        component: Artists
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: Ranking
    },
    {
        path: '/songs',
        name: 'songs',
        component: Songs
    },
    {
        path: '/voting',
        name: 'voting',
        component: Voting
    },
];

// Export to use in main.js
export const router = createRouter({
  history: createWebHistory(),
  routes
})