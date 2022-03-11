<template>
  <div>
    <div class="modal__close">
      <button type="button" class="btn-close" @click="closeModal()">
        <span></span>
      </button>
    </div>
    <ProjectDetailA> </ProjectDetailA>
  </div>
</template>

<script>
import ProjectDetailA from "@/components/portfolio/ProjectDetailA.vue";

export default {
  components: {
    ProjectDetailA,
  },
  methods: {
    closeModal() {
      this.$emit("close");
      alert("ddd");
    },
  },
  props: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/_prj-detail";

.modal__close {
  position: absolute;
  top: 28px;
  right: 60px;
  width: 52px;
  height: 52px;
  z-index: 100000;

  button {
    width: 52px;
    height: 52px;
    background: transparent;
    border: 0;
    // position: fixed;
    //top: 28px;
    //right: 48px;

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
