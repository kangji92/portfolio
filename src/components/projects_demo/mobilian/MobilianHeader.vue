<template>
  <!-- MobilianWeb -->
  <div class="header-wrap">
    <header class="sticky" v-bind="currentView">
      <div class="ttl-wrap">
        <!--
                <h1>{{ $t('mobilian.ttl_' + currentView.name,{pageName:currentView.name}) }} </h1>-->
        <h1>{{ $t("mobilian.ttl_" + currentView.name) }}</h1>
        <a @click="goBack()" class="prev"><span class="blind">이전</span></a>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  created() {
    this.currentView = this.currentViewDef["CertPublicLogin"];
  },
  methods: {
    //뒤로가기
    goBack() {
      this.$router.go(-1);
    },
    initPolicy() {
      var param = this.$store.state.policy;
      //console.log(param);
      if (typeof param !== "object") {
        // 오류 메시지 띄우기
        this.showPopupDlg("error", "errorPop1");
        //reject();
        return;
      }

      if (param.type) {
        this.currentView = this.currentViewDef[param.type];
      }
    },
  },

  data: function () {
    return {
      currentView: {},
      currentViewDef: {
        CertManagement: {
          // 인증서관리
          name: "CertManagement",
        },
        CertPublicLogin: {
          // 공동인증서
          name: "CertPublicLogin",
        },
        CertIssue: {
          // 인증서발급
          name: "CertIssue",
        },
        CertManage: {
          name: "CertManage",
        },
        CertRenew: {
          // 인증서갱신
          name: "CertRenew",
        },
        CertRevoke: {
          // 인증서삭제
          name: "CertRevoke",
        },
        CertExport: {
          // 인증서내보내기
          name: "CertExport",
        },
        CertImport: {
          // 인증서가져오기
          name: "CertImport",
        },
        CertChangePw: {
          // 인증서암호변경
          name: "CertChangePw",
        },
        ElectSignature: {
          // 전자서명
          name: "ElectSignature",
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
@import "@/assets/scss/mobilian/_m_certificate";
</style>
