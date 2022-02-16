<template>
  <div>
    <div class="intro">
      <div class="intro-inner">
        <div class="ttl-group">
          <h2>
            Web Publisher<br />
            <em><b>Kang</b> JI Yeon</em>
          </h2>
        </div>
        <ul class="intro__btns-wrap">
          <li>
            <router-link tag="button" class="btn trn" to="/portfolio/portfolio">
              Portfolio
            </router-link>
          </li>
          <li>
            <router-link tag="button" class="btn navy" to="/portfolio/librarys"
              >Librarys</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.intro {
  height: 100%;
  width: 100%;
  // background-color: #fef8ee;
  font-family: $font-eng;
  .intro-inner {
    position: absolute;
    top: 50%;
    left: 40px;
    height: 100%;
    height: auto;
    @include respond-to("bp-tablet-820") {
      // 820
      left: 5%;
    }
    @include translateY(-50%);
  }
  .ttl-group {
    h2 {
      font-size: 62px;
      text-align: left;
      color: #000;
      margin: 0;
      letter-spacing: -0.05em;
      font-weight: 300;
      @include respond-to("bp-tablet-820") {
        // 820
        font-size: 58px;
      }
      @include respond-to("bp-mobile-600") {
        // 600
        font-size: 10vw;
      }

      em {
        b {
          font-weight: 500;
        }
      }
    }
  }
}
.intro__btns-wrap {
  margin-top: 8%;

  li {
    float: left;
    .btn {
      width: 212px;
      font-size: 28px;
      border: 1px solid #000;
      height: 60px;
      border-radius: 60px;
      cursor: pointer;
      font-family: $font-eng;
      background: transparent;
      &.trn {
        background: transparent;
      }
      &.navy {
        background: #3b3b3b;
        color: #fff;
      }
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
  li + li {
    margin-left: 2vw;
  }
}
</style>
