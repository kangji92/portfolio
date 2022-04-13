<template>
  <div>
    <div class="not-support">
      <div class="canvas">
        <div class="canvas-inner">
          <div class="txt-box">
            <p>반응형 준비중인 화면입니다. <br />PC웹에서 확인해주세요.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
.not-support {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
}
.canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000000000;
  background-color: #fff;
  @include display-flex {
    align-items: checkAlign(center);
    justify-content: getJustify(center);
  }
  .canvas-inner {
    z-index: 1000000000;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    .txt-box {
      line-height: 1.5;
    }
  }
}

.page-error {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
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
