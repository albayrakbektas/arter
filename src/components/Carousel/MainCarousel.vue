<template>
  <div class="carousel-main-container">
    <div class="carousel-main"></div>
  </div>
</template>

<script>
export default {
  name: "MainCarousel",
  props: {
    carousel: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
  .carousel-card-img {
    width: calc(100% - 15px);
    margin-right: 15px;
  }
}
</style>
