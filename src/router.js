import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './view/main/home.vue';
import store from './store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
  store,
});

export default router;
