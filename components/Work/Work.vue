<template>
  <div>
    <div v-if="project" class="grid_container">
      <div class="__grid">
        <div class="col __left">
          <h1>{{ project.title }}</h1>
          <p>
            Website, UI/UX Design, Art Direction, Motion Design, Visual Design,
            Iconography, Illustrations, Blockchain, Financial service, Banking,
          </p>
          <a :href="project.website" target="_blank">Go To Website</a>
        </div>
        <div class="col __right">
          <p class="description">
            About the company the project was done for. We are a
            multi-disciplinary Digital Agency with a focus on interaction and a
            passion for creativity. We push the limits of our mind.
          </p>
          <span class="__spacer"></span>
          <p class="description">
            “We were thrilled to work with Ueno on our rebrand. We knew it would
            be a challenge to pull off a name change and new visual identity on
            a such a short timeline but the process the Ueno team led was very
            efficient and extremely collaborative.”
          </p>

          <div class="author_info">
            <div class="image_rapper"></div>
            <div class="text">
              <p class="name">Firstname Lastname</p>
              <p class="role">Designation. Company Name</p>
            </div>
          </div>
        </div>
      </div>
      <div class="__image_rapper">
        <img :src="`/images/works/${project.workImage}`" alt="" srcset="" />
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
    }
  },
  mounted() {
    const slug = this.$route.params.slug
    const thisProject = projects.getProject(slug)
    this.project = thisProject
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
            height: 50px;
            width: 50px;
            background: #c4c4c4;
            border-radius: 100vh;
            display: block;
            background-image: url('https://images.unsplash.com/photo-1511945863317-d60e146e9016?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjI0OTE4OHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=750&q=60');
            box-shadow: 0 0 10px rgba(121, 127, 136, 0.178);
            background-size: cover;
            background-position: center;
          }
          .text {
            margin: 0 15px;
            .name {
              font-weight: 700;
              font-size: 16px;
              margin-bottom: 4px;
            }
            .role {
              color: #7a7a7a;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  > .__image_rapper {
    margin-top: 100px;
    margin-bottom: 100px;
    box-shadow: 0 0 50px rgba(121, 127, 136, 0.178);
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
