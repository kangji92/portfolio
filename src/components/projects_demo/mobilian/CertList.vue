<template>
  <div>
    <!-- 인증서 목록 -->
    <!-- 인증서_있을때 -->
    <div class="m-ini-cert__list">
      <div class="inner">
        <div class="list" v-for="(certi, idx) in userCertiList" :key="idx">
          <router-link
            to="/ui/conf/view/mobilian/certEnterPwForm"
            custom
            v-slot="{ navigate }"
          >
            <div
              @click="navigate"
              @keypress.enter="navigate"
              role="link"
              class="link"
            >
              <div class="icon-box">
                <div class="icon" :class="certi.icon_class">
                  <span class="blind">{{
                    $t("mobilian.icon_ir_" + certi.icon_class)
                  }}</span>
                </div>
              </div>
              <dl class="cert-info">
                <dt>
                  <span v-html="$t('mobilian.cert_info_dt_username')"></span>
                  <small><b>(TEST)</b></small>
                </dt>
                <dd class="cert-sum">
                  <dl
                    v-for="row in certInfoList"
                    :key="row.idx"
                    :class="row.dl_class"
                  >
                    <dt>{{ $t("mobilian.cert_info_dt_" + row.caption) }}</dt>
                    <dd>{{ $t("mobilian.cert_info_dd_" + row.caption) }}</dd>
                  </dl>
                  <dl :class="certi.em_class">
                    <dt>{{ $t("mobilian.cert_info_dt_date") }}</dt>
                    <dd>{{ $t("mobilian.cert_info_dd_date") }}</dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 인증서_있을때 -->
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
    <!-- 바로가기_링크(인증서가져오기) -->
  </div>
</template>
<script>
export default {
  methods: {
    clickUserCert() {},
  },
  props: {
    isSelectedCert: Boolean,
  },
  data: function () {
    return {
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
