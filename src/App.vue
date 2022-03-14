<template>
  <div id="app" class="app__root">
    <AppHeader></AppHeader>
    <IntroPage></IntroPage>
    <AppFooter></AppFooter>
    <router-view></router-view>
    <TestModal v-if="isModalViewed" @close-modal="closeModal"></TestModal>
    <button class="button" @click="openModal">열기</button>
  </div>
</template>
<script>
import AppHeader from "@/components/common/AppHeader.vue";
import IntroPage from "@/views/IntroPage.vue";
import AppFooter from "@/components/common/AppFooter.vue";
import TestModal from "@/components/common/TestModal.vue";

export default {
  name: "Home",
  components: {
    IntroPage,
    AppHeader,
    AppFooter,
    TestModal,
  },
  data() {
    return {
      stateId: 0,

      isModalViewed: false,
      menu: ["HOME", "ABOUT", "projectS", "ETC"],
      projects: [
        {
          id: "0",
          title: "Sample project1",
          price: 10000,
          img: "https://dummyimage.com/200/F6A9A9/464660",
        },
        {
          id: "1",
          title: "Sample project2",
          price: 50000,
          img: "https://dummyimage.com/200/FFBF86/464660",
        },
        {
          id: "2",
          title: "Sample project3",
          price: 30000,
          img: "https://dummyimage.com/200/FFF47D/464660",
        },
        {
          id: "3",
          title: "Sample project5",
          price: 70000,
          img: "https://dummyimage.com/200/C2F784/464660",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isModalViewed = true;
    },
    closeModal() {
      this.isModalViewed = false;
    },
    showView() {
      this.$store.commit("setToggle", true);
    },
    hideView() {
      this.$store.commit("setToggle", false);
    },
    showPopupDlg() {
      // 자식창에서 팝업 요청이 오면 띄운다.
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },

    doSend() {},
  },
};
</script>
<style lang="scss">
.scrollLock {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.button {
  margin-top: 180px;
  font-size: 22px;
  padding: 10px;
  cursor: pointer;
}
</style>
