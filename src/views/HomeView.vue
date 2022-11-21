<template>
  <LayoutPage>
    <FirstSection />
    <MyServices />
    <PortfolioTwoColumn />
    <!--    <RecommendationCards :header="header" />-->
  </LayoutPage>
</template>

<script>
import FirstSection from "@/components/Pages/Home/top/FirstSection";
import MyServices from "@/components/Pages/Home/services/MyServices";
import LayoutPage from "@/components/Layouts/LayoutPage";
import PortfolioTwoColumn from "@/components/Pages/Portfolio/PortfolioTwoColumn";
export default {
  name: "HomeView",
  components: {
    PortfolioTwoColumn,
    LayoutPage,
    MyServices,
    FirstSection,
  },
  data() {
    return {
      header: {
        title: "Recommendations",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.bg-img {
  left: 0;
  right: 0;
  background-image: url("../assets/img/home/bg.jpeg");
}
.scroll-rows {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(0px, 0px, 0px);
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
}
::-webkit-scrollbar {
  display: none;
}
.home {
  transform: translateX(0px);
  transition: 600ms ease-in-out;
}
@media (min-width: 900px) {
  .active-menu-right {
    transform: translateX(-150px);
  }
}
</style>
