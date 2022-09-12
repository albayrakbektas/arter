<template>
  <div class="slider-row">
    <beko-carousel
      :navigation-enabled="true"
      :wrapperOverflow="'hidden'"
      :per-page-custom="[900, 2]"
    >
      <beko-slide v-for="(item, index) of cardImageList" :key="index">
        <CardImage :card="item" />
      </beko-slide>
    </beko-carousel>
  </div>
</template>

<script>
import BekoCarousel from "@/components/Carousel/BekoCarousel";
import BekoSlide from "@/components/Carousel/BekoSlide";
import CardImage from "@/components/Cards/CardImage";
export default {
  name: "CardImageSlider",
  components: { CardImage, BekoSlide, BekoCarousel },
  data() {
    return {
      cardImageList: [
        {
          imageSrc: require("../../../assets/img/single/1.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: true,
        },
        {
          imageSrc: require("../../../assets/img/single/7.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: true,
        },
        {
          imageSrc: require("../../../assets/img/single/4.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: true,
        },
        {
          imageSrc: require("../../../assets/img/single/5.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: true,
        },
        {
          imageSrc: require("../../../assets/img/single/4.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-row {
  margin: 0 15px;
}
</style>
