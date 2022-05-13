<template>
  <div class="ini-mobilian__temp">
    <div class="inner-container" v-bind="pwFormType">
      <div class="header-wrap">
        <header class="sticky">
          <div class="ttl-wrap">
            <h1>{{ $t("mobilian.ttl_" + pwFormType.ttl) }}</h1>
            <a @click="goBack()" class="prev"
              ><span class="blind">이전</span></a
            >
          </div>
        </header>
      </div>
      <CertSelected></CertSelected>
      <CertPwForm :showPwForm="showPwForm"></CertPwForm>
    </div>
  </div>
</template>

<script>
import CertSelected from "@/components/projects_demo/mobilian/CertSelected.vue";
import CertPwForm from "@/components/projects_demo/mobilian/CertPwForm.vue";

export default {
  created() {
    this.pwFormType = this.pwFormTypeDef["certChangePwForm"];
  },
  methods: {
    //뒤로가기
    goBack() {
      this.$router.go(-1);
    },
    initPolicy() {},
  },
  components: {
    CertSelected,
    CertPwForm,
  },
  props: {},

  data: function () {
    return {
      showPwForm: "",
      pwFormType: [],
      pwFormTypeDef: {
        certEnterPwForm: {
          // 공동인증서_로그인_암호입력
          ttl: "CertPublicLogin",
        },
        certRenewPwForm: {
          // 인증서 갱신화면
          ttl: "CertRenew",
        },
        certRevokePwForm: {
          // 인증서 폐기화면
          ttl: "CertRevoke",
        },
        newCertPwForm: {
          // 인증서 발급/재발급_암호입력
          ttl: "CertIssue",
        },
        certChangePwForm: {
          // 인증서 암호변경
          ttl: "CertChangePw",
        },
      },
    };
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
