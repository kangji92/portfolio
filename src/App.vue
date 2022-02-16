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
