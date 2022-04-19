import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  // 페이지 전환시 스크롤 최상단으로 이동
  scrollBehavior: () => ({ y: 0 }),
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
      //components: {
      //  default: () =>
      //    import(/* webpackChunkName "common" */ "@/views/PortfolioPage.vue"),
      //  mobile: () =>
      //    import(/* webpackChunkName "common" */ "@/views/PortfolioPageM.vue"),
      //},
    },
    {
      path: "/portfolio/blog",
      component: () => import("@/views/BlogPage.vue"),
      beforeEnter() {
        window.location.href = "https://kang-ji.tistory.com";
      },
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
      path: "/portfolio/portfolio/inipass",
      //component: () => import("@/views/ProjectDetailPage.vue"),
      component: () => import("@/components/portfolio/Inipass.vue"),
      //props: {},
    },
    {
      path: "/portfolio/resume",
      //component: () => import("@/views/ProjectDetailPage.vue"),
      component: () => import("@/components/portfolio/Resume.vue"),
      //props: {},
    },
    {
      path: "/portfolio/portfolio/mobilian",
      component: () => import("@/components/portfolio/Mobilian.vue"),
    },
    // {
    //   path: "/portfolio/portfolio/lotte-event",
    //component: () => import("@/components/portfolio/Lotte.vue"),
    //  },
    //  {
    //   path: "/portfolio/portfolio/wedding",
    //component: () => import("@/components/portfolio/Wedding.vue"),
    //  },
    {
      path: "/portfolio/portfolio/multi-demo",
      component: () => import("@/components/portfolio/MultiDemo.vue"),
      props: {},
    },

    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
