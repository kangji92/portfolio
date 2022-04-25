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
                    <li><a href="#">#Vue-cli</a></li>
                    <li><a href="#">#vue-router</a></li>
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
                <!-- <button class="btn__line" type="button">View Site</button>-->
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
                  - PC : Chrome, MSEdge, Firefox, IE11, Safari <br />
                  - Tablet/Mobile : Android 6.X / IOS 10.X
                </dd>
              </dl>
              <dl class="project__desc">
                <dt>해상도 범위</dt>
                <dd>
                  - PC/ Tablet(가로) : 801px ~ 1920px<br />
                  - Mobile/ Tablet(세로) : 280px ~ 800px
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
                <div class="style-guide fonts">
                  <div class="sub-ttl">
                    <h4>Fonts</h4>
                  </div>
                  <div class="fonts-wrap">
                    <ul>
                      <li><p>교보생명 Font SemiBold</p></li>
                      <li><p>교보생명 Font Bold</p></li>
                      <li><p>교보생명 Font Reguler</p></li>
                      <li><p>교보생명 Font Lignt</p></li>
                    </ul>
                  </div>
                </div>
                <div class="style-guide icons">
                  <div class="sub-ttl">
                    <h4>Icons</h4>
                  </div>
                  <div class="icons-wrap">
                    <!--
                    <ul>
                      <li>
                        <img
                          src="@/assets/images/projects/initech/kyobo/intergration/icons/ico_waitstate_green.png"
                          alt=""
                        />
                      </li>
                      <li class="bg">
                        <img
                          src="@/assets/images/projects/initech/kyobo/intergration/icons/item_icon_01.png"
                          alt=""
                        />
                      </li>
                      <li class="bg">
                        <img
                          src="@/assets/images/projects/initech/kyobo/intergration/icons/item_icon_02.png"
                          alt=""
                        />
                      </li>
                    </ul>-->
                    <ul>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/kyobo/indv/icons/ico_step_1.png"
                            alt="1단계 아이콘"
                        /></i>
                      </li>
                      <li>
                        <i
                          ><img
                            src="@/assets/images/projects/initech/kyobo/indv/icons/ico_step_2.png"
                            alt="2단계 아이콘"
                        /></i>
                      </li>
                      <li>
                        <i>
                          <img
                            src="@/assets/images/projects/initech/kyobo/indv/icons/ico_step_3.png"
                            alt="3단계 아이콘"
                        /></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <section class="section-wrap">
          <article class="hiring-info components">
            <div class="inner">
              <div class="ttl">
                <h2>Components</h2>
                <p>Responsive | Desktop / Tablet / Mobile | 32 Screens</p>
              </div>
              <h3 class="visual__ttl">Individual UI</h3>
              <div class="visual-box type-mix pc">
                <div class="mockup_sub" :class="project.name + 1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="visual-box type-mix mo">
                <div class="mockup_sub" :class="project.name + 2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <!-- <p class="visual__ttl">Mobile</p>-->
              </div>
              <div class="visual-box type-mix pc">
                <div class="mockup_sub" :class="project.name + 4">
                  <span></span>
                  <span></span>
                </div>
                <!-- <p class="visual__ttl">Mobile</p>-->
              </div>
              <div class="visual-box type-mix mo">
                <div class="mockup_sub" :class="project.name + 3">
                  <span></span>
                  <span></span>
                </div>
                <!-- <p class="visual__ttl">Mobile</p>-->
              </div>
            </div>
          </article>
          <!-- 통합UI -->
          <article class="hiring-info components">
            <h3 class="visual__ttl">Intergration UI</h3>
            <div class="visual-box type-mix">
              <p class="visual__ttl">Main</p>
              <div class="mockup_sub" :class="project.name + 5">
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="visual-box type-mix pc">
              <!-- <p class="visual__ttl">Mobile</p>-->
              <div class="mockup_sub" :class="project.name + 6">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="visual-box type-mix mo">
              <!-- <p class="visual__ttl">Mobile</p>-->
              <div class="mockup_sub" :class="project.name + 7">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="visual-box type-mix pc">
              <!-- <p class="visual__ttl">Mobile</p>-->
              <div class="mockup_sub" :class="project.name + 8">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
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
          name: "kyobo",
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
