<template>
  <div class="row">
    <BrandCard v-for="(item, index) of brandList" :brand="item" :key="index" />
  </div>
</template>

<script>
import BrandCard from "@/components/Pages/Home/brand/BrandCard";
export default {
  name: "BrandCards",
  components: { BrandCard },
  data() {
    return {
      brandList: [
        {
          src: require("../../../../assets/img/signess.jpeg"),
          alt: "brand logo",
        },
        {
          src: require("../../../../assets/img/home/brand/2.png"),
          alt: "brand logo",
        },
        {
          src: require("../../../../assets/img/home/brand/3.png"),
          alt: "brand logo",
        },
        {
          src: require("../../../../assets/img/home/brand/4.png"),
          alt: "brand logo",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}
</style>
