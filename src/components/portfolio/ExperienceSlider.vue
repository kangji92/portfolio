<template>
  <div class="experience-inner">
    <div class="ttl">
      <h3>Experience</h3>
      <p>7년차</p>
    </div>
    <VueSlickCarousel
      :vertical="true"
      :autoplay="false"
      :arrows="true"
      :dots="false"
    >
      <div class="terms-group">
        <div class="terms" v-for="term in termList" :key="term.idx">
          <dl>
            <dt>
              <p>{{ $t("experience.term_" + term.name) }}</p>
            </dt>
            <dd>
              <em>{{ $t("experience.name_" + term.name) }}</em>
              <p>{{ $t("experience.ttl_" + term.name) }}</p>
              <p>{{ $t("experience.subttl_" + term.name) }}</p>
              <span v-html="$t('experience.desc_' + term.name)"></span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="terms-group">
        <div class="terms" v-for="term in termList2" :key="term.idx">
          <dl>
            <dt>
              <p>{{ $t("experience.term_" + term.name) }}</p>
            </dt>
            <dd>
              <em>{{ $t("experience.name_" + term.name) }}</em>
              <p>{{ $t("experience.ttl_" + term.name) }}</p>
              <p>{{ $t("experience.subttl_" + term.name) }}</p>
              <span v-html="$t('experience.desc_' + term.name)"></span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="terms-group">
        <div class="terms" v-for="term in termList3" :key="term.idx">
          <dl>
            <dt>
              <p>{{ $t("experience.term_" + term.name) }}</p>
            </dt>
            <dd>
              <em>{{ $t("experience.name_" + term.name) }}</em>
              <p>{{ $t("experience.ttl_" + term.name) }}</p>
              <p>{{ $t("experience.subttl_" + term.name) }}</p>
              <span v-html="$t('experience.desc_' + term.name)"></span>
            </dd>
          </dl>
        </div>
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
      termList: [
        {
          idx: 1,
          name: "initech",
        },
        {
          idx: 2,
          name: "inov",
        },
      ],
      termList2: [
        {
          idx: 3,
          name: "snbcorp",
        },
        {
          idx: 4,
          name: "erbario",
        },
        {
          idx: 5,
          name: "wellpot",
        },
        {
          idx: 6,
          name: "squareplanet",
        },
      ],
      termList3: [
        {
          idx: 6,
          name: "squareplanet",
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
    height: 72vh;
    //height: 100%;
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
          line-height: 1.4em;
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
