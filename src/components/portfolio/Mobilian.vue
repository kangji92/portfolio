<template>
  <!-- PC/태블릿 -->
  <div class="project-detail">
    <div v-for="project in projectList" :key="project.id" :class="project.name">
      <div class="container">
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
                    <li><a href="#">#vue-cli</a></li>
                    <li><a href="#">#Sass(SCSS)</a></li>
                    <li><a href="#">#javascript</a></li>
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
                <router-link
                  tag="a"
                  class="link"
                  to="/portfolio/portfolio/mobilian/ia"
                  >View Demo</router-link
                >
                <!-- <button class="btn__line" type="button">View Site</button>-->
              </div>
            </div>
            <div class="mockup" :class="project.name"><span></span></div>
          </div>
        </div>
        <div class="hiring-info">
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
                <dt>UI Guide Tool :</dt>
                <dd>Zeplin, Photoshop</dd>
              </dl>
              <dl class="project__desc">
                <dt>Details</dt>
                <dd>
                  - Vuex 상태관리 <br />
                  - i18n 다국어 지원<br />
                  - Vue-router 라우팅 기능<br />
                  - Sass(SCSS)
                </dd>
              </dl>
              <dl class="project__desc">
                <dt>웹 호환성</dt>
                <dd>
                  - Mobile : Android 6.X / IOS 10.X <br />
                  - Tablet : Android 6.X / IOS 10.X
                </dd>
              </dl>
              <dl class="project__desc">
                <dt>해상도 범위</dt>
                <dd>- Mobile/Tablet : 280px ~ 820px</dd>
              </dl>
            </div>
            <div class="col">
              <span class="contour"></span>
              <div class="ttl">
                <h2>{{ $t("project.artical_ttl_02") }}</h2>
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
                <div class="style-guide fonts">
                  <div class="sub-ttl">
                    <h4>Fonts</h4>
                  </div>
                  <div class="fonts-wrap">
                    <ul>
                      <li><p>노토산스 NotoSansKr 700</p></li>
                      <li><p>노토산스 NotoSansKr 600</p></li>
                      <li><p>노토산스 NotoSansKr 500</p></li>
                      <li><p>노토산스 NotoSansKr 400</p></li>
                      <li><p>노토산스 NotoSansKr 300</p></li>
                    </ul>
                  </div>
                </div>
                <div class="style-guide icons">
                  <div class="sub-ttl">
                    <h4>Icons</h4>
                  </div>
                  <div class="icons-wrap">
                    <ul>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/media_select.png"
                            alt="아이콘패키지"
                        /></i>
                      </li>
                    </ul>
                    <ul>
                      <li class="big">
                        <i class="big">
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/ico_cert_export.png"
                            alt="내보내기 아이콘"
                        /></i>
                      </li>
                      <li class="big">
                        <i class="big">
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/ico_cert_import.png"
                            alt="가져오기 아이콘"
                        /></i>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/ico_cert_01.png"
                            alt="아이콘"
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/ico_cert_02.png"
                            alt="아이콘"
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/ico_cert_03.png"
                            alt="아이콘"
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/mobilian/icons/ico_cert_04.png"
                            alt="아이콘"
                        /></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="section-wrap">
          <article class="hiring-info components">
            <div class="inner">
              <div class="ttl">
                <h2>Components</h2>
                <p>Mobile / Tablet | Resolution 820 | 17 pages</p>
              </div>
              <div class="visual-box col">
                <p class="visual__ttl">인증서 목록</p>
                <div class="mockup_sub" :class="project.name + 1">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="visual-box col">
                <p class="visual__ttl">인증서 가져오기/내보내기</p>
                <div class="mockup_sub" :class="project.name + 2">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="visual-box">
                <p class="visual__ttl">인증서관리</p>
                <div class="mockup_sub" :class="project.name + 3">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </article>
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
@import "@/assets/scss/main";
@import "@/assets/scss/pages/_prj-detail";
</style>
