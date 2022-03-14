<template>
  <div class="modal-template">
    <div class="modal__overlay" @click="$emit('close-modal')"></div>
    <div class="modal__container">
      모달팝업
      <div class="modal__close">
        <button type="button" class="btn-close" @click="$emit('close-modal')">
          <span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-template {
  z-index: 100000;
  overflow-y: hidden;
  height: 100vh;
}
.modal-template,
.modal__overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.modal__overlay {
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
.modal__container {
  width: 90vw;
  position: relative;
  left: 50%;
  top: 50%;
  height: 85vh;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
}
.modal__close {
  z-index: 10000;
  width: 1400px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  button {
    width: 52px;
    height: 52px;
    background: transparent;
    border: 0;
    position: fixed;
    top: 0;
    right: 0;

    span {
      display: block;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 2px;
        height: 52px;
        background: #333;
        transform: rotate(45deg);
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 52px;
        background: #333;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
