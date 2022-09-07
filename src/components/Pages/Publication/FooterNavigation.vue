<template>
  <div class="navigation-footer">
    <router-link to="#" class="link-yellow">
      <i class="fa-solid fa-chevron-left"></i>
      previous post
    </router-link>
    <router-link v-if="$store.state.isDesktopView" to="#" class="all-pub-link">
      all publications
    </router-link>
    <router-link to="#" class="link-yellow">
      previous post
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterNavigation",
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
    color: #ffc107;
  }
}
@media (min-width: 900px) {
  .navigation-footer {
    grid-template-columns: repeat(3, auto);
    margin-bottom: 15px;
  }
}
</style>
