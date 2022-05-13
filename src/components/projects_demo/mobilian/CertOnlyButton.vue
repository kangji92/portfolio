<template>
  <div>
    <div class="section-inner">
      <template>
        <div class="m-ini-cert__btns">
          <div class="btns-wrap">
            <router-link to="" custom v-slot="{ navigate }">
              <span
                @click="navigate"
                @keypress.enter="navigate"
                role="link"
                class="btn btn__gray w50p"
                >{{ $t("mobilian.btn_cancel") }}</span
              >
            </router-link>
            <router-link to="" custom v-slot="{ navigate }">
              <span
                @click="navigate"
                @keypress.enter="navigate"
                role="link"
                class="btn btn__blue w50p"
                >{{ $t("mobilian.btn_revoke") }}</span
              >
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mobilian/base/_reset";
@import "@/assets/scss/mobilian/base/_variables";
@import "@/assets/scss/mobilian/base/_breakpoints";
@import "@/assets/scss/common/_mixins";
@import "@/assets/scss/mobilian/_m_certificate";
</style>
