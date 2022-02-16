import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/portfolio",
    },
    {
      path: "/portfolio",
      component: () => import("@/views/IntroPage.vue"),
    },
    {
      path: "/portfolio/portfolio",
      component: () => import("@/views/PortfolioPage.vue"),
    },

    {
      path: "/portfolio/librarys",
      component: () => import("@/views/LibrarysPage.vue"),
    },
    {
      // porfolio
      name: "inihub",
      path: "/portfolio/portfolio/inihub/",
      component: () => import("@/views/ProjectDetailPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
