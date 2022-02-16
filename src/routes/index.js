import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/intro",
    },
    {
      path: "/intro",
      component: () => import("@/views/IntroPage.vue"),
    },
    {
      path: "/portfolio",
      component: () => import("@/views/PortfolioPage.vue"),
    },
    {
      path: "/librarys",
      component: () => import("@/views/LibrarysPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
