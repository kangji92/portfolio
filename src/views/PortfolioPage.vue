<template>
  <div class="portfolio-main">
    <AppHeader></AppHeader>
    <AppFooter></AppFooter>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section">
        <div class="inner top">
          <div class="ttl-group">
            <h2 v-html="$t('portfolio.ttl')"></h2>
            <p>{{ $t("portfolio.ttl_p") }}</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="content about">
          <div class="about-inner">
            <div class="txt-group">
              <em>日日新又日新</em>
              <p>{{ $t("portfolio.about_ttl") }}</p>
            </div>
            <span v-html="$t('portfolio.about_sub')"></span>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="content desc">
          <div class="desc-inner">
            <h3>{{ $t("portfolio.sec_1_ttl_h3") }}</h3>
            <ul class="item-group">
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_1") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_1')"></p>
              </li>
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_2") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_2')"></p>
              </li>
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_3") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_3')"></p>
              </li>
              <li>
                <h4>{{ $t("portfolio.sec_1_ttl_h4_4") }}</h4>
                <p v-html="$t('portfolio.sec_1_desc_4')"></p>
                <ul class="tool-list">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="content project">
          <ProjectSlider></ProjectSlider>
        </div>
      </section>
      <section class="section">
        <div class="content experience">
          <ExperienceSlider></ExperienceSlider>
        </div>
      </section>
      <section class="section">
        <div class="content contact">
          <div class="contact-inner">
            <div class="txt-group">
              <em>Thank you.</em>
            </div>
            <router-link tag="button" class="btn trn" to="/portfolio/resume">
              {{ $t("btn.resume") }}
            </router-link>
          </div>
        </div>
      </section>
    </full-page>
    <Modal v-if="showPopup" @close-popup-dlg="closePopup"></Modal>
  </div>
</template>
<script>
import Vue from "vue";
import AppHeader from "@/components/common/AppHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import VueFullPage from "vue-fullpage.js";
import ProjectSlider from "@/components/portfolio/ProjectSlider.vue";
import ExperienceSlider from "@/components/portfolio/ExperienceSlider.vue";
import Modal from "@/views/Modal.vue";
import gsap from "gsap";

Vue.use(VueFullPage);
Vue.use(gsap);

export default {
  components: {
    ProjectSlider,
    ExperienceSlider,
    Modal,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      showPopup: false,
      offsets: [],
      idx: 0,
      isLandscape: false,

      options: {
        afterLoad: this.afterLoad,
        licenseKey: "57A4E3B2-4CF4497D-84973653-2E0DBD93",
        controlArrows: true,
        scrollBar: false,
        navigation: true,
        scrollOverflow: true,
        //Navigation: true,
        //NavigationPosition: "Right", // Navigate the position of the small dot
        // NavigationToolTIPS: ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"],
        slidesNavigation: true,

        anchors: ["1", "2", "3", "Projects", "4"],
        //sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
      },
    };
  },

  methods: {
    showPopupDlg(param) {
      //alert("ddd");
      this.$emit("showPopupDlg", param);
      //this.popupIdx = popupData.data;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
  mounted() {
    // timeline
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".section",
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ///   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
        toggleActions: "restart pause reverse pause",
      },
    });
    tl.from(".section", {
      scrollTrigger: ".section",
      duration: 1,
      opacity: 0,
      //ease: "ease:Elastic.easeOut",
      toggleActions: "restart pause reverse pause",
    }).to(".section", {
      scrollTrigger: ".section",
      duration: 1,
      opacity: 1,
      //ease: "ease:Elastic.easeOut",
      //toggleActions: "restart pause reverse pause",
    });
  },
};
</script>
<style>
b {
  font-weight: 500 !important;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_portfolio-main";
</style>
