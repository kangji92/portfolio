<template>
  <div>
    <div class="prj__ia">
      <div class="content__header">
        <h1>현황판</h1>
      </div>
      <div class="content__body">
        <div class="tbl">
          <table>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">D1</th>
                <th scope="col">D2</th>
                <th scope="col">D3</th>
                <th scope="col">D4</th>
                <th scope="col">D5</th>
                <th scope="col">Link</th>
                <th scope="col">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="num">1</td>
                <td class="d1">간편인증</td>
                <td class="d2">PIN</td>
                <td class="d3">기본화면</td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/kdxp/easyauth_BIO"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/kdxp/easyauth_BIO
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>
              <tr>
                <td class="num">2</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3">에러화면</td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/kdxp/easyauth_PIN"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/kdxp/easyauth_PIN
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>
            </tbody>
          </table>
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

.prj__ia {
  // z-index: 100;
  float: left;
  font-size: 1em;
  position: absolute;
  left: 0;
  top: 0;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  min-height: 100%;
  word-break: break-all;
  background: rgb(255, 255, 255);
  .content__header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 68px;
    background: #333;
    h1 {
      font-size: 2em;
      text-align: left;
      color: #fff;
      padding-left: 1em;
      height: 68px;
      @include display-flex {
        align-items: checkAlign(center);
      }
    }
  }

  a,
  button,
  .link {
    padding: 0.5em;
    background: #dedede;
    display: block;
    word-break: break-all;
    cursor: pointer;
  }
  .content__body {
    overflow: hidden;
    margin: 0.5em 1em;
    margin-top: 88px;
    float: left;
    width: calc(100% - 2em);
    @include clearfix;
    .btns-wrap {
      display: block;
      float: left;
      width: 100%;
      margin-top: 1rem;
      button {
        display: block;
        float: left;
        text-align: center;
        font-size: 1.1rem;
        width: 120px;
        height: 48px;
        border-radius: calc(48px * 0.5);
      }
      button:hover,
      button:focus {
        background: #555;
        color: #fff;
      }
      button + button {
        margin-left: 1.5%;
      }
    }
    section {
      display: block;
      float: left;
      margin: 0 0 1em;
      margin-top: 1rem;
      width: 100%;
    }
    .ttl {
      margin-bottom: 0.5em;
      background: #333;
      height: 50px;
      h2 {
        padding-left: 1em;
        height: 50px;
        font-size: 1.5em;
        text-align: left;
        color: #fff;
        @include display-flex {
          align-items: checkAlign(center);
        }
      }
    }
  }
  .tbl {
    width: 100%;
    border-top: 2px solid #333;
    border-bottom: 1px solid #444;
    table {
      width: 100%;
      margin: 0 auto;
      tr {
        width: 100%;
      }
      thead {
        th {
          width: 10%;
          &:first-child {
            width: 3%;
            text-align: center;
          }
          &:nth-child(7) {
            width: 20%;
          }
          &:nth-child(8) {
            width: 30%;
          }
        }
      }
      th,
      td {
        padding: 0.4em;
        border-right: 1px solid #999;
      }
      th {
        font-weight: bold;
        padding: 0.6em;
        border-bottom: 1px solid #333;
      }

      tbody {
        td {
          border-top: 1px solid #ddd;
          line-height: 1.3em;
        }
        .d1 {
          font-weight: bold;
          border-top: none;
        }
        .num {
          text-align: center;
        }
        .note {
          // line-height: 1.3em;
          font-weight: bold;
        }
      }
      tbody + tbody tr:first-child {
        td {
          border-top: 1px solid #999 !important;
        }
      }
    }
  }
}
</style>
