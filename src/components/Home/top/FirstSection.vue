<template>
  <div class="row">
    <div class="bg-img">
      <div class="row-container">
        <h1>
          Discover my Amazing
          <br />
          Art Space!
        </h1>
        <SlideCode />
        <router-link class="router-button" to="#">
          <span>EXPLORE NOW</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SlideCode from "@/components/Home/top/SlideCode";
export default {
  name: "FirstSection",
  components: { SlideCode },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 46px;
  font-family: Poppins, sans-serif;
}
.bg-img {
  background-image: url("../../../assets/img/home/bg.jpeg");
  left: 15px;
  right: 15px;
}
.row-container {
  display: grid;
  grid-template-rows: repeat(3, auto);
  padding: 60px 30px;
  text-align: center;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(15%, rgba(45, 45, 58, 0.9)),
    color-stop(50%, rgba(45, 45, 58, 0.7)),
    to(rgba(43, 43, 53, 0.7))
  );
}
.router-button {
  background-color: #ffc107;
  padding: 15px 35px;
  color: #20202a;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.row {
  height: 400px;
}
</style>
