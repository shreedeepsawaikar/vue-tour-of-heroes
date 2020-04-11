import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HeroDetail from "@/components/HeroDetail.vue";
import Dashboard from "@/components/Dashboard.vue";
import Heroes from "@/components/Heroes.vue";
import AddHero from "@/views/Add.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dashboard
  },
  {
    path: "/heroes",
    name: "heroes",
    component: Heroes
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: HeroDetail
  },
  {
    path: "/add",
    name: "addHero",
    component: AddHero
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
