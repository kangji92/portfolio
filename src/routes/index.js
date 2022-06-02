import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  // 페이지 전환시 스크롤 최상단으로 이동
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      redirect: "/portfolio",
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
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
      path: "/portfolio/project/snbcorp",
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
      path: "/portfolio/portfolio/kdxp",
      component: () => import("@/components/portfolio/Kdxp.vue"),
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
      path: "/portfolio/portfolio/mobilian",
      component: () => import("@/components/portfolio/Mobilian.vue"),
    },
    {
      path: "/portfolio/portfolio/sh-bank",
      //component: () => import("@/views/ProjectDetailPage.vue"),
      component: () => import("@/components/portfolio/SHBank.vue"),
      //props: {},
    },
    {
      path: "/portfolio/portfolio/inipass",
      component: () => import("@/components/portfolio/Inipass.vue"),
      //props: {},
    },

    // {
    //   path: "/portfolio/portfolio/snbcorp",
    //   component: () => import("@/components/portfolio/SnbCorp.vue"),
    // },
    // {
    //   path: "/portfolio/portfolio/wellpot",
    //   component: () => import("@/components/portfolio/Wellpot.vue"),
    // },
    {
      path: "/portfolio/resume",
      component: () => import("@/components/portfolio/Resume.vue"),
      //props: {},
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
      // 경동택배_데모 현황판
      path: "/portfolio/portfolio/kdxp/ia",
      component: () => import("@/components/projects_demo/KdxpIA.vue"),
      //props: {},
    },
    {
      // 경동택배_데모
      path: "/portfolio/portfolio/kdxp/easyauth_PIN",
      component: () => import("@/components/projects_demo/kdxp/EasyAuthUI.vue"),
      props: { authType: "PIN" },
    },
    {
      // 경동택배_데모
      path: "/portfolio/portfolio/kdxp/easyauth_BIO",
      component: () => import("@/components/projects_demo/kdxp/EasyAuthUI.vue"),
      props: { authType: "BIO" },
    },
    {
      // 경동택배_데모
      path: "/portfolio/portfolio/kdxp/easyauth_loading",
      component: () => import("@/components/projects_demo/kdxp/EasyAuthUI.vue"),
      props: { isLoading: true },
    },

    {
      // 모빌리언_데모 현황판
      path: "/portfolio/portfolio/mobilian/ia",
      component: () => import("@/components/projects_demo/MobilianIA.vue"),
      //props: {},
    },

    {
      // 모빌리언_데모 공인인증서_로그인_(인증서X)
      name: "loginNoCert",
      path: "/portfolio/portfolio/mobilian/login/noCert",
      component: () => import("@/views/projects_demo/mobilian/LoginView.vue"),
      props: { isNoCertList: true },
    },
    {
      // 모빌리언_데모 공인인증서_로그인_(인증서O)
      name: "loginCertList",
      path: "/portfolio/portfolio/mobilian/login/certList",
      component: () => import("@/views/projects_demo/mobilian/LoginView.vue"),
      //props: { isNoCertList: false },
    },
    {
      // 모빌리언_데모 인증서관리_(인증서X)
      name: "noCert",
      path: "/portfolio/portfolio/mobilian/manage/noCert",
      component: () =>
        import("@/views/projects_demo/mobilian/ManagementView.vue"),
      //props: { isNoCertList: true, isShortcutShow: false },
    },
    {
      // 모빌리언_데모 인증서관리_(인증서O)
      name: "certList",
      path: "//portfolio/portfolio/mobilian/manage/certList",
      component: () =>
        import("@/views/projects_demo/mobilian/ManagementView.vue"),
      //props: { isNoCertList: false, isShortcutShow: false },
    },
    {
      // 모빌리언_데모 인증서정보_상세보기
      name: "selectCertDetail",
      path: "/portfolio/portfolio/mobilian/manage/selectCertDetail",
      component: () =>
        import("@/views/projects_demo/mobilian/UserCertDetailView.vue"),
    },
    {
      // 모빌리언_데모 인증서암호_변경
      name: "certChangePwForm",
      path: "/portfolio/portfolio/mobilian/certChangePwForm",
      component: () => import("@/views/projects_demo/mobilian/PwFormView.vue"),
      props: { pwFormType: "certChangePwForm" },
    },
    {
      // 모빌리언_데모 인증서암호_입력
      name: "certEnterPwForm",
      path: "/portfolio/portfolio/mobilian/certEnterPwForm",
      component: () => import("@/views/projects_demo/mobilian/PwFormView.vue"),
      //props: { pwFormType: "certEnterPwForm" },
    },
    {
      // 모빌리언_데모 인증서 폐기 Step1
      name: "certRevoke1",
      path: "/portfolio/portfolio/mobilian/certRevoke/1",
      component: () =>
        import("@/views/projects_demo/mobilian/CertRevokeView.vue"),
      //props: { isNextState: false },
    },
    {
      // 모빌리언_데모 인증서 폐기 Step2
      name: "certRevoke2",
      path: "/portfolio/portfolio/mobilian/certRevoke/2",
      component: () =>
        import("@/views/projects_demo/mobilian/CertRevokeView.vue"),
      //props: { isNextState: true },
    },
    {
      // 모빌리언_데모 인증서 갱신 step1
      name: "certRenew1",
      path: "/portfolio/portfolio/mobilian/certRenew/1",
      component: () =>
        import("@/views/projects_demo/mobilian/CertRenewView.vue"),
      //props: { isNextState: false },
    },
    {
      // 모빌리언_데모 인증서 갱신 step2
      name: "certRenew2",
      path: "/portfolio/portfolio/mobilian/certRenew/2",
      component: () =>
        import("@/views/projects_demo/mobilian/CertRenewView.vue"),
      // props: { isNextState: true },
    },
    {
      // 모빌리언_데모 인증서 신규발급/재발급 폼
      name: "certIssue",
      path: "/portfolio/portfolio/mobilian/certIssue",
      component: () =>
        import("@/views/projects_demo/mobilian/CertIssueView.vue"),
    },
    {
      // 모빌리언_데모 인증서 가져오기
      name: "certImport",
      path: "/portfolio/portfolio/mobilian/certImport",
      component: () =>
        import("@/views/projects_demo/mobilian/CertImportView.vue"),
    },
    {
      // 모빌리언_데모 인증서 내보내기
      name: "certExport",
      path: "/portfolio/portfolio/mobilian/certExport",
      component: () =>
        import("@/views/projects_demo/mobilian/CertExportView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  store.commit("startSpinner");
  setTimeout(() => {
    next();
  }, 1);
});

router.afterEach(() => {
  store.commit("endSpinner");
});
export default router;
