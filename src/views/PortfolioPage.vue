<template>
  <div class="portfolio-main">
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section">
        <div class="inner">
          <div class="ttl-group">
            <h2>
              Web Publisher<br />
              <em><b>Kang</b> JI Yeon</em>
            </h2>
            <p>개인 포트폴리오 사이트입니다</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="content desc">
          <div class="desc-inner">
            <h3>UX/UI Development</h3>
            <ul class="item-group">
              <li>
                <h4>Mark up</h4>
                <p>
                  웹표준을 바탕으로 컨텐츠 내용에 알맞은 시멘틱 마크업을
                  작성합니다. 검색엔진 최적화를 통해 사용자들에게 더많은 접근할
                  수 있도록 합니다.
                  <br />크로스브라우징 이슈에 대한 다양한 해결방법을 공부하고
                  적용합니다.
                </p>
              </li>
              <li>
                <h4>Style Sheets</h4>
                <p>
                  효율적이고 유지보수를 고려하여 CSS를 작성합니다. Sass(scss)
                  프로세싱을 사용하여 CSS 확장 기능을 활용합니다.
                </p>
              </li>
              <li>
                <h4>Javascript</h4>
                <p>
                  자바스크립트의 기본 문법을 이해하고 활용합니다.<br />
                  라이브러리, 플러그인을 적용하거나 <br />
                  구조를 분석하여 원하는 용도로 수정할 수 있습니다.
                  <br />Vue.js 등의 자바스크립트 기반 프레임워크를 다룰 수
                  있습니다.
                </p>
              </li>
              <li>
                <h4>Colaboration Tool</h4>
                <p>
                  디자이너, 개발자와 원할한 협업을 끌어내기 위해 노력합니다.
                  Git, Bitbucket, Zeplin, Sourcetree 등 협업을 위한 툴을
                  사용합니다.
                </p>
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
        <div class="content about">
          <div class="about-inner">
            <div class="txt-group">
              <em>日日新又日新</em>
              <p>끊임없이 보다 나은 사람이 되자</p>
            </div>
            <span
              >웹퍼블리셔 강지연입니다. <br />
              저 자신을 발전시키기 위해 시간과 노력을 아끼지 않겠습니다.</span
            >
          </div>
        </div>
      </section>
    </full-page>
  </div>
</template>
<script>
import Vue from "vue";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import VueFullPage from "vue-fullpage.js";
import ProjectSlider from "@/components/portfolio/ProjectSlider.vue";

