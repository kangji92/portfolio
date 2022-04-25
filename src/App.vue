<template>
  <div id="app" class="app__root">
    <router-view></router-view>
    <TestModal v-if="isModalViewed" @close-modal="closeModal"></TestModal>
    <!--<button class="button" @click="openModal">열기</button>-->
    <NotSupport v-show="isNotSupport" id="isNotSupport"></NotSupport>
  </div>
</template>
<script>
import TestModal from "@/components/common/TestModal.vue";
import NotSupport from "@/components/common/NotSupport.vue";

export default {
  name: "Home",
  beforeCreate() {
    window.addEventListener("load", this.srceenHandler);
  },
  created: function () {
    window.addEventListener("load", this.srceenHandler);
    window.addEventListener("resize", this.onResize);
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.addEventListener("resize", this.onResize);
  },
  updated() {},
  components: {
    //IntroPage,
    TestModal,
    NotSupport,
  },
  data() {
    return {
      stateId: 0,
      isNotSupport: false,
      isModalViewed: false,
      //showRoute: false,
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
    // 미지원 대체화면
    srceenHandler() {
      // 모바일 & 태블릿 구분
      var mobileTablet =
        /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

      // 세로모드 구분
      var isPortrait = window.innerWidth <= window.innerHeight;

      if (navigator.userAgent.match(mobileTablet)) {
        if (navigator.userAgent.match(/iPad|Android/i)) {
          // 아이패드, 안드로이드 OS
          if (
            window.matchMedia("(min-width: 361px) and (max-width: 600px)")
              .matches
          ) {
            if (isPortrait) {
              // 세로 모드일때
              this.isNotSupport = false;
            } else {
              // 가로 모드일때
              this.isNotSupport = true;
            }
          } else {
            this.isNotSupport = false;
          }
        } else if (navigator.userAgent.match(/iPhone|iPod/i)) {
          // 아이폰
          if (isPortrait) {
            // 세로 모드일때
            this.isNotSupport = false;
          } else {
            // 가로 모드일때
            this.isNotSupport = true;
          }
        } else {
          // 767
          if (window.matchMedia("(max-width: 1599px)").matches) {
            this.isNotSupport = true;
            /* if (isPortrait) {
              // 세로 모드일때
              this.isNotSupport = false;
            } else {
              // 가로 모드일때
              this.isNotSupport = true;
            }*/
          } else {
            this.isNotSupport = false;
          }
        }
      } else {
        // PC
        if (window.matchMedia("(max-width: 1599px)").matches) {
          if (window.innerWidth <= window.innerHeight) {
            // 세로 모드일때
            this.isNotSupport = false;
          } else {
            // 가로 모드일때
            this.isNotSupport = true;
          }
        } else {
          this.isNotSupport = false;
        }
      }
    },
    onResize() {
      this.srceenHandler();
    },

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
/*
@media screen and (max-width: 480px) and (orientation: portrait) {
  #isNotSupport {
    display: none !important;
  }
}
@media screen and (min-width: 801px) and (max-width: 1023px) and (orientation: landscape) {
  #isNotSupport {
    display: block !important;
  }
}*/

@media screen and (max-width: 1599px) and (orientation: portrait) {
  #isNotSupport {
    display: block !important;
  }
}
</style>
