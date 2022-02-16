<template>
  <div class="library-main">
    <nav class="gnb">
      <div class="gnb-inner">
        <ul class="navigation">
          <router-link tag="li" to="/">Home</router-link>
          <router-link tag="li" to="/librarys/elements">Elements</router-link>
          <router-link tag="li" to="/librarys/modules">Modules</router-link>
          <router-link tag="li" to="/librarys/interaction"
            >Interaction</router-link
          >
          <router-link tag="li" to="/blog">Blog</router-link>
          <router-link tag="li" to="/reference">Reference</router-link>
          <!--<router-link  v-for="nav in navigation" :key="nav.idx" :to="'/' + nav.path">{{ nav.id }}</router-link>-->
        </ul>
      </div>
    </nav>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :theme="selectedTheme"
      :show-one-child="true"
      @collapse="onCollapse"
      @itemClick="onItemClick"
    >
    </sidebar-menu>
    <div class="contents">
      <div id="view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//import { SidebarMenu } from 'vue-sidebar-menu'

export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
//@import "@/assets/scss/pages/_library";
</style>
