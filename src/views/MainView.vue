<template>
  <div class="main-container">
    <div class="main">
      <MenuLeft />
      <div class="main-content">
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
  height: 100vh;
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
  height: 100vh;
  padding-right: 0;
  padding-top: 70px;
}
</style>
