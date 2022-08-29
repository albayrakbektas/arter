<template>
  <div class="home">
    <div class="bg-img">
      <div class="bg-img-overlay" />
    </div>
    <div class="rows">
      <div @scroll="scrollPage" class="scroll-rows">
        <FirstSection />
        <ExperienceCards />
        <MyServices />
        <PricePlans />
      </div>
    </div>
  </div>
</template>

<script>
import FirstSection from "@/components/Home/top/FirstSection";
import ExperienceCards from "@/components/Home/experience/ExperienceCards";
import MyServices from "@/components/Home/services/MyServices";
import PricePlans from "@/components/Home/prices/PricePlans";
export default {
  name: "HomeView",
  components: { PricePlans, MyServices, ExperienceCards, FirstSection },
  methods: {
    scrollPage() {
      console.log("selam");
    },
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
  height: calc(100vh - 70px);
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
</style>
