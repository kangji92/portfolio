<template>
  <div>
    <!--
    <button class="btn-prj__list"></button>-->
    <VueSlickCarousel
      class="slider"
      :arrows="true"
      :dots="true"
      v-bind="settings"
    >
      <div v-for="project in projectList" :key="project.idx" class="prj-wrap">
        <div class="prj-info">
          <p class="prj-info__num" v-html="$t(project.idx)"></p>
          <h3 v-html="$t(project.ttl)"></h3>
          <p class="prj-info__sub-ttl" v-html="$t(project.sub_ttl)"></p>
          <dl>
            <dt v-html="$t('project.info_dt_01')"></dt>
            <dd>{{ $t(project.info_dd_01) }}</dd>
          </dl>
          <dl>
            <dt v-html="$t('project.info_dt_02')"></dt>
            <dd>{{ $t(project.info_dd_02) }}</dd>
          </dl>
          <dl>
            <dt v-html="$t('project.info_dt_03')"></dt>
            <dd>{{ $t(project.info_dd_03) }}</dd>
          </dl>
          <dl>
            <dt v-html="$t('project.info_dt_04')"></dt>
            <dd>{{ $t(project.info_dd_04) }}</dd>
          </dl>
          <div class="btn-wrap">
            <!--
            <router-link tag="a" class="link" to="/portfolio/portfolio/inihub/"
              >Detail View</router-link
            >
            <router-link
              tag="a"
              class="link"
              :to="`/portfolio/portfolio/${project.name}`"
              >Detail View</router-link
            >-->
            <router-link
              tag="a"
              class="link"
              :to="`/portfolio/portfolio/${project.name}`"
              >Detail View</router-link
            >
            <!-- <button class="link" @click="openModal">열기</button> -->
          </div>
        </div>
        <div class="prj-photo">
          <div class="mockup-wrap" :class="project.mockup_wrap">
            <div class="mockup" :class="project.mockup_class_01"></div>
            <div class="mockup" :class="project.mockup_class_02"></div>
            <div class="mockup" :class="project.mockup_class_03"></div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <router-view></router-view>
    <!--
    <Modal v-if="isModalViewed" @close-modal="closeModal"></Modal> -->
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
//import TestModal from "@/components/common/TestModal.vue";
//import Modal from "@/components/portfolio/Modal.vue";
export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    //Modal,
  },
  props: {
    project: Object,
  },
  data() {
    return {
      isModalViewed: false,
      visible: false,
      titleShow: false,
      titleAnimType: "",
      titleAnimation: {
        delay: 0,
        duration: 1000,
      },

      slickSet: {
        dotsClass: "slick-dots",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: false,
        // autoplaySpeed	: 3000
      },
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
          mockup_wrap: "",
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
          mockup_wrap: "",
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
          mockup_wrap: "mockup-wrap__respons",
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
          mockup_wrap: "mockup-wrap__respons",
          mockup_class_01: "mockup__respons-pc inihub",
          mockup_class_03: "mockup__respons-mo inihub",
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
          mockup_wrap: "",
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
          mockup_class_03: "mockup__respons-mo multi-demo",
          image_class: "multi-demo",
        },
        {
          idx: "08",
          id: "inipass",
          name: "inipass",
          ttl: "공인인증서 이니패스 운영 및 유지보수",
          sub_ttl: "인증사업 공인인증 (PC/Mobile)",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.09 ~ 2020.02",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dt_05: "Photoshop",
          image_class: "inipass",
          mockup_class_01: "mockup__respons-pc inipass",
          mockup_class_03: "mockup__respons-mo inipass",
        },
        {
          idx: "09",
          id: "lotte-event",
          name: "lotte-event",
          ttl: "롯데백화점 통합앱 운영관리",
          sub_ttl: "롯데백화점 이벤트존 컨텐츠 템플릿화 (PC/MobileWeb/App)",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.02 ~ 2019.06",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "eclipse, 레드마인, photoshop",
          info_ttl_07: "",
          mockup_wrap: "",
          mockup_class_01: "mockup__mo lotte",
        },
        {
          idx: "10",
          id: "snbcorp",
          name: "snbcorp",
          ttl: " SNB Corp. 홈페이지 재구축",
          sub_ttl: "의료기기 법인 사이트 리뉴얼",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2019.07 ~ 2019.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "기획, 디자인, 퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "카페24플랫폼, FTP, Adobe Photoshop",
          info_ttl_07: "",
          mockup_wrap: "",
          mockup_class_01: "mockup__respons-pc snbcorp",
          mockup_class_02: "mockup__respons-mo snbcorp",
        },
        {
          idx: "11",
          id: "wellpot",
          name: "wellpot",
          ttl: "한국웰포트 쇼핑몰 구축 및 운영관리",
          sub_ttl: "소형가전 제조업체 쇼핑몰 구축 및 운영",
          info_ttl_07: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2015.04 ~ 2017.04",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "기획, 디자인, 퍼블리싱",
          info_dd_03: "html5, css3, javascript, jquery",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "카페24플랫폼, FTP, Adobe Photoshop",
          mockup_wrap: "",
          mockup_class_01: "mockup__respons-pc wellpot",
          mockup_class_02: "mockup__respons-mo wellpot",
        },
        {
          idx: "12",
          id: "wedding",
          name: "wedding",
          ttl: "모바일 청첩장",
          sub_ttl: "Mobile Wedding Invitation",
          info_ttl_07: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2018",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>개발환경: </b>",
          info_dd_03: "",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dt_05: "",
          mockup_wrap: "",
          mockup_class_01: "mockup__mo wedding",
        },
      ],
    };
  },

  methods: {
    afterLoad() {
      // console.log("Emitted 'after load' event.");
    },
    openModal() {
      this.isModalViewed = true;
    },
    closeModal() {
      this.isModalViewed = false;
    },
  },

  mounted() {
    this.titleAnimType = "transition.rotate";

    //
  },
};
</script>

