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
  // mounted() {
  //   this.translate();
  // },
  // beforeDestroy() {
  //   this.translate();
  // },
  methods: {
    translate(nav) {
      const activeBullet = document.querySelector(".active-swiper-bullet");
      const bulletIndex = activeBullet.getAttribute("bullet-index");
      console.log(bulletIndex);
      if (bulletIndex === "3") {
        this.$refs.next.classList.add("disabled-nav");
      } else {
        this.$refs.prev.classList.remove("disabled-nav");
      }
      if (bulletIndex === "0") {
        this.$refs.prev.classList.add("disabled-nav");
      } else {
        this.$refs.prev.classList.remove("disabled-nav");
      }
      if (nav === 1) {
        document.querySelector(
          ".scroll-hidden"
        ).style.transform = `translate3d(-${
          bulletIndex * 375 + 375
        }px, 0px, 0px)`;
      } else {
        document.querySelector(
          ".scroll-hidden"
        ).style.transform = `translate3d(-${
          bulletIndex * 375 - 375
        }px, 0px, 0px)`;
      }
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
