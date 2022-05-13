<template>
  <div>
    <!-- 선택한_인증서_정보 -->
    <div class="m-ini-cert__view">
      <!-- 버튼 영역 -->
      <div class="m-ini-cert__btns">
        <div class="btns-wrap">
          <button class="btn btn__wh" type="button">
            <span>{{ $t("mobilian.btn_delete") }}</span>
          </button>
          <router-link
            to="/ui/conf/view/mobilian/certChangePwForm"
            custom
            v-slot="{ navigate }"
          >
            <span
              @click="navigate"
              @keypress.enter="navigate"
              role="link"
              class="btn btn__wh"
            >
              {{ $t("mobilian.btn_changePw") }}
            </span>
          </router-link>

          <!-- 상세보기, 간략보기 토글 -->
          <button
            class="btn btn__wh"
            v-if="on"
            key="on"
            @click="
              on = false;
              isActive = !isActive;
            "
          >
            <span>{{ $t("mobilian.btn_detail") }}</span>
          </button>
          <button
            class="btn btn__wh"
            v-else
            key="off"
            @click="
              on = true;
              isActive = !isActive;
            "
          >
            <span>{{ $t("mobilian.btn_quickView") }}</span>
          </button>
          <!-- //상세보기, 간략보기 토글 -->
        </div>
      </div>
      <!-- //버튼 영역 -->
      <!-- 인증서상세보기_토글 -->
      <transition name="fade">
        <div class="m-ini-cert__info dl-table" v-if="isActive">
          <div class="inner">
            <dl v-for="info in certTable" :key="info.idx">
              <dt>{{ $t("mobilian.certInfo_dt_" + info.idx) }}</dt>
              <dd>{{ $t("mobilian.certInfo_dd_" + info.idx) }}</dd>
            </dl>
          </div>
        </div>
        <div class="m-ini-cert__info dl-table" v-else>
          <div class="inner">
            <dl v-for="info in certTableDetail" :key="info.idx">
              <dt>{{ $t("mobilian.certInfo_dt_" + info.idx) }}</dt>
              <dd>{{ $t("mobilian.certInfo_dd_" + info.idx) }}</dd>
            </dl>
          </div>
        </div>
      </transition>
      <!-- //인증서상세보기_토글 -->
    </div>
    <!-- //선택한_인증서_정보 -->
  </div>
</template>
<script>
export default {
  methods: {},
  data: function () {
    return {
      isActive: true,
      isOpen: false,
      on: true,
      certTable: [{ idx: 5 }, { idx: 6 }, { idx: 18 }],
      certTableDetail: [
        { idx: 1 },
        { idx: 2 },
        { idx: 3 },
        { idx: 4 },
        { idx: 5 },
        { idx: 7 },
        { idx: 8 },
        { idx: 9 },
        { idx: 10 },
        { idx: 11 },
        { idx: 12 },
        { idx: 13 },
        { idx: 14 },
        { idx: 15 },
        { idx: 16 },
        { idx: 17 },
        { idx: 18 },
      ],
    };
  },
  computed: {
    //buttonMsg: function () {
    //  switch (this.docState) {
    //    case "상세보기":
    //      return "간략보기";
    //case 'edited': return 'Save'
    //case 'editing': return 'Cancel'
    //   }
    //},
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
