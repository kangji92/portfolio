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
                <!--     <button class="btn__line" type="button">View Site</button>-->
              </div>
            </div>
            <div class="mockup-wrap">
              <div class="mockup pc" :class="project.name"><span></span></div>
              <div class="mockup mo" :class="project.name"><span></span></div>
            </div>
          </div>
        </div>
        <div class="hiring-info">
          <div class="inner">
            <div class="col">
              <span class="contour"></span>
              <div class="ttl">
                <h2>{{ $t("project.artical_ttl_01") }}</h2>
              </div>
              <dl class="project__desc">
                <dt>인코딩 :</dt>
                <dd>UTF-8</dd>
              </dl>
              <dl class="project__desc">
                <dt>SCM :</dt>
                <dd>SVN</dd>
              </dl>
              <dl class="project__desc">
                <dt>Server :</dt>
                <dd>Tomcat</dd>
              </dl>
              <dl class="project__desc">
                <dt>UI Guide Tool :</dt>
                <dd>Photoshop</dd>
              </dl>
              <dl class="project__desc">
                <dt>웹 호환성</dt>
                <dd>
                  - PC : Chrome, MSEdge, Firefox, IE11, Safari <br />
                  - Tablet/Mobile : Android 6.X / IOS 10.X
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
                    <h4>Font</h4>
                  </div>
                  <div class="fonts-wrap">
                    <ul>
                      <li><p>NotoSansKr</p></li>
                      <li><p>NotoSansKr</p></li>
                      <li><p>NotoSansKr</p></li>
                      <li><p>NotoSansKr</p></li>
                      <li><p>NotoSansKr</p></li>
                    </ul>
                  </div>
                </div>
                <div class="style-guide icons">
                  <div class="sub-ttl">
                    <h4>Icon</h4>
                  </div>
                  <div class="icons-wrap">
                    <ul>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/inihub/icons/ico_cloud.png"
                            alt=""
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/inihub/icons/ico_public.png"
                            alt=""
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/inihub/icons/ico_easyauth.png"
                            alt=""
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/inihub/icons/ico_oauth.png"
                            alt=""
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/inihub/icons/ico_id.png"
                            alt=""
                        /></i>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="@/assets/images/projects/initech/inihub/icons/ico_step_01.png"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/projects/initech/inihub/icons/ico_step_02.png"
                          alt="아이콘_2단계"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/images/projects/initech/inihub/icons/ico_step_03.png"
                          alt="아이콘_3단계"
                        />
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
              <div class="center">
                <div class="ttl">
                  <h2>Pages</h2>
                  <p>Desktop</p>
                </div>
                <div class="visual-box">
                  <p class="visual__ttl">Main</p>
                  <div class="mockup_sub" :class="project.name + 1">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="hiring-info">
            <div class="inner">
              <div class="visual-box pc">
                <p class="visual__ttl">이니패스 소개</p>
                <div class="mockup_sub" :class="project.name + 2">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section class="section-wrap">
          <article class="hiring-info">
            <div class="inner">
              <div class="center">
                <div class="ttl">
                  <h2>Pages</h2>
                  <p>Mobile</p>
                </div>
                <div class="visual-box">
                  <!--<p class="visual__ttl"></p>-->
                  <div class="mockup_sub" :class="project.name + 3">
                    <span></span>
                    <span></span>
                    <span></span>
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
          name: "inipass",
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
