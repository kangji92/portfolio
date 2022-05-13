<template>
  <div>
    <div class="section-inner">
      <!-- 인증서_발급/재발급/갱신 암호입력 폼 -->
      <template v-bind="pwFormType">
        <div class="m-ini-cert__password">
          <div class="inner">
            <div class="input-wrap" v-for="input in inputPw" :key="input.idx">
              <h2 class="ttl">
                {{ $t("mobilian.h2_ttl_" + pwFormType.id + "_" + input.idx) }}
              </h2>
              <div class="input">
                <input
                  type="password"
                  :placeholder="$t('mobilian.placeholder_inputpw')"
                />
              </div>
            </div>
          </div>
        </div>
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
                >{{ $t("mobilian.btn_next") }}</span
              >
            </router-link>
          </div>
        </div>
        <!-- 인증서_발급/재발급/갱신 암호입력 폼 -->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.pwFormType = this.pwFormTypeDef["certChangePwForm"];
  },
  beforeCreate() {
    //window.addEventListener('load', this.setArrLength);
  },
  data: function () {
    return {
      pwFormType: {},
      pwFormTypeDef: {
        certEnterPwForm: {
          // 선택한 인증서 암호입력 폼 (1줄)
          id: "certEnterPw",
        },
        newCertPwForm: {
          // (발급/재발급)새로운 인증서 암호입력 (2줄)
          id: "newCertPw",
        },
        certChangePwForm: {
          // 인증서 암호변경 (3줄)
          id: "certChangePw",
        },
      },

      inputPw: [
        // 발급/재발급
        { idx: 1 },
        { idx: 2 },
        { idx: 3 },
      ],
    };
  },
  mounted() {
    this.initPolicy();
  },

  methods: {
    initPolicy() {
      var param = this.$store.state.policy;
      // sdk 호출 - 정책 설정
      //console.log(param);
      if (param.type) {
        this.pwFormType = this.pwFormTypeDef[param.type];
      }
    },
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
