<template>
  <div class="modal project-detail">
    <ProjectDetailB />
    <!--<CompProjectB/><CompProjectC/>-->
  </div>
</template>
<script>
import ProjectDetailB from "../components/portfolio/ProjectDetailB.vue";
export default {
  name: "ProjectDetail",
  components: {
    ProjectDetailB,
  },
  data() {
    return {};
  },
};
</script>
