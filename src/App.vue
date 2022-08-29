<template>
  <div id="app">
    <LandingPage v-if="$store.state.loadingPage" />
    <div class="app-content" v-else>
      <MainHeader />
      <MainView />
    </div>
  </div>
</template>

<style lang="scss">
.app-content {
  width: 100vw;
  position: relative;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  position: relative;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
  padding: 0 30px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: #fafafc;
  margin-bottom: 0;
  line-height: 1.2;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
}
h6 {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: #8c8c8e;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
}
.menu-container {
  position: absolute;
  z-index: 999;
  top: 0;
  height: 100vh;
  width: 70vw;
  background-color: #20202a;
}
.menu-container-icon-header {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  transition: 600ms ease-in-out;
  opacity: 1;
  span {
    position: relative;
    color: #fafafc;
  }
}
.opacity-zero {
  opacity: 0 !important;
}
.menu-container-header {
  height: 70px;
}
.menu-container-footer {
  position: absolute;
  z-index: 9999;
  left: 0;
  bottom: 0;
  right: 0;
}
.bg-linear {
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
}
.bg-img {
  overflow: hidden;
  position: absolute;
  top: 0;
  background-position: center;
  height: 400px;
  background-size: cover;
}
.bg-img-overlay {
  position: relative;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(30, 30, 40, 0.93) 0%,
    rgba(30, 30, 40, 0.96) 70%,
    rgba(30, 30, 40, 0.99) 80%,
    #1e1e28 100%
  );
}
.row {
  display: grid;
  align-items: center;
  justify-content: center;
}
.p-lr-12 {
  padding-left: 12px;
  padding-right: 12px;
}
</style>

<script>
import LandingPage from "@/views/LandingPage";
import MainView from "@/views/MainView";
import MainHeader from "@/components/MainHeader";
export default {
  components: { MainHeader, MainView, LandingPage },
  methods: {
    changeMenuVisiblity(direction) {
      if (direction === "left") {
        this.$store.state.isLeftMenuActive =
          !this.$store.state.isLeftMenuActive;
      } else if (direction === "right") {
        this.$store.state.isRightMenuActive =
          !this.$store.state.isRightMenuActive;
      }
    },
  },
};
</script>
