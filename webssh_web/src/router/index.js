import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerMap } from 'router/router.config';

Vue.use(VueRouter);

const routes = routerMap;

const router = new VueRouter({
  routes
});

export default router;
