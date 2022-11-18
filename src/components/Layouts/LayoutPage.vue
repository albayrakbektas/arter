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
        <!--        <BrandCards />-->
        <FooterMain />
      </div>
    </div>
  </div>
</template>

<script>
import FooterMain from "@/components/Pages/Home/footer/FooterMain";
export default {
  name: "LayoutPage",
  components: {
    FooterMain,
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
@keyframes load {
  0% {
    opacity: 0;
    scale: 0.96;
    //transform: translate3d(-10px, -10px, 0);
  }
  25% {
    opacity: 0.25;
    scale: 0.97;
    //transform: translate3d(-7.5px, -7.5px, 0);
  }
  50% {
    opacity: 0.5;
    scale: 0.98;
    //transform: translate3d(-5px, -5px, 0);
  }
  75% {
    opacity: 0.5;
    scale: 0.999;
    //transform: translate3d(-0.5px, -0.5px, 0);
  }
  100% {
    opacity: 1;
    scale: 1;
    //transform: translate3d(0px, 0px, 0px);
  }
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
  * {
    animation-delay: 2s;
    animation: 0.6s ease-in-out load;
  }
}
::-webkit-scrollbar {
  display: none;
}
.layout {
  transform: translateX(0px);
  transition: 600ms ease-in-out;
}
@media (min-width: 900px) {
  .scroll-rows {
    height: calc(100vh - 15px);
  }
  .active-menu-right {
    transform: translateX(-150px);
  }
}
</style>
