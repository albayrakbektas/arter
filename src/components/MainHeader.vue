<template>
  <div class="header-container"></div>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped lang="scss">
.header-container {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100vw;
  background-color: #20202a;
}
</style>
