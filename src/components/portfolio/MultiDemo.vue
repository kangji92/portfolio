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
                    <li><a href="#">#반응형웹</a></li>
                    <li><a href="#">#다국어지원</a></li>
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
              </div>
            </div>
            <div class="mockup-wrap">
              <div class="mockup pc" :class="project.name"><span></span></div>
              <div class="mockup mo" :class="project.name"><span></span></div>
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
                <dt>Cloud Service :</dt>
                <dd>Bitbucket</dd>
              </dl>
              <dl>
                <dt>Server :</dt>
                <dd>Tomcat</dd>
              </dl>
              <dl>
                <dt>UI Guide Tool :</dt>
                <dd>Photoshop</dd>
              </dl>
              <dl class="project__desc">
                <dt>Details</dt>
                <dd>- 다국어 지원<br /></dd>
              </dl>
              <dl class="project__desc">
                <dt>웹 호환성</dt>
                <dd>
                  - PC : Chrome, Firefox, IE11, Safari <br />
                  - Tablet/Mobile : Android 6.X / IOS 10.X
                </dd>
              </dl>
              <dl class="project__desc">
                <dt>해상도 범위</dt>
                <dd>
                  - PC/ Tablet(가로) : 801px ~ 1920px<br />
                  - Mobile / Tablet(세로) : 320px ~ 800px
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
                          src="@/assets/images/projects/initech/demo/icons/ico_certi.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_fing.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_fingerprnt_01.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_fingerprnt_02.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_id.png"
                          alt=""
                      /></i>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_oauth_01.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i
                        ><img
                          src="@/assets/images/projects/initech/demo/icons/ico_oauth_02.png"
                          alt=""
                        />
                      </i>
                    </li>
                    <li>
                      <i
                        ><img
                          src="@/assets/images/projects/initech/demo/icons/ico_pattern.png"
                          alt=""
                        />
                      </i>
                    </li>
                    <li>
                      <i
                        ><img
                          src="@/assets/images/projects/initech/demo/icons/ico_pattern_01.png"
                          alt=""
                        />
                      </i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_pattern_02.png"
                          alt=""
                      /></i>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_pin.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_pin_01.png"
                          alt=""
                        />
                      </i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_pin_02.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_success.png"
                          alt=""
                      /></i>
                    </li>
                    <li>
                      <i>
                        <img
                          src="@/assets/images/projects/initech/demo/icons/ico_error.png"
                          alt=""
                      /></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <section class="section-wrap">
          <div class="inner">
            <article class="hiring-info components">
              <div class="ttl">
                <h2>Components</h2>
              </div>
              <h3 class="visual__ttl">Main Page</h3>
              <div class="visual-box col">
                <p class="visual__ttl">PC</p>
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
            <article class="hiring-info components">
              <!--<h3 class="visual__ttl">Service</h3>-->
              <div class="visual-box">
                <!--<p class="visual__ttl">PC</p>-->
                <div class="mockup_sub" :class="project.name + 3">
                  <span></span>
                  <span></span>
                </div>
                <div class="mockup_sub" :class="project.name + 4">
                  <span></span>
                  <span></span>
                </div>
                <div class="mockup_sub" :class="project.name + 5">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>
            <article class="hiring-info components">
              <!--<h3 class="visual__ttl">Certficate</h3>-->
              <div class="visual-box">
                <!--<p class="visual__ttl">PC</p>-->
                <div class="mockup_sub" :class="project.name + 6">
                  <span></span>
                  <span></span>
                </div>
                <div class="mockup_sub" :class="project.name + 7">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>
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
