<template>
  <!-- PC/태블릿 -->
  <div class="modal project-detail">
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
