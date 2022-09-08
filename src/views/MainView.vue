<template>
  <div class="main-container">
    <div class="main">
      <MenuLeft />
      <div
        class="main-content"
        :class="{ 'onepage-main-content': $store.state.isOnePage }"
      >
        <router-view />
      </div>
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
.main-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: #1e1e28;
}
.main {
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.main-content {
  position: relative;
  width: 100vw;
  padding-top: 70px;
}
@media (min-width: 900px) {
  .main-content {
    padding-top: 0 !important;
    padding-right: 80px;
    height: calc(100vh - 30px);
  }
  .onepage-main-content {
    padding-right: 0 !important;
  }
}
</style>
