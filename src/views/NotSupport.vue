<template>
  <div>
    <div class="dim">
      <div class="page-error">미지원 기기입니다.</div>
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
  font-size: 2rem;
  @include translate(-50%, -50%);
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
