<template>
  <div class="loadding-bg" v-if="isLoading">
    <div class="loading-wrap">
      <div class="loading">
        <span class=""></span>
        <span class=""></span>
        <span class=""></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.loadding-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  //background: rgba(0, 0, 0, 0.2);
}
.loading-wrap {
  float: left;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 60px;
  margin: 0 10px 10px 0;
  padding: 20px 20px 20px;
  border-radius: 5px;
  text-align: center;
  //background-color: #fff;
}
.loading {
  //animation: loadingI 2s linear infinite;
}
.bubble-1,
.bubble-2 {
  animation: bounce 2s ease-in-out infinite;
}
.bubble-2 {
  animation-delay: -1s;
}
.loading {
  display: flex;
  justify-content: center;

  span {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: #999;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;
    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

.bubble-1,
.bubble-2,
.bubble-3,
.bubble-4 {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #333;
}
.bubble-2 {
  top: auto;
  bottom: 0;
}

@keyframes loadingI {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
