<template>
  <div class="portfolio-main">
    <AppHeader></AppHeader>
    <AppFooter></AppFooter>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section">
        <div class="inner">
          <div class="ttl-group">
            <h2 v-html="$t('portfolio.ttl')"></h2>
            <p>{{ $t("portfolio.ttl_p") }}</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="content about">
          <div class="about-inner">
            <div class="txt-group">
              <em>日日新又日新</em>
              <p>끊임없이 보다 나은 사람이 되자</p>
            </div>
            <span
              >웹퍼블리셔 강지연입니다. <br />
              저 자신을 발전시키기 위해<br />
              시간과 노력을 아끼지 않겠습니다.</span
            >
          </div>
        </div>
      </section>
      <section class="section">
        <div class="content desc">
          <div class="desc-inner">
            <h3>{{ $t("portfolio.sec_1_ttl_h3") }}</h3>
            <ul class="item-group">
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_1") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_1')"></p>
              </li>
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_2") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_2')"></p>
              </li>
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_3") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_3')"></p>
              </li>
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_4") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_4')"></p>
                <ul class="tool-list">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <ProjectSlider></ProjectSlider>
      </section>
      <section class="section">
        <div class="content experience">
          <ExperienceSlider></ExperienceSlider>
        </div>
      </section>
      <section class="section">
        <div class="content contact">
          <div class="contact-inner">
            <div class="txt-group">
              <em>Thank you.</em>
            </div>
            <router-link tag="button" class="btn trn" to="/portfolio/resume">
              {{ $t("btn.resume") }}
            </router-link>
          </div>
        </div>
      </section>
    </full-page>
    <Modal v-if="showPopup" @close-popup-dlg="closePopup"></Modal>
  </div>
</template>
<script>
import Vue from "vue";
import AppHeader from "@/components/common/AppHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import VueFullPage from "vue-fullpage.js";
import ProjectSlider from "@/components/portfolio/ProjectSlider.vue";
import ExperienceSlider from "@/components/portfolio/ExperienceSlider.vue";
import Modal from "@/views/Modal.vue";

