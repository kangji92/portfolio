<template>
  <div>
    <button class="btn-prj__list"></button>
    <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">
      <div v-for="project in projectList" :key="project.idx">
        <div class="prj-info">
          <p class="prj-info__num">{{ project.idx }}</p>
          <h3>{{ project.ttl }}</h3>
          <p class="prj-info__sub-ttl" v-html="project.sub_ttl"></p>
          <dl>
            <dt v-html="project.info_dt_01"></dt>
            <dd>{{ project.info_dd_01 }}</dd>
          </dl>
          <dl>
            <dt v-html="project.info_dt_02"></dt>
            <dd>{{ project.info_dd_02 }}</dd>
          </dl>
          <dl>
            <dt v-html="project.info_dt_03"></dt>
            <dd>{{ project.info_dd_03 }}</dd>
          </dl>
          <dl>
            <dt v-html="project.info_dt_04"></dt>
            <dd>{{ project.info_dd_04 }}</dd>
          </dl>
          <div class="btn-wrap">
            <!-- <router-link tag="a" class="link" to="/project"
              >Detail View</router-link
            >-->
          </div>
        </div>
        <div class="prj-photo">
          <div class="mockup-wrap">
            <div class="mockup" :class="project.mockup_class_01"></div>
            <div class="mockup" :class="project.mockup_class_02"></div>
            <div class="mockup" :class="project.mockup_class_03"></div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
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
        },
        {
          idk: "02",
          ttl: "Sh수협은행 Nextro시스템 고도화",
          sub_ttl: " 보안솔루션 IAM팀 제품 시스템고도화",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2021.07 ~ 2021.08",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>마크업/개발방식: </b>",
          info_dd_03: "Html5",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dd_04: "Tomcat",
          mockup_class_01: "mockup__pc sh-bank",
          image_class: "sh-bank",
        },
        */
        {
          idk: "03",
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
          idk: "04",
          ttl: "인증통합플랫폼 이니허브 개발",
          sub_ttl: "보안솔루션 신제품",
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
          idk: "06",
          ttl: "Nexess Demo System 구축",
          sub_ttl: "",
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
          idk: "07",
          ttl: "멀티인증 Demo 사이트 구축",
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
          mockup_class_01: "mockup__pc multi-demo",
          mockup_class_02: "mockup__pad multi-demo",
          mockup_class_03: "mockup__mo multi-demo",
          image_class: "multi-demo",
        },
        {
          idk: "08",
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
          idk: "09",
          ttl: "롯데백화점 하이드리드앱 운영관리",
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
          idk: "10",
          ttl: "모바일청첩장",
          sub_ttl: "",
          info_ttl_07: "",
          info_dt_01: "<b>기간: </b>",
          info_dd_01: "2018",
          info_dt_02: "<b>담당업무: </b>",
          info_dd_02: "웹퍼블리싱",
          info_dt_03: "<b>개발환경: </b>",
          info_dd_03: "",
          info_dt_04: "<b>사용 Tool: </b>",
          info_dt_05: "",
          mockup_class_01: "mockup__mo wedding",
        },
      ],
    };
  },
  methods: {
    afterLoad() {
      // console.log("Emitted 'after load' event.");
    },
    showNext() {
      this.$refs.carousel.next();
    },
  },
  mounted() {
    this.titleAnimType = "transition.rotate";
  },
};
</script>

<style>
.slick-list {
  height: 80vh;
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
.slick-arrow.slick-next {
  right: 0;
}
.slick-arrow.slick-prev {
  left: 0;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_portfolio";

.prj-info__num {
  font-size: 5rem !important;
  color: rgba(0, 0, 0, 0.15);
  font-family: $font-eng;
  font-weight: 500;
  line-height: 1.4;
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
  }
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
}
</style>
