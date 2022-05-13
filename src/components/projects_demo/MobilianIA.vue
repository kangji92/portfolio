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
                <td class="d1">공동인증서 로그인</td>
                <td class="d2">인증서 없음</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/login/noCert"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/login/noCert
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>
              <tr>
                <td class="num">2</td>
                <td class="d1"></td>
                <td class="d2">인증서 목록</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/login/certList"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/login/certList
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>
              <tr>
                <td class="num">3</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3">선택한 인증서 암호입력</td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class=""></td>
                <td class="note">
                  암호입력 1줄 <br />
                  'certEnterPwForm'
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="num">4</td>
                <td class="d1">인증서 관리</td>
                <td class="d2">인증서 없음</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/manage/noCert"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/manage/noCert
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>

              <tr>
                <td class="num">5</td>
                <td class="d1"></td>
                <td class="d2">인증서 목록</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/manage/certList"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/manage/certList
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>
              <tr>
                <td class="num">6</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3">선택한 인증서<br />(상세정보) 보기</td>
                <td class="d4"></td>
                <td class="d5"></td>

                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/manage/selectCertDetail"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/manage/selectCertDetail
                    </span>
                  </router-link>
                </td>
                <td class="note"></td>
              </tr>
              <tr>
                <td class="num">7</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3"></td>
                <td class="d4">인증서 삭제(팝업)</td>
                <td class="d5"></td>

                <td class="">
                  <!--<button @click="openModal">인증서 삭제(팝업)</button>-->
                </td>
                <td class="note">alertPop5</td>
              </tr>
              <tr>
                <td class="num">8</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3"></td>
                <td class="d4">인증서 암호변경</td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/certChangePwForm"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/certChangePwForm
                    </span>
                  </router-link>
                </td>
                <td class="note">
                  암호입력 3줄 <br />
                  'certChangePwForm'
                </td>
              </tr>
              <tr>
                <td class="num">9</td>
                <td class="d1"></td>
                <td class="d2">인증서 복사</td>
                <td class="d3">인증서 가져오기</td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/certImport"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/certImport
                    </span>
                  </router-link>
                </td>
                <td class="note">['certImport']</td>
              </tr>
              <tr>
                <td class="num">10</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3">(인증서 선택 후)<br />인증서 내보내기</td>
                <td class="d4"></td>
                <td class="d5"></td>

                <td class="">
                  <!--<router-link to="/portfolio/portfolio/mobilian/certExport" custom v-slot="{ navigate }">
                                            <span @click="navigate" @keypress.enter="navigate" role="link" class="link">
                                            /portfolio/portfolio/mobilian/certExport 
                                            </span> 
                                        </router-link>-->
                  주석확인
                </td>
                <td class="note">
                  인증서목록 > 인증서 선택 > 암호입력 후<br />
                  ['certExport']
                </td>
              </tr>
              <tr>
                <td class="num">11</td>
                <td class="d1"></td>
                <td class="d2">인증서 신규발급/재발급</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <!--
                                        <router-link to="/portfolio/portfolio/mobilian/certIssue" custom v-slot="{ navigate }">
                                            <span @click="navigate" @keypress.enter="navigate" role="link" class="link">
                                            /portfolio/portfolio/mobilian/certIssue 
                                            </span> 
                                        </router-link>
                                        -->
                  주석확인
                </td>
                <td class="note">
                  암호 입력 2줄 <br />
                  'newCertPwForm'
                </td>
              </tr>
              <tr>
                <td class="num">12</td>
                <td class="d1"></td>
                <td class="d2">인증서 갱신</td>
                <td class="d3">
                  (인증서 선택 후) <br />
                  선택한 인증서 암호 입력
                </td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <!--
                                        <router-link to="/portfolio/portfolio/mobilian/certRenew/1" custom v-slot="{ navigate }">
                                            <span @click="navigate" @keypress.enter="navigate" role="link" class="link">
                                             /portfolio/portfolio/mobilian/certRenew/1
                                            </span> 
                                        </router-link>
                                        -->
                  주석확인
                </td>
                <td class="note">
                  암호 입력 1줄 <br />
                  'certEnterPwForm'
                  <br />
                </td>
              </tr>
              <tr>
                <td class="num">13</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3"></td>
                <td class="d4">갱신한 인증서 새암호 입력</td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/certRenew/2"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/certRenew/2
                    </span>
                  </router-link>
                </td>
                <td class="note">
                  암호 입력 2줄 <br />
                  'newCertPwForm'
                </td>
              </tr>
              <tr>
                <td class="num">14</td>
                <td class="d1"></td>
                <td class="d2">인증서 폐기</td>
                <td class="d3">(인증서 선택후) <br />선택한 인증서 암호입력</td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class="">
                  <!--
                                        <router-link to="/portfolio/portfolio/mobilian/certRevoke/1" custom v-slot="{ navigate }">
                                            <span @click="navigate" @keypress.enter="navigate" role="link" class="link" > 
                                            /portfolio/portfolio/mobilian/certRevoke/1
                                            </span>
                                        </router-link>
                                        -->
                  주석확인
                </td>
                <td class="note">
                  암호 입력 1줄 <br />
                  'certEnterPwForm'
                </td>
              </tr>
              <tr>
                <td class="num">15</td>
                <td class="d1"></td>
                <td class="d2"></td>
                <td class="d3"></td>
                <td class="d4">인증서 폐기</td>
                <td class="d5"></td>
                <td class="">
                  <router-link
                    to="/portfolio/portfolio/mobilian/certRevoke/2"
                    custom
                    v-slot="{ navigate }"
                  >
                    <span
                      @click="navigate"
                      @keypress.enter="navigate"
                      role="link"
                      class="link"
                    >
                      /portfolio/portfolio/mobilian/certRevoke/2
                    </span>
                  </router-link>
                </td>
                <td class="note">
                  <br />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="num">16</td>
                <td class="d1">팝업</td>
                <td class="d2">확인(완료) 팝업</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class=""></td>
                <td class="note">
                  완료 (done) / alertPop1 ~ alertPop4 <br /><br />"인증서
                  가져오기(내보내기)를 완료했습니다."<br />"취소되었습니다."<br />
                  "인증서 삭제를 완료하였습니다."
                </td>
              </tr>
              <tr>
                <td class="num">17</td>
                <td class="d1"></td>
                <td class="d2">주의 팝업</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>

                <td class="">
                  <!--<button @click="openModal">주의</button>--->
                </td>
                <td class="note">
                  주의 (caution) / alertPop5 <br /><br />
                  "인증서를 삭제하시겠습니까? "
                </td>
              </tr>
              <tr>
                <td class="num">18</td>
                <td class="d1"></td>
                <td class="d2">경고(오류) 팝업</td>
                <td class="d3"></td>
                <td class="d4"></td>
                <td class="d5"></td>
                <td class=""></td>
                <td class="note">
                  오류 (error) / alertPop6 ~ alertPop9
                  <br />
                  <br />
                  "인증서 암호가 틀렸습니다. 다시입력하십시오. " <br />
                  "비밀번호가 입력되지 않았습니다. 다시 확인해주세요." <br />
                  "인증코드가 잘못되었거나 시간이 너무 지체됨" <br />
                  "인증번호를 입력하세요."
                </td>
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
