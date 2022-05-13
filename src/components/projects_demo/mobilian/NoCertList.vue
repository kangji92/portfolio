<template>
  <div>
    <!-- 인증서_목록없음 -->
    <div class="m-ini-cert__list">
      <div class="inner">
        <div class="icon-box no-cert">
          <span class="icon cert4"></span>
          <p>{{ $t("mobilian.noti_nocert") }}</p>
        </div>
      </div>
    </div>
    <!-- //인증서_목록없음 -->
    <!-- 바로가기_링크(인증서가져오기) -->
    <div class="m-ini-cert__more">
      <div class="inner">
        <router-link
          to="/ui/conf/view/mobilian/certImport"
          custom
          v-slot="{ navigate }"
        >
          <span
            @click="navigate"
            @keypress.enter="navigate"
            role="link"
            class="link"
            v-html="$t('mobilian.cert_more_notice')"
          ></span>
        </router-link>
      </div>
    </div>
    <!-- //바로가기_링크(인증서가져오기) -->
  </div>
</template>
<script>
export default {
  methods: {
    clickUserCert() {
      /*  if() {
                    // 로그인 일때 암호입력화면으로 이동 
                } else {
                    // 인증서 관리일때
                    this.isSelectedCert= true;
                }
            */
    },
  },
  data: function () {
    return {
      isSelectedCert: false,
      isNoCertList: false,
      userCertiList: [
        {
          // 정상
          idx: "1",
          icon_class: "cert1",
        },
        {
          // 기한임박
          idx: "2",
          icon_class: "cert2",
          em_class: "font-color-orange",
        },
        {
          // 기한만료
          idx: "3",
          icon_class: "cert3",
          em_class: "font-color-red",
        },
      ],
      certInfoList: [{ caption: "place" }, { caption: "section" }],
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
