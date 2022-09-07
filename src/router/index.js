import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PortfolioView.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoryView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogView.vue"),
  },
  {
    path: "/publication",
    name: "publication",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PublicationView.vue"),
  },
  {
    path: "/onepage",
    name: "onepage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OnePageView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
