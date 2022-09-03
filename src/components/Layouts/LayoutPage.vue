<template>
  <div
    class="layout"
    :class="{ 'active-menu-right': $store.state.isRightMenuActive }"
  >
    <div class="bg-img">
      <div class="bg-img-overlay" />
    </div>
    <div class="rows">
      <div class="scroll-rows">
        <slot></slot>
        <BrandCards />
        <FooterMain />
      </div>
    </div>
  </div>
</template>

<script>
import BrandCards from "@/components/Pages/Home/brand/BrandCards";
import FooterMain from "@/components/Pages/Home/footer/FooterMain";
export default {
  name: "LayoutPage",
  components: {
    FooterMain,
    BrandCards,
  },
};
</script>

<style scoped lang="scss">
.bg-img {
  left: 0;
  right: 0;
  height: 400px;
  background-image: url("../../assets/img/bg.jpeg");
}
.rows {
  //margin-top: 15px;
}
.scroll-rows {
  height: calc(100vh - 70px);
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
.layout {
  transform: translateX(0px);
  transition: 600ms ease-in-out;
}
.active-menu-right {
  transform: translateX(-150px);
}
@media (min-width: 900px) {
  .scroll-rows {
    height: calc(100vh - 15px);
  }
}
</style>
