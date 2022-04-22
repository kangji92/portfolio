<template>
  <div>
    <div class="dim">
      <div class="page-error">Page is not found</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
.page-error {
  text-align: center;
  position: absolute;
  width: 500px;
  height: 200px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  font-size: 1.5rem;
  @include translate(-50%, -50%);
  @include display-flex {
    align-items: checkAlign(center);
    justify-content: getJustify(center);
  }
}
.dim {
  content: "";
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
