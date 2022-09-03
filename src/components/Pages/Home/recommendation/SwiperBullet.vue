<template>
  <div class="swiper-bullet-container">
    <span
      v-for="item in cardList"
      class="swiper-bullet"
      :id="item.index.toString()"
      :key="item.index.toString()"
      @click="translate(item.index.toString())"
      :bullet-index="item.index.toString()"
    ></span>
  </div>
</template>

<script>
export default {
  name: "SwiperBullet",
  props: {
    cardList: Array,
  },
  mounted() {
    document
      .querySelector(".swiper-bullet")
      .classList.add("active-swiper-bullet");
  },
  methods: {
    translate(e) {
      this.$store.state.xSlideIndex = e;
      document
        .querySelector(".active-swiper-bullet")
        .classList.remove("active-swiper-bullet");
      document
        .querySelector(`[bullet-index='${e.toString()}']`)
        .classList.add("active-swiper-bullet");
      this.$store.state.xPosition = e * 373;
      document.querySelector(
        ".scroll-hidden"
      ).style.transform = `translate3d(-${e * 373}px, 0px, 0px)`;
      if (e === "3") {
        document.querySelector(".swiper-next").classList.add("disabled-nav");
      } else {
        document.querySelector(".swiper-next").classList.remove("disabled-nav");
      }
      if (e === "0") {
        document.querySelector(".swiper-prev").classList.add("disabled-nav");
      } else {
        document.querySelector(".swiper-prev").classList.remove("disabled-nav");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-bullet-container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-self: center;
  justify-content: center;
}
.swiper-bullet {
  height: 4px;
  width: 8px;
  border-radius: 5px;
  background-color: #8c8cbf;
  margin-right: 5px;
}
.active-swiper-bullet {
  background: #ffc107;
  width: 20px;
}
</style>
