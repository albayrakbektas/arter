<template>
  <div class="slider-row">
    <beko-carousel
      :navigation-enabled="true"
      :wrapperOverflow="'hidden'"
      :per-page-custom="perPageCustom || [[900, 2]]"
      :scroll-per-page="false"
      :autoplay="true"
      :loop="true"
    >
      <beko-slide
        v-for="(item, index) of cardList || cardImageList"
        :key="index"
      >
        <div class="pd">
          <CardImage :card="item" />
        </div>
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
  props: {
    cardList: Array,
    perPageCustom: Array,
  },
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
.pd {
  padding: 0 15px 0 0;
}
</style>
