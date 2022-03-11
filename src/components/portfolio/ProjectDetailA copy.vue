<template>
  <!-- PC/태블릿 -->

  <transition name="modal-fade" class="modal project-detail">
    <div class="modal__overlay">
      <div class="modal__container">
        <div
          v-for="project in projectList"
          :key="project.id"
          :class="project.name"
        >
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
                  <h1 v-html="'project.ttl_' + project.name"></h1>
                  <span
                    class="sub-ttl"
                    v-html="'project.subttl_' + project.name"
                  ></span>
                  <div class="project__info">
                    <div class="hash-group">
                      <ul>
                        <li><a href="#">#반응형웹</a></li>
                        <li><a href="#">#html5</a></li>
                        <li><a href="#">#jquery</a></li>
                        <li><a href="#">#javascript</a></li>
                      </ul>
                    </div>
                    <dl>
                      <dt>{{ "project.info_date" }}</dt>
                      <dd>
                        {{ "project." + project.name + "_info_date" }}
                      </dd>
                    </dl>
                    <dl>
                      <dt>{{ "project.info_output" }}</dt>
                      <dd>
                        {{ "project." + project.name + "_info_output" }}
                      </dd>
                    </dl>
                    <button class="btn__line" type="button">View Site</button>
                  </div>
                </div>
                <div class="mockup" :class="project.name"><span></span></div>
              </div>
            </div>
            <article class="hiring-info">
              <div class="inner">
                <div class="col">
                  <span class="contour"></span>
                  <div class="ttl">
                    <h2>{{ "project.artical_ttl_01" }}</h2>
                  </div>
                  <dl>
                    <dt>인코딩 :</dt>
                    <dd>UTF-8</dd>
                  </dl>
                  <dl>
                    <dt>SCM :</dt>
                    <dd>SVN</dd>
                  </dl>
                  <dl>
                    <dt>Server :</dt>
                    <dd>Tomcat</dd>
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
                    <dd>- PC/ Tablet(가로) : 801px ~ 1920px</dd>
                  </dl>
                </div>
                <div class="col">
                  <span class="contour"></span>
                  <div class="ttl">
                    <h2>{{ "project.artical_ttl_02" }}</h2>
                  </div>
                  <div class="guide-info">
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
              </div>
            </article>
            <section class="section-wrap">
              <article class="hiring-info">
                <div class="center">
                  <div class="inner">
                    <div class="ttl">
                      <h2>{{ "project.artical_ttl_03" }}</h2>
                      <p>Desktop / Tablet | Resolution 1366 | OnePage scroll</p>
                    </div>
                    <div class="visual-box">
                      <p class="visual__ttl">Section1 | SSO Solution</p>
                      <div class="mockup_sub" :class="project.name + 1">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="hiring-info">
                <div class="visual-box col">
                  <div class="inner">
                    <p class="visual__ttl">Section2</p>
                  </div>
                  <div class="mockup_sub" :class="project.name + 2">
                    <span></span>
                  </div>
                </div>

                <div class="visual-box col">
                  <div class="inner">
                    <p class="visual__ttl">Section3</p>
                  </div>
                  <div class="mockup_sub" :class="project.name + 3">
                    <span></span>
                  </div>
                </div>
              </article>
            </section>
            <section class="section-wrap">
              <article class="hiring-info">
                <div class="center">
                  <div class="inner">
                    <div class="ttl">
                      <h2>{{ "project.artical_ttl_04" }}</h2>
                      <p>Work System Page | Main</p>
                    </div>
                    <div class="visual-box">
                      <p class="visual__ttl">Part1 | SSO Solution</p>
                      <div class="mockup_sub" :class="project.name + 4">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="hiring-info">
                <div class="visual-box col">
                  <p class="visual__ttl">Work System Page | Login</p>
                  <div class="mockup_sub" :class="project.name + 5">
                    <span></span>
                  </div>
                </div>
                <div class="visual-box col">
                  <p class="visual__ttl">Work System Page | Potal</p>
                  <div class="mockup_sub" :class="project.name + 6">
                    <span></span>
                  </div>
                </div>
              </article>
              <article class="hiring-info">
                <div class="visual-box col">
                  <p class="visual__ttl">Work System Page | MOTP</p>
                  <div class="mockup_sub" :class="project.name + 7">
                    <span></span>
                  </div>
                </div>
                <div class="visual-box col">
                  <p class="visual__ttl">Work System Page | Portal</p>
                  <div class="mockup_sub" :class="project.name + 8">
                    <span></span>
                  </div>
                </div>
              </article>
              <article class="hiring-info">
                <div class="visual-box col">
                  <p class="visual__ttl">Work System Page | Webmail</p>
                  <div class="mockup_sub" :class="project.name + 9">
                    <span></span>
                  </div>
                </div>
                <div class="visual-box col">
                  <p class="visual__ttl">Work System Page | WorkFlow</p>
                  <div class="mockup_sub" :class="project.name + 10">
                    <span></span>
                  </div>
                </div>
              </article>
            </section>
            <section class="section-wrap">
              <div class="inner">
                <div class="ttl">
                  <h2>Information Architecture</h2>
                </div>
                <!-- nexess demo -->
                <div v-if="projectName === 'nexessDemo'" class="ia-tbl-wrap">
                  <table>
                    <thead>
                      <th>No</th>
                      <th>1 Depth</th>
                      <th>2 Depth</th>
                      <th>3 Depth</th>
                      <th>4 Depth</th>
                      <th>화면 명</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="num">1</td>
                        <td class="d1">INTRO</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">인트로</td>
                      </tr>
                      <tr>
                        <td class="num">2</td>
                        <td class="d1">통합 SSO솔루션</td>
                        <td class="d2">INFO</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">SSO_INFO</td>
                      </tr>
                      <tr>
                        <td class="num">3</td>
                        <td class="d1"></td>
                        <td class="d2">SSO솔루션 데모_메인</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">SSO_메인</td>
                      </tr>
                      <tr>
                        <td class="num">4</td>

                        <td class="d1"></td>
                        <td class="d2">통합로그인</td>
                        <td class="d3">MOTP</td>
                        <td class="d4"></td>
                        <td class="name">SSO_OTP_등록</td>
                      </tr>
                      <tr>
                        <td class="num">5</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">SSO_OTP_등록성공</td>
                      </tr>
                      <tr>
                        <td class="num">6</td>

                        <td class="d1"></td>
                        <td class="d2">업무시스템(샘플)</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">SSO_업무화면_메인</td>
                      </tr>
                      <tr>
                        <td class="num">7</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">포털메인</td>
                        <td class="d4"></td>
                        <td class="name">SSO_업무화면_포털</td>
                      </tr>
                      <tr>
                        <td class="num">8</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">웹메일</td>
                        <td class="d4"></td>
                        <td class="name">SSO_업무화면_웹메일</td>
                      </tr>
                      <tr>
                        <td class="num">9</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">WorkFlow</td>
                        <td class="d4"></td>
                        <td class="name">SSO_업무화면_WorkFlow</td>
                      </tr>
                      <tr>
                        <td class="num">10</td>
                        <td class="d1">안내멘트 튜토리얼 팝업</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">튜토리얼1</td>
                      </tr>
                      <tr>
                        <td class="num">11</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">튜토리얼2</td>
                      </tr>
                      <tr>
                        <td class="num">12</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">튜토리얼3</td>
                      </tr>
                      <tr>
                        <td class="num">13</td>
                        <td class="d1">기본팝업</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">팝업1</td>
                      </tr>
                      <tr>
                        <td class="num">14</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">팝업2</td>
                      </tr>
                      <tr>
                        <td class="num">14</td>
                        <td class="d1">미지원 기기</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">미지원 대체화면</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- 수협은행 -->
                <div v-else-if="projectName === 'suhyup'" class="ia-tbl-wrap">
                  <table>
                    <thead>
                      <th>No</th>
                      <th>1 Depth</th>
                      <th>2 Depth</th>
                      <th>3 Depth</th>
                      <th>4 Depth</th>
                      <th>화면 명</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="num">1</td>
                        <td class="d1">설치화면</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">설치화면</td>
                      </tr>
                      <tr>
                        <td class="num">2</td>
                        <td class="d1">ID/PW 로그인(1차 인증)</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">1차인증 로그인_메인</td>
                      </tr>
                      <tr>
                        <td class="num">3</td>
                        <td class="d1"></td>
                        <td class="d2">비밀번호 초기화</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">4</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">암호설정 가이드(팝업)</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">5</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">비밀번호 만료안내(팝업)</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">6</td>
                        <td class="d1"></td>
                        <td class="d2">로그인 도움말</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">7</td>
                        <td class="d1">인증서 로그인 (2차인증)</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">2차인증 로그인_메인</td>
                      </tr>
                      <tr>
                        <td class="num">8</td>
                        <td class="d1"></td>
                        <td class="d2">인증센터</td>
                        <td class="d3">인증서 신규발급/재발급</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">9</td>

                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">인증서 폐기</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">10</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">본인인증</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">11</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">인증서 발급</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">12</td>
                        <td class="d1"></td>
                        <td class="d2">로그인 도움말</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">13</td>
                        <td class="d1">사이트맵 (권한관리 업무화면)</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- 교모생명 납품용(단독UI) -->
                <div
                  v-else-if="projectName === 'kyoboIndv'"
                  class="ia-tbl-wrap"
                >
                  <table>
                    <thead>
                      <th>No</th>
                      <th>1 Depth</th>
                      <th>2 Depth</th>
                      <th>3 Depth</th>
                      <th>4 Depth</th>
                      <th>화면 명</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="num">1</td>
                        <td class="d1">메인</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">설치화면</td>
                      </tr>
                      <tr>
                        <td class="num">2</td>
                        <td class="d1"></td>
                        <td class="d2">금융인증서</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">3</td>
                        <td class="d1"></td>
                        <td class="d2">공동인증서(구 공인인증서)</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">4</td>
                        <td class="d1"></td>
                        <td class="d2">간편인증</td>
                        <td class="d3">인증요청</td>
                        <td class="d4">주민번호 TypeA</td>
                        <td class="name">간편인증_인증요청_주민번호_A</td>
                      </tr>
                      <tr>
                        <td class="num">5</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">주민번호 TypeB</td>
                        <td class="name">간편인증_인증요청_주민번호_B</td>
                      </tr>
                      <tr>
                        <td class="num">6</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">약관동의 TypeA</td>
                        <td class="name">간편인증_인증요청_약관동의_A</td>
                      </tr>
                      <tr>
                        <td class="num">7</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">약관동의 TypeB</td>
                        <td class="name">간편인증_인증요청_약관동의_B</td>
                      </tr>
                      <tr>
                        <td class="num">8</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">인증대기</td>
                        <td class="d4"></td>
                        <td class="name">간편인증_인증대기</td>
                      </tr>
                      <tr>
                        <td class="num">9</td>

                        <td class="d1"></td>
                        <td class="d2">SNS계정인증</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">SNS계정인증</td>
                      </tr>
                      <tr>
                        <td class="num">10</td>
                        <td class="d1">팝업</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">11</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- 교모생명 데모용(통합UI) -->
                <div
                  v-else-if="projectName === 'kyoboDemo'"
                  class="ia-tbl-wrap"
                >
                  <table>
                    <thead>
                      <th>No</th>
                      <th>1 Depth</th>
                      <th>2 Depth</th>
                      <th>3 Depth</th>
                      <th>4 Depth</th>
                      <th>화면 명</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="num">1</td>
                        <td class="d1">메인</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">설치화면</td>
                      </tr>
                      <tr>
                        <td class="num">2</td>
                        <td class="d1"></td>
                        <td class="d2">금융인증서</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">3</td>
                        <td class="d1"></td>
                        <td class="d2">공동인증서(구 공인인증서)</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">4</td>
                        <td class="d1"></td>
                        <td class="d2">간편인증</td>
                        <td class="d3">인증요청</td>
                        <td class="d4">주민번호 TypeA</td>
                        <td class="name">간편인증_인증요청_주민번호_A</td>
                      </tr>
                      <tr>
                        <td class="num">5</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">주민번호 TypeB</td>
                        <td class="name">간편인증_인증요청_주민번호_B</td>
                      </tr>
                      <tr>
                        <td class="num">6</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">약관동의 TypeA</td>
                        <td class="name">간편인증_인증요청_약관동의_A</td>
                      </tr>
                      <tr>
                        <td class="num">7</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">약관동의 TypeB</td>
                        <td class="name">간편인증_인증요청_약관동의_B</td>
                      </tr>
                      <tr>
                        <td class="num">8</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">인증대기</td>
                        <td class="d4"></td>
                        <td class="name">간편인증_인증대기</td>
                      </tr>
                      <tr>
                        <td class="num">9</td>

                        <td class="d1"></td>
                        <td class="d2">SNS계정인증</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name">SNS계정인증</td>
                      </tr>
                      <tr>
                        <td class="num">10</td>
                        <td class="d1">팝업</td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">11</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- 모빌리언 -->
                <div v-else class="ia-tbl-wrap">
                  <table>
                    <thead>
                      <th>No</th>
                      <th>1 Depth</th>
                      <th>2 Depth</th>
                      <th>3 Depth</th>
                      <th>4 Depth</th>
                      <th>화면 명</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="num">1</td>
                        <td class="d1">공동인증서 로그인</td>
                        <td class="d2">인증서 없음</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">2</td>
                        <td class="d1"></td>
                        <td class="d2">인증서 목록</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">3</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">선택한 인증서 암호입력</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">4</td>
                        <td class="d1">인증서 관리</td>
                        <td class="d2">인증서 없음</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">5</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">인증서 신규발급</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">6</td>
                        <td class="d1"></td>
                        <td class="d2">인증서 목록</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">7</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">선택한 인증서(상세정보) 보기</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">8</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">인증서 삭제</td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">9</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">인증서 암호변경</td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">10</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3"></td>
                        <td class="d4">상세보기/간략보기</td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">11</td>
                        <td class="d1"></td>
                        <td class="d2">인증서 복사</td>
                        <td class="d3">인증서 가져오기</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">12</td>
                        <td class="d1"></td>
                        <td class="d2"></td>
                        <td class="d3">(인증서 선택 후)인증서 내보내기</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">13</td>
                        <td class="d1"></td>
                        <td class="d2">인증서 재발급 / 갱신</td>
                        <td class="d3">
                          (인증서 선택 후)새로운 인증서 암호입력
                        </td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">14</td>
                        <td class="d1"></td>
                        <td class="d2">인증서 폐기</td>
                        <td class="d3">(인증서 선택 후)현재 인증서 암호입력</td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">15</td>
                        <td class="d1">Alert 팝업</td>
                        <td class="d2">확인</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">16</td>
                        <td class="d1"></td>
                        <td class="d2">주의</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                      <tr>
                        <td class="num">17</td>
                        <td class="d1"></td>
                        <td class="d2">오류</td>
                        <td class="d3"></td>
                        <td class="d4"></td>
                        <td class="name"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CompProject",
  data() {
    return {
      projectList: [
        {
          idx: 1,
          name: "nexess",
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
</style>
