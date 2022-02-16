<template>
  <div class="modal project-detail">
    <ProjectDetailB />
  </div>
</template>

<script>
import ProjectDetailB from "@/components/portfolio/ProjectDetailB.vue";
export default {
  name: "ProjectDetail",
  components: {
    ProjectDetailB,
  },
};
</script>
<style lang="scss" scoped>
.project-detail {
  width: 100%;
  height: 100%;
}
</style>
