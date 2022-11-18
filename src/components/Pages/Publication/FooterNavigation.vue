<template>
  <div class="navigation-footer">
    <router-link @click.native="changeSinglePage" to="#" class="link-yellow">
      <i class="fa-solid fa-chevron-left"></i>
      {{ card.prevLink }}
    </router-link>
    <router-link
      v-if="$store.state.isDesktopView"
      :to="card.allLink.href"
      @click.native="setGrid"
      class="all-pub-link"
    >
      {{ card.allLink.content }}
    </router-link>
    <router-link @click.native="changeSinglePage" to="#" class="link-yellow">
      {{ card.nextLink }}
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterNavigation",
  props: {
    card: Object,
  },
  methods: {
    changeSinglePage() {
      console.log("s");
      this.$store.state.layoutGrid === "single-project"
        ? (this.$store.state.layoutGrid = "single-project-two")
        : (this.$store.state.layoutGrid = "single-project");
      document.querySelector(".publication-header").scrollIntoView();
    },
    setGrid() {
      this.$store.state.layoutGrid = "three-column-grid";
      this.$router.push(this.$props.card.allLink.route);
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
  padding: 30px;
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
    color: #ff0000;
  }
}
@media (min-width: 900px) {
  .navigation-footer {
    grid-template-columns: repeat(3, auto);
    margin-bottom: 15px;
  }
}
</style>
