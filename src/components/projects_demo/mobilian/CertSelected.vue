<template>
  <div class="m-ini-cert__list cert-select">
    <div class="inner">
      <div class="list">
        <div class="list-inner">
          <div class="icon-box">
            <span class="icon cert1"></span>
          </div>
          <dl class="cert-info">
            <dt>
              <span v-html="$t('mobilian.cert_info_dt_username')"></span>
              <small><b>(TEST)</b></small>
            </dt>
            <dd class="cert-sum">
              <dl>
                <dt>{{ $t("mobilian.cert_info_dt_place") }}</dt>
                <dd>{{ $t("mobilian.cert_info_dd_place") }}</dd>
              </dl>
              <dl>
                <dt>{{ $t("mobilian.cert_info_dt_section") }}</dt>
                <dd>{{ $t("mobilian.cert_info_dd_section") }}</dd>
              </dl>
              <dl>
                <dt>{{ $t("mobilian.cert_info_dt_date") }}</dt>
                <dd>{{ $t("mobilian.cert_info_dd_date") }}</dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
    </div>
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
