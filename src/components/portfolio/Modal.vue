<template>
  <div>
    <ProjectDetailA> </ProjectDetailA>
    <div class="modal__close">
      <button type="button" class="btn-close" @click="$emit('close')">
        <span></span>
      </button>
    </div>
  </div>
</template>

<script>
import ProjectDetailA from "@/components/portfolio/ProjectDetailA.vue";

export default {
  components: {
    ProjectDetailA,
  },
  methods: {
    del_data() {
      this.$emit("close");
    },
  },
  props: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/_prj-detail";
</style>
