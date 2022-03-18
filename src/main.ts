import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import TestPage from './pages/TestPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/test', component: TestPage },
];

const router = createRouter({ history: createWebHistory(), routes });
const app = createApp(App);
app.use(router);
app.mount('#app');
