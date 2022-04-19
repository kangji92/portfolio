<template>
  <!-- PC/태블릿 -->
  <div class="project-detail">
    <div v-for="project in projectList" :key="project.id" :class="project.name">
      <div class="container">
        <div class="header">
          <div class="header-inner"></div>
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
            <div class="mockup-wrap">
              <div class="mockup" :class="project.name"><span></span></div>
            </div>
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
                  - MobileWeb/App : Android 6.X / IOS 10.X
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
                <h2>{{ $t("project.artical_ttl_02") }}</h2>
              </div>
              <div class="guide-info"></div>
            </div>
          </div>
        </article>
        <section class="section-wrap">
          <article class="hiring-info">
            <div class="center">
              <div class="inner">
                <div class="ttl">
                  <h2>{{ $t("project.artical_ttl_03") }}</h2>
                  <p>Desktop / Tablet | Resolution 1366 | OnePage scroll</p>
                </div>
                <div class="visual-box">
                  <p class="visual__ttl">Part1 | SSO System 1차인증</p>
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
                <!--
                <div class="ttl">
                  <h2>{{ $t("project.artical_ttl_04") }}</h2>
                  <p>Part2 | SSO System 2차인증</p>
                </div>
                -->
                <div class="visual-box">
                  <p class="visual__ttl">Part2 | SSO System 2차인증</p>
                  <div class="mockup_sub" :class="project.name + 4">
                    <span></span>
                  </div>
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
          name: "lotte-event",
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

.project-detail {
  background: #fff;
  position: relative;
}
</style>
