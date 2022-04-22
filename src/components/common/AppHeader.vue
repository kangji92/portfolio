<template>
  <div>
    <nav class="gnb">
      <div class="gnb-inner">
        <h1 class="logo">LOGO</h1>
        <!--
        <template v-if="isPageType">
          <div></div>
        </template>
        <template v-esle>
          <ul class="navigation">
            <router-link tag="li" to="/">Home</router-link>
            <router-link tag="li" to="/portfolio#page1">About</router-link>
            <router-link tag="li" to="/portfolio#page2">Experience</router-link>
            <router-link tag="li" to="/portfolio#page3">Education</router-link>
            <router-link tag="li" to="/projects">Projects</router-link>
            <router-link tag="li" to="/blog">Blog</router-link>
            <router-link tag="li" to="/reference">Reference</router-link>
           <router-link  v-for="nav in navigation" :key="nav.idx" :to="'/' + nav.path">{{ nav.id }}</router-link>
          </ul>
        </template>-->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPageType: "",
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main";
.gnb {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  height: 80px;
  z-index: 10000;
  .gnb-inner {
    width: calc(100% - 40px);
    margin: auto;
    height: 80px;
    @include respond-to("bp-tablet-820") {
      // 820
      width: calc(100% - 6vw);
      height: 12.5vw;
    }
    @include display-flex {
      align-items: checkAlign(center);
      justify-content: getJustify(sb);
    }

    h1.logo {
      color: transparent;
      font-size: 0;
      width: 48px;
      height: 48px;
      background: url("~@/assets/images/logo_kangji.png") no-repeat center
        center;
      background-size: 48px;
      @include respond-to("bp-max-820") {
        width: 8vw;
        height: 8vw;
        background-size: 8vw;
      }
      @include display-flex {
        justify-content: getJustify(fs);
      }
    }
    .navigation {
      li {
        float: left;
        @include clearfix;
        padding: 0 16px;
        font-size: 24px;
        font-family: "MontserratL";
        a {
          display: block;
        }
      }
    }
    .trigger {
      display: none;
    }
  }
}
</style>
