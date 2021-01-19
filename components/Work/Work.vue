<template>
  <div>
    <div v-if="project" class="grid_container">
      <div class="__grid">
        <div class="col __left">
          <h1>{{ project.title }}</h1>
          <p>
            <span
              v-for="(subTitle, key) in project.subTitles"
              :key="key"
              class="_subTitle"
            >
              {{ subTitle }}
            </span>
          </p>
          <a :href="project.website" target="_blank">Go To Website</a>
        </div>
        <div v-if="project.pageContent" class="col __right">
          <p v-if="project.pageContent.description" class="description">
            {{ project.pageContent.description }}
          </p>
          <span v-if="project.pageContent.description" class="__spacer"></span>
          <p v-if="project.pageContent.clientReview" class="description">
            {{ project.pageContent.clientReview }}
          </p>
          <div class="author_info">
            <div class="image_rapper">
              <img :src="project.pageContent.author.image" alt="" srcset="" />
            </div>
            <div class="text">
              <p class="name">{{ project.pageContent.author.name }}</p>
              <!-- <p class="role">Designation. Company Name</p> -->
            </div>
          </div>
        </div>
      </div>

      <div class="mini_tab">
        <button
          class="_btn"
          :class="{ active: activeTab === 'web' }"
          @click="updateActiveTab('web')"
        >
          Website Development
        </button>
        <button
          v-if="project.iframe"
          class="_btn"
          :class="{ active: activeTab === 'mobile' }"
          @click="updateActiveTab('mobile')"
        >
          Mobile App Prototype
        </button>
      </div>

      <div class="__image_rapper">
        <img
          v-show="activeTab === 'web'"
          :src="`/images/works/${project.workImage}`"
          alt=""
          srcset=""
        />
        <iframe
          v-if="project.iframe"
          v-show="activeTab === 'mobile'"
          style="border: 1px solid rgba(0, 0, 0, 0.1)"
          width="800"
          height="450"
          :src="project.iframe"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '~/utils/projects'

export default {
  data() {
    return {
      project: null,
      activeTab: 'web',
    }
  },
  mounted() {
    const slug = this.$route.params.slug
    const thisProject = projects.getProject(slug)
    this.project = thisProject
  },
  methods: {
    updateActiveTab(tabType) {
      return (this.activeTab = tabType)
    },
  },
  head() {
    const projectTitle = this.project?.title || ''
    return { title: `Orb Digital - ${projectTitle}` }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';

.grid_container {
  padding-right: 140px;

  @include mobile {
    padding-right: 0;
    &:before {
      content: '';
      height: 100vh;
      position: fixed;
      width: 100vw;
      left: 0;
      background: linear-gradient(#0e0c0bf6, #161311f6 70.71%),
        linear-gradient(#533d3df6, #ac7c64f6 70.71%);
      top: 0;
      z-index: -1;
    }
  }

  .__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 130px;
    @include mobile {
      grid-template-columns: 1fr;
    }
    .col {
      &.__left {
        margin-bottom: 30px;
        h1 {
          font-size: 50px;
        }
        p {
          padding: 30px 0 50px 0;
          line-height: 1.8;
          max-width: 400px;
          font-size: 14px;
        }
        a {
          color: inherit;
          text-decoration: none;
          font-weight: 900;
          font-size: 18px;
          &:hover {
            text-decoration: underline;
          }
        }
        ._subTitle {
          margin-right: 4px;
          display: inline-flex;
          &:after {
            content: ',';
          }
          &:last-of-type {
            &:after {
              content: '.';
            }
          }
        }
      }
      &.__right {
        .description {
          margin-top: 30px;
          margin-bottom: 30px;
          line-height: 1.8;
          &:nth-child(1) {
            margin-top: 0;
          }
        }
        .__spacer {
          height: 2px;
          background: #ffe902;
          width: 50px;
          display: block;
        }
        .author_info {
          display: flex;
          align-items: center;
          .image_rapper {
            height: 40px;
            background: #c4c4c4;
            border-radius: 100vh;
            display: block;
            box-shadow: 0 0 10px rgba(121, 127, 136, 0.178);
            background-size: cover;
            background-position: center;
            img {
              height: 100%;
            }
          }
          .text {
            margin: 0 15px;
            .name {
              font-weight: 700;
              font-size: 17px;
            }
            .role {
              margin-top: 4px;
              color: #7a7a7a;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  > .__image_rapper {
    margin-bottom: 100px;
    box-shadow: 0 0 50px rgba(121, 127, 136, 0.178);
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    img,
    iframe {
      width: 100%;
    }
    iframe {
      min-height: 90vh;
    }
  }
  .mini_tab {
    margin-top: 100px;
    margin-bottom: 40px;

    ._btn {
      font-size: 16px;
      margin-right: 30px;
      opacity: 0.7;
      cursor: pointer;

      @include mobile {
        color: #fff;
      }

      &.active {
        font-weight: 600;
        opacity: 1;
      }
    }
  }
}
</style>
