<template>
  <div class="navigation-footer">
    <div @click="changeProject(-1)" class="link-yellow">
      <i class="fa-solid fa-chevron-left"></i>
      {{ card.prevLink }}
    </div>
    <router-link
      v-if="$store.state.isDesktopView"
      to="/portfolio"
      class="all-pub-link"
    >
      {{ card.allLink.content }}
    </router-link>
    <div @click="changeProject(1)" class="link-yellow">
      {{ card.nextLink }}
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNavigation",
  props: {
    card: Object,
  },
  methods: {
    currentProject(project) {
      return project.id && project.id === this.$route.params.project;
    },
    changeProject(direction) {
      let length = this.$store.state.portfolioCards.length;
      let index =
        this.$store.state.portfolioCards.findIndex(this.currentProject) +
        direction;
      if (index === -1) {
        return;
      } else if (index >= length) {
        index = 0;
      }
      this.$store.state.detailedProject =
        this.$store.state.portfolioCards[index];
      this.$router.replace({
        name: "project",
        params: {
          project: this.$store.state.detailedProject.title.toLowerCase(),
        },
      });
      document.querySelector(".publication-header").scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-footer {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px 15px;
  a {
    font-size: 10px;
    letter-spacing: 1.5px;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.4s ease-in-out;
    &:hover {
      i.fa-chevron-left {
        transform: translateX(-4px);
      }
      i.fa-chevron-right {
        transform: translateX(4px);
      }
    }
  }
  .all-pub-link {
    color: #8c8c8e;
    &:hover {
      color: #fafafc;
    }
  }
  i {
    transition: 0.4s ease-in-out;
  }
  .link-yellow {
    color: #ffc107;
    cursor: pointer;
    i {
      vertical-align: middle;
    }
  }
}
@media (min-width: 900px) {
  .navigation-footer {
    grid-template-columns: repeat(3, auto);
    margin-bottom: 15px;
  }
}
</style>
