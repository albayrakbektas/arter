<template>
  <div
    class="home"
    :class="{ 'active-menu-right': $store.state.isRightMenuActive }"
  >
    <div class="bg-img">
      <div class="bg-img-overlay" />
    </div>
    <div class="rows">
      <div @scroll="scrollPage" class="scroll-rows">
        <FirstSection />
        <ExperienceCards />
        <MyServices />
        <PricePlans />
        <RecommendationCards />
        <BrandCards />
        <FooterMain />
      </div>
    </div>
  </div>
</template>

<script>
import FirstSection from "@/components/Home/top/FirstSection";
import ExperienceCards from "@/components/Home/experience/ExperienceCards";
import MyServices from "@/components/Home/services/MyServices";
import PricePlans from "@/components/Home/prices/PricePlans";
import RecommendationCards from "@/components/Home/recommendation/RecommendationCards";
import BrandCards from "@/components/Home/brand/BrandCards";
import FooterMain from "@/components/Home/footer/FooterMain";
export default {
  name: "HomeView",
  components: {
    FooterMain,
    BrandCards,
    RecommendationCards,
    PricePlans,
    MyServices,
    ExperienceCards,
    FirstSection,
  },
  methods: {
    scrollPage() {},
  },
};
</script>

<style scoped lang="scss">
.bg-img {
  left: 0;
  right: 0;
  background-image: url("../assets/img/home/bg.jpeg");
}
.rows {
  height: calc(100vh - 15px);
  margin-top: 15px;
}
.scroll-rows {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(0px, 0px, 0px);
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  display: none;
}
.home {
  transform: translateX(0px);
  transition: 600ms ease-in-out;
}
.active-menu-right {
  transform: translateX(-150px);
}
</style>
