<template>
  <!-- PC/모바일/태블릿 -->
  <div class="project-detail">
    <div v-for="project in projectList" :key="project.id" :class="project.name">
      <div class="container">
        <div class="header">
          <div class="header-inner">
            <!--<div class="modal-preface">
                                    <span>+ 머리말</span>
                                </div>-->
          </div>
        </div>
        <div class="hiring-main project-main1">
          <div class="hiring-heading">
            <div class="inner">
              <h1 v-html="$t('project.ttl_' + project.name)"></h1>
              <span
                class="sub-ttl"
                v-html="$t('project.subttl_' + project.name)"
              ></span>
              <div class="project__info">
                <div class="hash-group">
                  <ul>
                    <li><a href="#">#Vue.js</a></li>
                    <li><a href="#">#vue-router</a></li>
                    <li><a href="#">#모바일웹</a></li>
                    <li><a href="#">#반응형웹</a></li>
                    <li><a href="#">#다국어지원</a></li>
                    <li><a href="#">#보안솔루션</a></li>
                  </ul>
                </div>
                <dl>
                  <dt>{{ $t("project.info_date") }}</dt>
                  <dd>
                    {{ $t("project." + project.name + "_info_date") }}
                  </dd>
                </dl>
                <dl>
                  <dt>{{ $t("project.info_output") }}</dt>
                  <dd>
                    {{ $t("project." + project.name + "_info_output") }}
                  </dd>
                </dl>
                <dl class="project__desc">
                  <dt>웹 호환성</dt>
                  <dd>
                    - PC : Chrome, Firefox, IE11, Safari <br />
                    - Tablet : Android 6.X / IOS 10.X
                  </dd>
                </dl>
                <dl class="project__desc">
                  <dt>해상도 범위</dt>
                  <dd>- Mobile / Tablet(세로) : 320px ~ 800px</dd>
                </dl>
                <button class="btn__line" type="button">View Demo</button>
              </div>
            </div>
            <div class="mockup pc" :class="project.name"><span></span></div>
            <div class="mockup mo" :class="project.name"><span></span></div>
          </div>
        </div>

        <article class="hiring-info">
          <div class="inner">
            <div class="col">
              <span class="contour"></span>
              <div class="ttl">
                <h2>{{ $t("project.artical_ttl_01") }}</h2>
              </div>
              <dl>
                <dt>Encode :</dt>
                <dd>UTF-8</dd>
              </dl>
              <dl>
                <dt>SCM :</dt>
                <dd>Git</dd>
              </dl>
              <dl>
                <dt>Git Cloud Service :</dt>
                <dd>Bitbucket</dd>
              </dl>
              <dl>
                <dt>Git-GUI :</dt>
                <dd>Sourcetree</dd>
              </dl>
              <dl>
                <dt>Framework :</dt>
                <dd>Vue.js (Vue-cli)</dd>
              </dl>
              <dl>
                <dt>UI Desgin Guide Tool :</dt>
                <dd>Zeplin</dd>
              </dl>
              <dl class="project__desc">
                <dt>Details</dt>
                <dd>
                  - Vuex 상태관리 <br />
                  - i18n 다국어 지원<br />
                  - Vue-router 라우팅 기능
                </dd>
              </dl>
            </div>
            <div class="col">
              <span class="contour"></span>
              <div class="ttl">
                <h2>{{ $t("project.artical_ttl_02") }}</h2>
              </div>
              <div class="style-guide">
                <div class="sub-ttl">
                  <h4>Colors</h4>
                </div>

                <div class="palette-wrap">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <section class="section-wrap">
          <div class="inner">
            <article class="hiring-info">
              <div class="ttl">
                <h2>Components</h2>
              </div>
              <h3 class="visual__ttl">Cloud Auth</h3>
              <div class="visual-box col">
                <p class="visual__ttl">Mobile Web</p>
                <div class="mockup_sub" :class="project.name + 1">
                  <span></span>
                </div>
              </div>
              <div class="visual-box col">
                <p class="visual__ttl">PC Web</p>
                <div class="mockup_sub" :class="project.name + 2">
                  <span></span>
                </div>
              </div>
            </article>
            <article class="hiring-info">
              <h3 class="visual__ttl">
                Simple Auth | Toss, Kakao, PASS, NAVER PAYCO
              </h3>
              <div class="visual-box col">
                <p class="visual__ttl">PC Web</p>
                <div class="mockup_sub" :class="project.name + 3">
                  <span></span>
                </div>
                <div class="mockup_sub" :class="project.name + 4">
                  <span></span>
                </div>
                <div class="mockup_sub" :class="project.name + 5">
                  <span></span>
                </div>
              </div>
              <div class="visual-box col">
                <p class="visual__ttl">Mobile Web</p>
                <div class="mockup_sub" :class="project.name + 6">
                  <span></span>
                </div>
                <div class="mockup_sub" :class="project.name + 7">
                  <span></span>
                </div>
              </div>
            </article>
            <article class="hiring-info">
              <h3 class="visual__ttl">
                SNS Auth | Toss, Kakao, PASS, NAVER PAYCO
              </h3>
              <div class="visual-box col">
                <p class="visual__ttl">PC Web</p>
                <div class="mockup_sub" :class="project.name + 8">
                  <span></span>
                </div>
              </div>
              <div class="visual-box col">
                <p class="visual__ttl">Mobile Web</p>
                <div class="mockup_sub" :class="project.name + 9">
                  <span></span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section class="section-wrap">
          <div class="inner">
            <div class="ttl">
              <h3>Information Architecture</h3>
            </div>
            <div class="ia-tbl-wrap">
              <table>
                <thead>
                  <th>Index</th>
                  <th>1 Depth</th>
                  <th>2 Depth</th>
                  <th>3 Depth</th>
                  <th>4 Depth</th>
                </thead>
                <tbody>
                  <tr>
                    <td class="num">1</td>
                    <td class="d1">공동인증서 로그인</td>
                    <td class="d2">인증서 없음</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">2</td>
                    <td class="d1"></td>
                    <td class="d2">인증서 목록</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">3</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3">선택한 인증서 암호입력</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">4</td>
                    <td class="d1">인증서 관리</td>
                    <td class="d2">인증서 없음</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">4</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3">인증서 신규발급</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">5</td>
                    <td class="d1"></td>
                    <td class="d2">인증서 목록</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">6</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3">선택한 인증서(상세정보) 보기</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">7</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3"></td>
                    <td class="d4">인증서 삭제</td>
                  </tr>
                  <tr>
                    <td class="num">8</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3"></td>
                    <td class="d4">인증서 암호변경</td>
                  </tr>
                  <tr>
                    <td class="num">9</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3"></td>
                    <td class="d4">상세보기/간략보기</td>
                  </tr>
                  <tr>
                    <td class="num">10</td>
                    <td class="d1"></td>
                    <td class="d2">인증서 복사</td>
                    <td class="d3">인증서 가져오기</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">10</td>
                    <td class="d1"></td>
                    <td class="d2"></td>
                    <td class="d3">(인증서 선택 후)인증서 내보내기</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">10</td>
                    <td class="d1"></td>
                    <td class="d2">인증서 재발급 / 갱신</td>
                    <td class="d3">(인증서 선택 후)새로운 인증서 암호입력</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">10</td>
                    <td class="d1"></td>
                    <td class="d2">인증서 폐기</td>
                    <td class="d3">(인증서 선택 후)현재 인증서 암호입력</td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">11</td>
                    <td class="d1">Alert 팝업</td>
                    <td class="d2">확인</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">12</td>
                    <td class="d1"></td>
                    <td class="d2">주의</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                  <tr>
                    <td class="num">13</td>
                    <td class="d1"></td>
                    <td class="d2">오류</td>
                    <td class="d3"></td>
                    <td class="d4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompProject",
  data() {
    return {
      projectList: [
        {
          idx: 1,
          name: "multi-demo",
          ttl: "+ Tech Stack",
          artical_ttl: "Tech Stack",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/pages/_prj-detail";

.project-detail {
  background: #fff;
  position: relative;
}
</style>
