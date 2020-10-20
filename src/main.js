import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Portfolio from './components/Portfolio.vue';
import About from './components/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Portfolio },
    { path: '/portfolio', component: Portfolio },
    { path: '/about', component: About },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('body');
