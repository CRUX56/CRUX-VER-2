import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//Root
const home = () => import("../views/index.vue");

//Subpages - Projects
const denOfTeasProject = () => import("../views/work/den-of-teas.vue");
const thmsprtsProject = () => import("../views/work/thmsprts.vue");
const artOfAcupunctureProject = () =>
  import("../views/work/art-of-acupuncture.vue");
const lindenComansaProject = () => import("../views/work/linden-comansa.vue");
const helivsionProject = () => import("../views/work/helivision.vue");

const routes = [
  {
    path: "/",
    name: "indexLink",
    component: home,
    props: true,
  },
  {
    path: "/work/den-of-teas",
    name: "denOfTeas",
    component: denOfTeasProject,
    props: true,
  },
  {
    path: "/work/thmsprts",
    name: "thmsprtsProject",
    component: thmsprtsProject,
    props: true,
  },
  {
    path: "/work/art-of-acupuncture",
    name: "artOfAcupunctureProject",
    component: artOfAcupunctureProject,
    props: true,
  },
  {
    path: "/work/linden-comansa",
    name: "lindenComansaProject",
    component: lindenComansaProject,
    props: true,
  },
  {
    path: "/work/helivision",
    name: "helivisionProject",
    component: helivsionProject,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
