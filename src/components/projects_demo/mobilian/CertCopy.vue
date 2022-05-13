<template>
  <div>
    <!-- 인증서_복사(가져오기,내보내기) -->
    <template v-bind="copyCertifiSort">
      <div class="m-ini-cert__manage" :class="copyCertifiSort.class_name">
        <div class="inner">
          <div class="icon-box">
            <div class="icon" :class="copyCertifiSort.class_name">
              <span class="blind">
                {{ $t("mobilian.icon_ir_" + copyCertifiSort.name) }}</span
              >
            </div>
            <!--<p>({{ $t('mobilian.spendtime') }}<em class="font-color-red">2분 59초</em>)</p>-->
          </div>
          <div class="form-wrap w50p">
            <span class="input"><input type="text" value="1234" /></span>
            <span class="input"><input type="text" value="1234" /></span>
          </div>
        </div>
      </div>
      <div class="m-ini-cert__btns">
        <div class="btns-wrap">
          <button :class="copyCertifiSort.btn_style" type="button">
            <i :class="copyCertifiSort.btn_icon"></i
            >{{ $t("mobilian.btn_" + copyCertifiSort.btn_type) }}
          </button>
        </div>
      </div>
      <div class="m-ini-cert__panel">
        <ul class="panel notice">
          <li v-for="(step, index) in panelBox" :key="index">
            <div class="inner">
              <i class="num" :class="step.i_class"></i>
              <p
                v-html="
                  $t(
                    'mobilian.' +
                      copyCertifiSort.class_name +
                      '_noti_' +
                      step.index
                  )
                "
              ></p>
            </div>
          </li>
        </ul>
      </div>
    </template>
    <!-- //인증서_복사 -->
  </div>
</template>
<script>
export default {
  created() {
    this.copyCertifiSort = this.copyCertifiSortDef["certImport"];
  },
  methods: {},
  data: function () {
    return {
      copyCertifiSort: {},
      copyCertifiSortDef: {
        certImport: {
          // 인증서 가져오기 data
          name: "certImport",
          class_name: "import",
          btn_style: "btn btn__blue w50p",
          btn_icon: "",
          btn_type: "next",
        },
        certExport: {
          // 인증서 내보내기 data
          name: "certExport",
          class_name: "export",
          btn_style: "btn btn__wh",
          btn_icon: "ico refresh",
          btn_type: "refresh",
        },
      },
      panelBox: [
        { index: "1", i_class: "num1" },
        { index: "2", i_class: "num2" },
        { index: "3", i_class: "num3" },
      ],
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
</style>
