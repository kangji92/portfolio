<template>
  <div class="modal project-detail">
    <ProjectDetailC />
    <!--<CompProjectB/><CompProjectC/>-->
  </div>
</template>
<script>
import ProjectDetailC from "../components/portfolio/ProjectDetailC.vue";
export default {
  name: "ProjectDetail",
  components: {
    ProjectDetailC,
  },
  data() {
    return {};
  },
};
</script>