Vue.use(VueFullPage);
export default {
  components: {
    ProjectSlider,
    ExperienceSlider,
    Modal,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      showPopup: false,
      offsets: [],
      idx: 0,
      isLandscape: false,
      projectList: [
        /*  {
          idk: "01",
          ttl: "개인 포트폴리오",
          sub_ttl: " ",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2021.07 ~ ",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "vue-cli, sass(scss)",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "Git, Github Desktop, photoshop",
          mockup_class_01: "mockup__respons",
          image_class: "my-portfolio",
        },  */
        {
          idx: "01",
          id: "sh-bank",
          name: "sh-bank",
          ttl: "수협은행 Nextro시스템 고도화",
          sub_ttl: " 보안솔루션 IAM팀 제품 시스템고도화",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2021.07 ~ 2021.08",
          info_dd_02: "웹퍼블리싱",
          info_dd_03: "Html5",
          info_dd_04: "Tomcat",
          mockup_class_01: "mockup__pc sh-bank",
          image_class: "sh-bank",
        },
        {
          idx: "02",
          id: "mobilian",
          name: "mobilian",
          ttl: "INISAFE Mobilian <br> 모바일공인인증서 고도화",
          sub_ttl: " 보안솔루션 PKI 제품 고도화",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2021.07 ~ 2021.11",
          info_dd_02: "프론트앤드, 웹퍼블리싱",
          info_dd_03: "vue-cli, sass(scss)",
          info_dd_04: "Git, Bitbucket, SourceTree ",
          mockup_class_01: "mockup__mo mobilian",
          image_class: "mobilian",
        },

        {
          idx: "03",
          id: "kyobo",
          name: "kyobo",
          ttl: "교보생명 통합인증센터 구축",
          sub_ttl: " 보안솔루션 신제품 INIHUB ",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2020.12 ~ 2021.07",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "프론트앤드, 웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "vue-cli, sass(scss)",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "Git, Bitbucket, SourceTree, zeplin, photoshop",
          mockup_class_01: "mockup__respons-pc kyobo",
          mockup_class_02: "mockup__respons-pad kyobo",
          mockup_class_03: "mockup__respons-mo kyobo",
          image_class: "kyobo",
        },
        {
          idx: "04",
          id: "inihub",
          name: "inihub",
          ttl: "인증통합플랫폼 이니허브 개발",
          sub_ttl: "보안솔루션 신제품 ",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2021.07 ~ 2021.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱, 프론트엔드",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "Vue.js (vue-cli), sass(scss)",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "Git, Bitbucket, SourceTree, zeplin, photoshop",
          mockup_class_01: "mockup__trans-pc inihub",
        },
        {
          idx: "05",
          id: "nexess-demo",
          name: "nexess-demo",
          ttl: "Nexess Demo System 구축",
          sub_ttl: "SSO 데모사이트 구축",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2020.07 ~ 2020.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript(jquery)",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "Tomcat, photoshop",
          info_ttl_06: "",
          mockup_class_01: "mockup__pc nexess-demo",
          mockup_class_02: "mockup__pad nexess-demo",
        },
        {
          idx: "07",
          ttl: "멀티인증 Demo 사이트 구축",
          id: "multi-demo",
          name: "multi-demo",
          sub_ttl: "",
          info_ttl_06: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2021.07 ~ 2021.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dt_05: "Tomcat, Git, Bitbucket",
          mockup_class_01: "mockup__respons-pc multi-demo",
          mockup_class_02: "mockup__respons-pad multi-demo",
          mockup_class_03: "mockup__respons-mo multi-demo",
          image_class: "multi-demo",
        },
        {
          idx: "08",
          id: "inipass",
          name: "inipass",
          ttl: "공인인증서 이니패스 운영 및 유지보수",
          sub_ttl: "2019.02 ~ 2020.06",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.09 ~ 2020.02",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dt_05: "Photoshop",
          image_class: "inipass",
        },
        {
          idx: "09",
          id: "lotte",
          name: "lotte",
          ttl: "롯데백화점 하이드리드앱<br> 운영관리",
          sub_ttl: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.07 ~ 20219.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "eclipse, 레드마인, photoshop",
          info_ttl_07: "",
          mockup_class_01: "mockup__pc lotte",
          mockup_class_02: "mockup__mo lotte",
        },
        {
          idx: "10",
          id: "lotte-event",
          name: "lotte-event",
          ttl: "롯데백화점 이벤트존 컨텐츠 템플릿화",
          sub_ttl: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.07 ~ 20219.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "eclipse, 레드마인, photoshop",
          info_ttl_07: "",
          mockup_class_01: "mockup__pc lotte",
          mockup_class_02: "mockup__mo lotte",
        },
        {
          idx: "11",
          id: "wedding",
          name: "wedding",
          ttl: "모바일 청첩장",
          sub_ttl: "Mobile Wedding Invitation",
          info_ttl_07: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.01 ~ 2019.02",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>개발환경: </b>",
          info_dd_03: "",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dt_05: "",
          mockup_class_01: "mockup__mo wedding",
        },
      ],

      options: {
        afterLoad: this.afterLoad,
        licenseKey: "57A4E3B2-4CF4497D-84973653-2E0DBD93",
        controlArrows: true,
        scrollBar: false,
        navigation: true,
        scrollOverflow: true,
        //Navigation: true,
        //NavigationPosition: "Right", // Navigate the position of the small dot
        // NavigationToolTIPS: ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"],
        slidesNavigation: true,

        anchors: ["1", "2", "3", "Projects", "4"],
        //sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
      },
    };
  },

  methods: {
    showPopupDlg(param) {
      //alert("ddd");
      this.$emit("showPopupDlg", param);
      //this.popupIdx = popupData.data;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>
<style>
b {
  font-weight: 500 !important;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_portfolio-main";
</style>
