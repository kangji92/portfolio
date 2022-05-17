<template>
  <div class="experience-inner">
    <div class="ttl">
      <h3>Experience</h3>
      <p>6년차 웹퍼블리셔</p>
    </div>
    <VueSlickCarousel
      :vertical="true"
      :autoplay="false"
      :arrows="true"
      :dots="false"
      v-bind="settings"
    >
      <div class="terms-group">
        <dl>
          <dt>
            <p>2019.09.16 ~ 재직중</p>
          </dt>
          <dd>
            <em>이니텍(주)</em>
            <p>KT그룹사 / 보안사업본부 솔루션지원팀 UX/UI 파트</p>
            <p>· 보안솔루션 제품 UX/UI 개발 및 고도화</p>
            <span>
              - 경동택배 간편인증시스템 UX/UI 개발<br />
              - 신제품 이니허브(통합인증플랫폼) UX/UI 개발 및 고도화<br />
              - 교보생명 통합인증센터 구축<br />
              - 한국캐피탈 통합인증센터 구축<br />
              - 수협은행 2Factor인증 UX/UI 고도화 SSO제품(Nextro) <br />
              - PKI제품_모바일공인인증(Mobilian) 고도화<br />
              - PKI / SSO 제품 데모사이트 구축<br />
              - (구)인증사업본부 내 공인인증서 이니패스 운영/유지보수 퍼블리싱
            </span>
          </dd>
        </dl>
        <dl>
          <dt>
            <p>2019.02 ~ 2019.06 (4M)</p>
          </dt>
          <dd>
            <em>이노브 </em>
            <p>온라인사업부 개발팀</p>
            <p>· 롯데백화점 통합 앱 운영 및 유지보수</p>
            <span> - 백화점 통합앱(PC/MobiliWeb/APP) 수정,추가 퍼블리싱 </span>
            <span> - 이벤트존 템플릿화 퍼블리싱</span>
          </dd>
        </dl>
        <dl>
          <dt>
            <p>2017.11 ~ 2018.12 (1Y)</p>
          </dt>
          <dd>
            <em>단기 프로젝트</em>
            <p>1. '에르바리오 토스카노' 쇼핑몰 리뉴얼</p>
            <span>
              - 카페24 쇼핑몰형 (스마트디자인) 플랫폼 제공 모듈을 활용한
              퍼블리싱<br />
              - 기능개선 및 이슈처리 사항 업데이트</span
            >
            <p>2. 'SNB 코퍼레이션' 의료기기 법인기업사이트 리뉴얼</p>
            <span>
              - 카페24 빌드형 플랫폼을 활용한 웹퍼블리싱<br />
              - 기획/디자인 참여<br />
              - 기능개선 및 이슈처리 사항 업데이트
            </span>
            <p>3. 중고자동차 사이트리뉴얼</p>
            <span> - Naver카페 사이트 리뉴얼<br /> </span>
          </dd>
        </dl>
      </div>
      <div class="terms-group">
        <dl>
          <dt>
            <p>2015.04 ~ 2017.04 (2Y)</p>
          </dt>
          <dd>
            <em>한국웰포트 </em>
            <p>· 쇼핑몰 웹사이트 구축 및 운영</p>
            <span>
              - UI 디자인 / 웹퍼블리싱<br />
              - 카페24 쇼핑몰형 (스마트디자인) 플랫폼<br />
              - 카페24 제공 모듈리스트 활용한 퍼블리싱 (html5/CSS/jQuery)<br />
              - 제품 상세페이지 디자인 <br />
              - 기능개선 및 이슈처리 사항 업데이트</span
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <p>2013.03 ~ 2015.04 (2Y)</p>
          </dt>
          <dd>
            <em>스퀘어플래닛 </em>
            <p>· 쇼핑몰 웹사이트 리뉴얼 및 운영</p>
            <span> - UI 디자인 / 퍼블리싱 </span>
          </dd>
        </dl>
      </div>
    </VueSlickCarousel>
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
        //dotsClass: "slick-dots",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: false,
        // autoplaySpeed	: 3000
      },
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
.experience-inner .stop-scrolling {
  height: 100%;
  overflow: hidden;
}
.experience-inner .slick-list {
  height: 80vh;
  float: right;
  width: 75%;
  top: 50px;
}
.experience-inner .slick-track {
}
.experience-inner .slick-dots {
  margin-top: 100px;
  display: none;
}

