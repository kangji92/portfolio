<template>
  <div class="ini-easyauth-temp">
    <div class="easyauth-inner">
      <!-- PIN -->
      <div class="easyauth-type pin" v-if="isPIN()">
        <div class="inner">
          <div class="form-wrap">
            <input
              type="hidden"
              id="inputPinNumber"
              pattern="[0-9]*"
              maxlength="6"
              inputmode="numeric"
              name="inputPinNumber"
              autocomplete="off"
            />
            <span v-for="(dot, idx) in authPIN" :key="idx" class="input pin">
              <input
                :id="dot.name"
                :ref="dot.name"
                maxlength="1"
                pattern="[0-9]*"
                inputmode="numberic"
                autocomplete="off"
              />
            </span>
          </div>
          <div class="txt-wrap" v-bind="authResultMsg">
            <em v-html="$t('easyauth.pin_msg_ttl_' + authResultMsg.idx)"></em>
            <p
              :class="authResultMsg.type"
              v-html="$t('easyauth.pin_msg_desc_' + authResultMsg.idx)"
            ></p>
          </div>
        </div>
      </div>
      <!-- //PIN -->
      <!-- 생체인증 -->
      <div class="easyauth-type bio" v-else-if="isBIO()">
        <div class="inner">
          <div class="form-wrap">
            <button class="btn-fgp">
              <span class="ico-fingerprint"></span>
            </button>
          </div>
          <div class="txt-wrap" v-bind="authResultMsg">
            <em v-html="$t('easyauth.bio_msg_ttl_' + authResultMsg.idx)"></em>
            <p
              :class="authResultMsg.type"
              v-html="$t('easyauth.bio_msg_desc_' + authResultMsg.idx)"
            ></p>
          </div>
        </div>
      </div>
      <!-- //생체인증 -->
      <div class="easyauth-nav">
        <a
          href="javascript:;"
          ref="tabLast"
          @click="btnClose()"
          class="btn-close"
        ></a>
      </div>
      <!-- 로딩화면 -->
      <div class="easyauth-loading" v-show="isLoading">
        <img
          src="@/assets/images/projects/initech/kdxp/demo/loading.svg"
          alt="로딩중입니다"
        />
      </div>
      <!-- //로딩화면 -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isLoading: false,
      authType: "PIN",
      authResultMsg: {},
      authResultMsgDef: {
        code1: { idx: 1, type: "default" },
        code2: { idx: 2, type: "default" },
        code3: { idx: 3, type: "error" },
        code4: { idx: 4, type: "error" },
        code5: { idx: 5, type: "error" },
      },
      authPIN: [
        { idx: "1", name: "showPIN_1" },
        { idx: "2", name: "showPIN_2" },
        { idx: "3", name: "showPIN_3" },
        { idx: "4", name: "showPIN_4" },
        { idx: "5", name: "showPIN_5" },
        { idx: "6", name: "showPIN_6" },
      ],
    };
  },
  created() {
    this.authResultMsg = this.authResultMsgDef["code1"];
  },
  methods: {
    isPIN() {
      return this.authType === "PIN";
    },
    isBIO() {
      return this.authType === "BIO";
    },
    // 닫기 버튼
    btnClose() {
      //console.log("닫기버튼");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/kdxp/_easyauth_ui";
</style>
