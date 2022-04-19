<template>
  <pdf src="@/assets/resume_kangjiyeon.pdf"></pdf>
</template>
<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
};
</script>

<style lang="scss" scoped>
#buttons {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
/* Page content */
.content {
  padding: 16px;
}
</style>
