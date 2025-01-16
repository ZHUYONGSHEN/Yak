import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: "/homePage",
    name: "homePage",
    component: () =>
      import(
        /* webpackChunkName: "homePage" */ "../views/homePage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
