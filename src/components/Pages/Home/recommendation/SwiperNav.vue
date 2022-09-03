<template>
  <div class="swiper-nav-container">
    <div @click="translate(-1)" ref="prev" class="swiper-nav swiper-prev">
      <i class="fa-solid fa-chevron-left swiper-prev"></i>
    </div>
    <div @click="translate(1)" ref="next" class="swiper-nav swiper-next">
      <i class="fa-solid fa-chevron-right swiper-next"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperNav",
  data() {
    return {};
  },
  mounted() {
    this.$refs.prev.classList.add("disabled-nav");
  },
  methods: {
    translate(nav) {
      if (nav === 1) {
        this.$refs.prev.classList.remove("disabled-nav");
        if (this.$store.state.xSlideIndex < 3) {
          this.$store.state.xSlideIndex++;
          this.$store.state.xPosition += 375;
          document.querySelector(
            ".scroll-hidden"
          ).style.transform = `translate3d(-${this.$store.state.xPosition}px, 0px, 0px)`;
        }
        if (this.$store.state.xSlideIndex === 3) {
          this.$refs.next.classList.add("disabled-nav");
        } else {
          this.$refs.next.classList.remove("disabled-nav");
        }
      } else if (nav === -1) {
        this.$refs.next.classList.remove("disabled-nav");
        if (this.$store.state.xSlideIndex > 0) {
          this.$store.state.xSlideIndex--;
          this.$store.state.xPosition -= 375;
          document.querySelector(
            ".scroll-hidden"
          ).style.transform = `translate3d(-${this.$store.state.xPosition}px, 0px, 0px)`;
        }
        if (this.$store.state.xSlideIndex === 0) {
          this.$refs.prev.classList.add("disabled-nav");
        } else {
          this.$refs.prev.classList.remove("disabled-nav");
        }
      }
      document
        .querySelector(".active-swiper-bullet")
        .classList.remove("active-swiper-bullet");
      document
        .querySelector(`[bullet-index='${this.$store.state.xSlideIndex}']`)
        .classList.add("active-swiper-bullet");
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-nav-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
}
.swiper-nav {
  margin-left: 15px;
  cursor: pointer;
  color: #8c8c8e;
}
</style>
