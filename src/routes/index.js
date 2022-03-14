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
      //name: "",
      path: "/portfolio/portfolio/inihub",
      component: () => import("@/components/portfolio/Inihub.vue"),
      props: {},
    },
    {
      // porfolio
      //name: "",
      path: "/portfolio/portfolio/nexess-demo",
      component: () => import("@/components/portfolio/Nexess.vue"),
      props: {},
    },
    {
      // porfolio
      //name: "",
      path: "/portfolio/portfolio/kyobo",
      component: () => import("@/components/portfolio/Kyobo.vue"),
      props: {},
    },
    {
      path: "/portfolio/portfolio/sh-bank",
      //component: () => import("@/views/ProjectDetailPage.vue"),
      component: () => import("@/components/portfolio/SHBank.vue"),
      //props: {},
    },
    {
      path: "/portfolio/portfolio/multi-demo",
      component: () => import("@/views/ProjectDetailPage.vue"),
      props: {},
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
