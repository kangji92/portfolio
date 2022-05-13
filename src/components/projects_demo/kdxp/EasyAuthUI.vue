<template>
  <div class="ini-easyauth-ui">
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
            <!--
                <span class="input pin">
                <input maxlength="1" pattern="[0-9]*" inputmode="numberic" autocomplete='off'>
                </span>
                <span class="input pin">
                <input maxlength="1" pattern="[0-9]*"  inputmode="numberic" autocomplete='off'>
                </span>
                <span class="input pin">
                <input maxlength="1" pattern="[0-9]*" inputmode="numberic" autocomplete='off'>
                </span>
                <span class="input pin">
                <input maxlength="1"  pattern="[0-9]*" inputmode="numberic" autocomplete='off'>
                </span>
                <span class="input pin">
                <input maxlength="1" pattern="[0-9]*" inputmode="numberic" autocomplete='off'>
                </span>-->
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
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      authType: "BIO",
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
@import "@/assets/scss/base/reset";
@import "@/assets/scss/base/fonts";
@import "@/assets/scss/base/breakpoints";
@import "@/assets/scss/base/mixins";

.ini-easyauth-ui {
  font-family: "NotoM";
  width: 100%;
  height: 100%;
  min-height: 472px;
  .easyauth-inner {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 472px;
    background: #2b40ab;
  }
  .easyauth-nav {
    .btn-close {
      width: 24px;
      height: 24px;
      background: url("~@/assets/images/projects/initech/kdxp/ico_close_off.svg")
        center center no-repeat;
      background-size: 100%;
      position: absolute;
      top: 22px;
      right: 15px;
    }
  }
  .easyauth-type {
    .inner {
      width: 300px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      @include respond-to("bp-max-319") {
        width: 260px;
      }
    }
    .txt-wrap {
      position: relative;
      width: 100%;
      color: #fff;
      text-align: center;
      em {
        font-size: 1.5rem;
        line-height: 1;
        letter-spacing: -1.73px;
        @include respond-to("bp-max-319") {
          font-size: 1.4rem;
        }
      }
      p {
        margin-top: 10px;
        font-size: 1rem;
        letter-spacing: -1px;
        line-height: 1.2;
        font-family: "NotoR";
        @include respond-to("bp-max-319") {
          font-size: 0.9rem;
        }
      }
      p.error {
        color: #ff9090;
        line-height: 1.2;
        letter-spacing: -1px;
      }
    }
    &.pin {
      .form-wrap {
        width: 272px;
        margin: 0 auto;
        padding-top: 45%;
        @include display-flex {
          justify-content: getJustify(center);
        }
        @include respond-to("bp-min-376") {
          //padding-top: 40%;
        }
        @include respond-to("bp-max-319") {
          width: 258px;
        }
        .input {
          width: 42px;
          height: 42px;
          float: left;
          background: #fff;
          border-radius: 8px;
          @include respond-to("bp-max-319") {
            width: 36px;
            height: 36px;
          }
          input {
            @include prefix(
              appearance,
              none
            ); /* 브라우저별 
              기본 스타일링 제거 */
            @include prefix(box-sizing, border-box);
            border-radius: 0; /* iSO 둥근모서리 제거 */
            font-family: "password";
            height: 42px;
            line-height: 42px;
            font-size: 52px;
            vertical-align: middle;
            letter-spacing: normal;
            text-align: center;
            padding: 0;
            color: #525252;
            @include respond-to("bp-max-319") {
              line-height: 36px;
              height: 36px;
            }
            @include display-flex {
              align-items: checkAlign(center);
              justify-content: getJustify(center);
            }
          }
        }
        .input + .input {
          margin-left: 5px;
        }
      }
      .txt-wrap {
        padding-top: 32%;
        @include respond-to("bp-min-376") {
          // padding-top: 28%;
        }
      }
    }
    &.bio {
      position: relative;
      height: 100%;
      .form-wrap {
        width: 129px;
        margin: 0 auto;
        position: absolute;
        top: 17%;
        left: 50%;
        @include translateX(-50%);
        .btn-fgp {
          width: 129px;
          height: 129px;
          background: transparent;
          .ico-fingerprint {
            display: block;
            width: 129px;
            height: 129px;
            background: url("~@/assets/images/projects/initech/kdxp/ico_finger.svg")
              center center no-repeat;
            background-size: 100%;
          }
        }
      }
      .txt-wrap {
        padding-top: 0;
        position: absolute;
        bottom: 14%;
        p {
          min-height: 70px;
        }
      }
    }
  }
}
</style>
