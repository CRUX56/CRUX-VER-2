import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//Root
const home = () => import("../views/index.vue");

//Subpages
const projectOne = () => import("../views/work/portfolio-item-1.vue");

const routes = [
  {
    path: "/",
    name: "indexLink",
    component: home,
    props: true,
  },
  {
    path: "/work/project-one",
    name: "projectOne",
    component: projectOne,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