Vue.use(VueFullPage);
export default {
  components: {
    ProjectSlider,
  },
  data() {
    return {
      offsets: [],
      idx: 0,
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
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_portfolio";

.portfolio-main {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: $font-eng;
  .inner {
    margin-left: 40px;
  }
  .ttl-group {
    position: absolute;
    top: 39%;
    h2 {
      font-size: 62px;
      text-align: left;
      color: #000;
      margin: 0;
      letter-spacing: -0.05em;
      font-weight: 300;
      @include respond-to("bp-tablet-820") {
        // 820
        font-size: 58px;
      }
      @include respond-to("bp-mobile-600") {
        // 600
        font-size: 10vw;
      }

      em {
        b {
          font-weight: 500;
        }
      }
    }
    p {
      font-family: $font-kr;
      font-size: 22px;
      margin-top: 30px;
    }
  }
}
.indicator-wrap {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  .indicator {
    display: block;
    width: 12px;
    height: 12px;
    background-color: #333;
    border-radius: 12px;
    display: block;
    margin: 1rem 0;
    opacity: 0.6;
    transition: 0.4s ease all;
    cursor: pointer;
    &.active {
      opacity: 1;
      transform: scale(1.5);
    }
  }
}
.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #fff;
  display: block;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.hiring-heading {
  position: absolute;
  top: 50px;
  left: 5%;
  left: 0;
  width: 100%;
  //transform: translate(-50%, -50%);
  //text-align: left;
}

.section {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #fef8ee;
  .ttl-group {
    text-align: left;
    letter-spacing: -0.01em;
    h3 {
      font-family: $font-eng;

      font-size: 2.5rem;
      font-size: 44px;
      em {
        font-family: $font-eng;

        b {
          font-family: $font-eng;
          font-weight: 600;
        }
      }
    }
  }
  .content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    margin-top: 80px;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid #ddd;
    overflow: hidden;
    @include prefix(box-sizing, border-box);
    .intro-inner,
    .about-inner,
    .desc-inner,
    .project-inner,
    .plan-inner {
      height: 100%;
      background-color: #fef8ee;
    }
    .project-inner {
      background: #fff;
      background: #fef8ee; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        #fef8ee,
        #fff
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        #fef8ee,
        #fff
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .intro-inner {
      position: absolute;
      width: 100%;
      top: 38%;
      left: 40px;
      height: auto;
      @include respond-to("bp-tablet-820") {
        // 820
        left: 5%;
      }
      @include translateY(-50%);
      .ttl-group {
        h2 {
          font-size: 62px;
          text-align: left;
          margin: 0;
          letter-spacing: -0.05em;
          font-family: $font-eng;
          font-weight: 300;
          @include respond-to("bp-tablet-820") {
            // 820
            font-size: 58px;
          }
          @include respond-to("bp-mobile-600") {
            // 600
            font-size: 10vw;
          }
          em {
            b {
              font-family: $font-eng;
              font-weight: 500;
            }
          }
        }
        p {
          display: block;
          margin-top: 30px;
          font-size: 28px;
          font-family: $font-kr;
          @include respond-to("bp-mobile-600") {
            // 600
            font-size: 4.67vw;
            margin-top: 5vw;
          }
        }
      }
    }

    .about-inner {
      margin-top: 15%;
      .txt-group {
        position: relative;
        text-align: center;
        letter-spacing: 0.1em;
        &::after {
          content: "";
          width: 1px;
          height: 80px;
          background: $color-def;
          display: block;
          position: absolute;
          left: 50%;
          top: 180%;
          //@include respond-to("bp-max-1366") {
          //  height: 5vw;
          //  top: 7.5vw;
          //}
          //@include respond-to("bp-max-820") {
          //  display: none;
          //}
        }
        em {
          font-size: 48px;
          display: block;
          font-family: $font-kr;

          text-align: center;
          margin-bottom: 10px;
          line-height: 1.25em;
        }
        p {
          font-size: 28px;
          font-family: $font-kr;
          font-weight: 300;
          text-align: center;
        }
      }
      span {
        font-size: 28px;
        font-family: $font-kr;
        font-weight: 300;
        display: block;
        margin-top: 10%;
        line-height: 1.25em;
        text-align: center;
      }
    }

    .desc-inner {
      max-width: 1400px;
      margin: 0 auto;
      margin-top: 10%;
      position: relative;

      @include respond-to("bp-landscape-1440") {
        // 1440
        width: calc(100% - 10%);
        margin-top: 8%;
      }
      @include respond-to("bp-tablet-820") {
        // 820

        margin-top: 10%;
      }

      h3 {
        font-size: 40px;
        font-family: $font-eng;
        @include respond-to("bp-mobile-600") {
          // 600
          font-size: 6vw;
        }
      }
      .item-group {
        margin-top: 15%;
        @include respond-to("bp-landscape-1440") {
          margin-top: 13vw;
        }
        &::before {
          content: "";
          display: block;
          width: 1px;
          height: 86px;
          background: #707070;
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          @include respond-to("bp-landscape-1440") {
            height: 5vw;
            top: 5.4vw;
          }
          @include respond-to("bp-tablet-820") {
            display: none;
          }
        }
        li {
          float: left;
          width: 46%;
          height: 220px;

          &:nth-child(1),
          &:nth-child(3) {
            margin-right: 5%;
          }
          @include respond-to("bp-landscape-1440") {
            // 1440
            font-size: 1.45vw;
            height: 15vw;
          }
          @include respond-to("bp-landscape-1024") {
            // 1024px
            //width: 100%;
            // height: auto;
            //margin-bottom: 4%;
          }
          @include respond-to("bp-tablet-820") {
            // 820
            width: 100%;
            height: auto;
            margin-bottom: 5%;
          }

          h4 {
            font-size: 28px;
            text-align: left;
            font-family: $font-eng;
            line-height: 1.5em;
            @include respond-to("bp-landscape-1440") {
              // 1440
              font-size: 1.944445vw;
            }
            @include respond-to("bp-landscape-1024") {
              // 1024
              font-size: 2.734375vw;
            }
          }
          p {
            font-size: 22px;
            margin-top: 6px;
            text-align: left;
            font-family: $font-kr;
            font-weight: 300;
            line-height: 1.3em;
            @include respond-to("bp-landscape-1440") {
              // 1440
              font-size: 1.45vw;
            }
            @include respond-to("bp-tablet-820") {
              // 820
              font-size: 2vw;
            }
          }
          .tool-list {
            margin-top: 20px;
            width: 456px;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }

    .experience-inner {
      width: 1600px;
      margin: 0 auto;
      margin-top: 5%;
      text-align: left;
      .ttl {
        float: left;
        width: 240px;
        position: relative;
        h3 {
          font-size: 40px;
          text-align: left;
          font-family: $font-eng;
          font-weight: 300;
          position: relative;
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
        }
      }

      .terms-group {
        float: right;
        width: 80%;
        height: 80vh;
        overflow: hidden;
        dl {
          display: block;
          width: 100%;
          font-family: $font-kr;
          font-weight: 300;
          dt {
            float: left;
            width: 25%;
            font-size: 28px;
            margin-top: 30px;
          }
          dd {
            width: 70%;
            float: left;
            margin-top: 30px;
            span {
              display: block;
            }
            em {
              font-size: 28px;
              padding-bottom: 12px;
            }

            p {
              padding: 10px 0;
              font-size: 22px;
              line-height: 1.3em;
            }
            span {
              font-size: 20px;
              line-height: 1.3em;
            }
          }
          dt + dd {
            margin-left: 5%;
          }
        }
      }
      .terms-group:first-child {
        position: relative;
        &::before {
          content: "...";
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
    .education-inner {
      width: 1600px;
      margin: 0 auto;
      margin-top: 5%;
      text-align: left;
      .ttl {
        //float: left;
        width: 100%;
        position: relative;
        h3 {
          font-size: 40px;
          text-align: center;
          font-family: $font-eng;
          font-weight: 300;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 85px;
            height: 1px;
            background: #707070;
            position: absolute;
            top: 200%;
            left: 0;
          }
        }
        p {
          margin-top: 25%;
          color: #999;
          font-size: 20px;
          font-family: $font-kr;
          font-weight: 300;
        }
      }

      .terms-group {
        float: right;
        width: 80%;
        height: 80vh;
        overflow: hidden;
        dl {
          display: block;
          width: 100%;
          font-family: $font-kr;
          font-weight: 300;
          dt {
            float: left;
            width: 25%;
            font-size: 28px;
            margin-top: 30px;
          }
          dd {
            width: 70%;
            float: left;
            margin-top: 30px;
            span {
              display: block;
            }
            em {
              font-size: 28px;
              padding-bottom: 12px;
            }

            p {
              padding: 10px 0;
              font-size: 22px;
              line-height: 1.3em;
            }
            span {
              font-size: 20px;
              line-height: 1.3em;
            }
          }
          dt + dd {
            margin-left: 5%;
          }
        }
      }
      .terms-group:first-child {
        position: relative;
        &::before {
          content: "...";
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
    .project-inner {
      .tabs {
        height: 100%;
        width: 300%;
        transition: 0.5s;
        .tab {
          height: 100%;
          float: left;
          width: 33.333333%;
          div {
            height: 100%;
            float: left;
          }
        }
      }
      .project-info {
        float: left;
        padding: 50px;
        position: relative;
        width: 560px;
        height: 715px;
        color: $txt-def;
        margin-left: 120px;
        margin-top: 5%;
        text-align: left;
        .btn-wrap {
          margin-top: 10%;
          .link {
            width: 211px;
            height: 60px;
            border-radius: calc(60px * 0.5);
            font-size: 28px;
            display: block;
            text-align: center;
            border: 1px solid #707070;
            @include display-flex {
              justify-content: getJustify(center);
              align-items: checkAlign(center);
            }
            color: $txt-def;
            font-family: $font-eng;
            font-weight: 300;
            &:hover {
              transition: 0.3s;
              background: #333;
              color: #fff;
            }
          }
        }

        &:before {
          content: attr(data-text);
          font-size: 130px;
          color: $txt-def;
          position: absolute;
          top: -10px;
          left: 10px;
        }
        h3 {
          position: relative;
          font-size: 32px;
          color: $txt-def;
          font-family: $font-kr;

          position: relative;
        }
        .project__sub-ttl {
          position: relative;
          font-size: 24px;
          padding-top: 16px;
          line-height: 1.3;
          margin-bottom: 10%;
        }
        dl {
          line-height: 1.5em;
          //margin: 30px 0;
          dt {
            display: inline-block;
            padding-right: 10px;
            font-size: 18px;
            font-family: $font-eng;
            font-weight: 300;
            color: $txt-def;
            // b {}
          }
          dd {
            display: inline-block;
            font-size: 18px;
            font-family: $font-eng;
            font-weight: 300;
            letter-spacing: normal;
            color: $txt-def;
          }
          li:before {
            //content:"\f105";
            font-family: fontawesome;
            margin-right: 10px;
          }
        }
      }
      .project__num {
        font-size: 5rem !important;
        color: rgba(0, 0, 0, 0.15);
        font-family: $font-eng;
        font-weight: 500;
        line-height: 1.4;
      }

      .btn {
        position: absolute;
        left: 0;
        bottom: 30px;
        width: 25%;
        text-align: center;
      }
      .btn label {
        cursor: pointer;
        width: 5px;
        height: 5px;
        background-color: #000;
        display: inline-block;
        border-radius: 50%;
        margin: 8px;
        position: relative;
      }
      .btn label:before {
        content: "";
        display: inline-block;
        border: 1px solid transparent;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        position: absolute;
        left: -6px;
        top: -6px;
        transition: 0.3s;
      }
    }
    .slick-list {
      width: 80%;
    }
    .slick-track > div {
      .project-photo {
        position: relative;
        //width: calc;
        margin-top: 140px;
        height: 715px;
      }
    }

    .plan-inner {
      .plan-heading hr.bar,
      .history-info hr.bar {
        background-color: dodgerblue;
        display: inline-block;
      }
      .plan-heading,
      .history-info {
        width: 70%;
        padding-right: 50px;
        text-align: left;
        h2 {
          font-size: 2.6rem;
          text-align: left;
          color: #000;
          margin: 0;
        }
        p {
          font-size: 16px;
          line-height: 1.6em;
          text-align: left;
        }
      }
      .history-info {
        width: 100%;
        .work-list {
          margin-top: 16px;
          li {
            line-height: 1.3;
          }
        }
      }
      .plan-info > div {
        float: left;
      }
      .plan-feature {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        div {
          height: 300px;
          color: #bbb;
        }
      }
      .history-slider {
        div {
          text-align: left;
          h4 {
            color: #000;
            font-size: 20px;
            font-weight: normal;
            margin: 0;
            text-align: left;
            line-height: 1.5em;
            span {
              color: $color-def;
            }
          }
          p {
            text-align: left;
            font-size: 16px;
            line-height: 1.5em;
          }
        }
      }
    }
  }
}
</style>
