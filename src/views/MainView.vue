<template>
  <div class="main-container">
    <div class="main">
      <!--      <div class="menu-left-parent">-->
      <MenuLeft />
      <!--      </div>-->
      <!--      <div class="main-content-parent">-->
      <router-view />
      <!--      </div>-->
      <MenuRight />
    </div>
  </div>
</template>

<script>
import MenuLeft from "@/components/MenuLeft/MenuLeft";
import MenuRight from "@/components/MenuRight/MenuRight";
export default {
  name: "MainView",
  components: { MenuRight, MenuLeft },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
</style>
