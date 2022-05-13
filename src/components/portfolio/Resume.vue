<template>
  <div class="resume-temp">
    <VuePdfApp
      pdf="./../resume_kangjiyeon.pdf"
      page-scale="100"
      @open="openHandler"
    ></VuePdfApp>
  </div>
</template>

<script>
import VuePdfApp from "vue-pdf-app";
export default {
  components: {
    VuePdfApp,
  },
  computed: {},
  methods: {
    openHandler(pdfApp) {
      window._pdfApp = pdfApp;
    },
  },
};
</script>
<style scoped>
@import "https://unpkg.com/vue-pdf-app@2.0.0/dist/icons/main.css";
</style>
<style lang="scss" scoped>
@import "@/assets/scss/main";
.resume-temp {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100000;
}
</style>
