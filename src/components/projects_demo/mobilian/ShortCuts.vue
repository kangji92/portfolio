<template>
  <div>
    <!-- 바로가기_링크(인증서관리) -->
    <div class="m-ini-cert__shortcuts">
      <div class="inner">
        <router-link
          to="/ui/conf/view/mobilian/manage/noCert"
          custom
          v-slot="{ navigate }"
        >
          <span
            @click="navigate"
            @keypress.enter="navigate"
            role="link"
            class="link"
            v-html="$t('mobilian.cert_shortcuts')"
          ></span>
        </router-link>
      </div>
    </div>
    <!-- //바로가기_링크(인증서관리) -->
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
    return {};
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
