<template>
  <div class="modal project-detail">
    <ProjectDetailA />
    <!--<CompProjectB/><CompProjectC/>-->
  </div>
</template>
<script>
import ProjectDetailA from "../components/portfolio/ProjectDetailA.vue";
export default {
  name: "ProjectDetail",
  components: {
    ProjectDetailA,
  },
  data() {
    return {};
  },
};
</script>