.experience-inner .slick-dots li {
  display: inline-block;
  margin: 0.5rem;
}
.experience-inner .slick-dots li button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #000;
  opacity: 0.5;
  font-size: 0;
  border: none;
  cursor: pointer;
}
.experience-inner .slick-dots li.slick-active button {
  opacity: 1;
}
.experience-inner .slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.experience-inner .slick-arrow.slick-prev {
  text-indent: -9999px;
  width: 48px;
  height: 48px;
  left: 10px;
  z-index: 1000000;
  background: url("~@/assets/images/ico_prev.png") center center no-repeat;
  background-size: 100%;
  transform: rotate(90deg);
  opacity: 0.3;
  left: 50%;
  top: -20px;
}
.experience-inner .slick-arrow.slick-next {
  text-indent: -9999px;
  width: 48px;
  height: 48px;
  right: 10px;
  background: url("~@/assets/images/ico_next.png") center center no-repeat;
  background-size: 100%;
  transform: rotate(90deg);
  opacity: 0.4;
  left: 50%;
  top: 770px;
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
  .experience-inner .slick-list {
    height: 80vh;
    float: right;
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_portfolio-main";

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

.experience-inner {
  width: 1600px;
  margin: 0 auto;
  padding-top: 5%;
  text-align: left;
  height: calc(100% - 5%);
  @include respond-to("bp-max-820") {
    width: 80%;
    padding: 15vw 0;
    height: calc(100% - 30vw);
  }
  .ttl {
    float: left;
    width: 240px;
    position: relative;
    @include respond-to("bp-max-820") {
      width: 100%;
    }
    h3 {
      font-size: 40px;
      text-align: left;
      font-family: $font-eng;
      font-weight: 300;
      position: relative;
      @include respond-to("bp-landscape-1024") {
      }
      @include respond-to("bp-tablet-820") {
        // 820
        font-size: 3vw;
      }
      &::after {
        content: "";
        display: block;
        width: 85px;
        height: 1px;
        background: #707070;
        position: absolute;
        top: 200%;
        left: 0;
        @include respond-to("bp-max-1366") {
          height: 5vw;
          top: 7.5vw;
        }
        @include respond-to("bp-tablet-820") {
          // 820
          display: none;
        }
      }
    }
    p {
      margin-top: 25%;
      color: #999;
      font-size: 20px;
      font-family: $font-kr;
      font-weight: 300;
      @include respond-to("bp-max-820") {
        margin-top: 5%;
      }
    }
  }
  .terms-group {
    float: right;
    width: 80%;
    height: 70vh;
    @include respond-to("bp-max-820") {
      height: 70vh;
    }
    overflow: hidden;

    dl {
      display: block;
      width: 100%;
      font-family: $font-kr;
      font-weight: 300;
      dt {
        float: left;
        width: 25%;
        font-size: 24px;
        margin-top: 30px;
        @include respond-to("bp-max-820") {
          width: 100%;
          font-size: 2.5vw;
        }
      }
      dd {
        width: 70%;
        float: left;
        margin-top: 30px;
        @include respond-to("bp-max-820") {
          width: 100%;
        }
        span {
          display: block;
        }
        em {
          font-size: 24px;
          padding-bottom: 12px;
          @include respond-to("bp-max-820") {
            font-size: 2.5vw;
          }
        }

        p {
          padding: 10px 0;
          font-size: 20px;
          line-height: 1.3em;
          @include respond-to("bp-max-820") {
            font-size: 2vw;
          }
        }
        span {
          font-size: 18px;
          line-height: 1.3em;
          @include respond-to("bp-max-820") {
            font-size: 1.8vw;
          }
        }
      }
      dt + dd {
        margin-left: 5%;
        @include respond-to("bp-max-820") {
          margin-left: 0;
        }
      }
    }
  }
  .terms-group:first-child {
    position: relative;
    &::before {
      // content: "...";
      display: block;
      height: 10px;
      width: 50px;
      font-size: 40px;
      left: 50%;
      position: absolute;
      top: 80%;
    }
  }
}
</style>
