<template>
  <div id="app" class="app__root">
    <AppHeader></AppHeader>
    <IntroPage></IntroPage>
    <AppFooter></AppFooter>
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from "@/components/common/AppHeader.vue";
import IntroPage from "@/views/IntroPage.vue";
import AppFooter from "@/components/common/AppFooter.vue";

export default {
  name: "Home",
  components: {
    IntroPage,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      stateId: 0,

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
  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