<style>
.stop-scrolling {
  height: 100%;
  overflow: hidden;
}
.slick-list {
  height: 80vh;
}
.slick-dots {
  margin-top: 100px;
}

.slick-dots li {
  display: inline-block;
  margin: 0.5rem;
}
.slick-dots li button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #000;
  opacity: 0.5;
  font-size: 0;
  border: none;
  cursor: pointer;
}
.slick-dots li.slick-active button {
  opacity: 1;
}
.slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.slick-arrow.slick-prev {
  text-indent: -999px;
  width: 48px;
  height: 48px;
  left: 10px;
  z-index: 1000;
  background: url("~@/assets/images/ico_prev.png") center center no-repeat;
  background-size: 100%;
  opacity: 0.3;
}
.slick-arrow.slick-next {
  text-indent: -9999px;
  width: 48px;
  height: 48px;
  right: 10px;
  background: url("~@/assets/images/ico_next.png") center center no-repeat;
  background-size: 100%;
  opacity: 0.4;
}
.slick-arrow.slick-prev:hover,
.slick-arrow.slick-prev:focus,
.slick-arrow.slick-next:hover,
.slick-arrow.slick-next:focus {
  opacity: 1;
  transition: all 0.3s;
}

@media screen and (max-width: 820px) {
  /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */
  .slick-dots {
    margin-top: 14%;
  }
  .slick-arrow.slick-prev {
    width: 8vw;
    height: 8vw;
    top: 55%;
    left: 2.5%;
  }
  .slick-arrow.slick-next {
    width: 8vw;
    height: 8vw;
    top: 55%;
    right: 2.5%;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_portfolio";

.prj-info__num {
  font-size: 4.6rem;
  color: rgba(0, 0, 0, 0.15);
  font-family: $font-eng;
  font-weight: 500;
  //line-height: 1.4;
  margin-bottom: 16px;
  @include respond-to("bp-max-820") {
    font-size: 12vw;
    float: left;
    margin-right: 2vw;
  }
}
.prj-info {
  h3 {
    br {
      display: none;
    }
    @include respond-to("bp-max-820") {
      margin-top: 3vw;
      br {
        display: block;
      }
    }
  }
}
.slick-list {
  width: 80%;
}
.btn-prj__list {
  position: absolute;
  top: 15%;
  right: 100px;
  background: url("~@/assets/images/ico_list.png") center center no-repeat;
  background-size: 100%;
  width: 45px;
  height: 47px;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  z-index: 100;
  @include respond-to("bp-max-820") {
    top: 15vw;
    right: 8%;
    display: none;
  }
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
}
</style>
