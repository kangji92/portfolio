<template>
  <!-- 모바일 -->
  <div class="modal project-detail">
    <div class="modal__overlay">
      <div class="modal__close">
        <button>
          <span></span>
        </button>
      </div>
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
                  <h1 v-html="$t('project.ttl_' + project.name)"></h1>
                  <span
                    class="sub-ttl"
                    v-html="$t('project.subttl_' + project.name)"
                  ></span>

                  <div class="project__info">
                    <div class="hash-group">
                      <ul>
                        <li><a href="#">#모바일웹</a></li>
                        <li><a href="#">#Vue.js</a></li>
                        <li><a href="#">#vue-router</a></li>
                        <li><a href="#">#다국어지원</a></li>
                        <li><a href="#">#보안솔루션</a></li>
                        <li><a href="#">#Sass(SCSS)</a></li>
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
                      <dt>웹 호환성 :</dt>
                      <dd>Android 6.X / IOS 10.X</dd>
                    </dl>
                    <dl class="project__desc">
                      <dt>해상도 범위 :</dt>
                      <dd>Mobile / Tablet(세로) : 320px ~ 800px</dd>
                    </dl>
                    <button class="btn__line" type="button">View Demo</button>
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
                </div>
              </div>
            </article>
            <section class="section-wrap">
              <article class="hiring-info">
                <div class="inner">
                  <div class="ttl">
                    <h2>Components</h2>
                  </div>
                  <div class="visual-box col">
                    <p class="visual__ttl">인증서 목록</p>
                    <div class="mockup_sub" :class="project.name + 1">
                      <span></span>
                    </div>
                    <div class="mockup_sub" :class="project.name + 2">
                      <span></span>
                    </div>
                  </div>
                  <div class="visual-box col">
                    <p class="visual__ttl">가져오기/내보내기</p>
                    <div class="mockup_sub" :class="project.name + 3">
                      <span></span>
                    </div>
                    <div class="mockup_sub" :class="project.name + 3">
                      <span></span>
                    </div>
                  </div>
                  <div class="visual-box col">
                    <p class="visual__ttl">인증서관리</p>
                    <div class="mockup_sub" :class="project.name + 4">
                      <span></span>
                    </div>
                    <div class="mockup_sub" :class="project.name + 5">
                      <span></span>
                    </div>
                    <div class="mockup_sub" :class="project.name + 6">
                      <span></span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section class="section-wrap">
              <div class="inner">
                <div class="ttl">
                  <h2>Information Architecture</h2>
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
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
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
          name: "mobilian",
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
