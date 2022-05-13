<template>
  <!-- 3_인증서_정보화면 -->
  <div class="ini-mobilian__temp">
    <div class="inner-container">
      <div class="header-wrap">
        <header class="sticky">
          <div class="ttl-wrap">
            <h1>{{ $t("mobilian.ttl_CertManagement") }}</h1>
            <a @click="goBack()" class="prev"
              ><span class="blind">이전</span></a
            >
          </div>
        </header>
      </div>
      <CertSelected></CertSelected>
      <CertInfo></CertInfo>
    </div>
  </div>
</template>

<script>
import CertSelected from "@/components/projects_demo/mobilian/CertSelected.vue";
import CertInfo from "@/components/projects_demo/mobilian/CertInfo.vue";

export default {
  methods: {
    //뒤로가기
    goBack() {
      this.$router.go(-1);
    },
  },
  props: {
    isSelectedCert: Boolean,
    name: String,
  },
  data: function () {
    return {};
  },

  components: {
    //MobilianHeader,
    CertSelected,
    CertInfo,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mobilian/base/_reset";
@import "@/assets/scss/mobilian/base/_variables";
@import "@/assets/scss/mobilian/base/_breakpoints";
@import "@/assets/scss/common/_mixins";
@import "@/assets/scss/mobilian/_m_common";
@import "@/assets/scss/mobilian/_m_certificate";
header {
  text-align: center;
  background: $main-color-blue;
  .ttl-wrap {
    position: relative;
    max-width: 720px;
    margin: 0 auto;
  }

  h1 {
    padding: 0.8rem 0;
    font-size: 1.4em;
    font-size: 1.225rem;
    font-weight: normal;
    color: #fff;
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  a.prev {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 14vw;
    width: 12.08vw;
    max-width: 50px;
    height: 100%;
    outline: none;
    @include respond-to("bp-max-800") {
      max-width: auto;
    }
    @include display-flex {
      align-items: checkAlign(center);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 14vw;
      max-height: 50px;
      background: url("~@/assets/images/projects/initech/mobilian/demo/dum_btn_prev.png")
        center center no-repeat;
      background-size: 100%;
      @include respond-to("bp-max-800") {
        max-height: auto;
      }
    }
  }
}
</style>
