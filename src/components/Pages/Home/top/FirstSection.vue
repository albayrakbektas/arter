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
      <!--      <img-->
      <!--        class="profile-photo"-->
      <!--        src="../../../../assets/img/bektasalbayrak.jpg"-->
      <!--        alt="profile photo"-->
      <!--      />-->
    </div>
  </div>
</template>

<script>
import SlideCode from "@/components/Pages/Home/top/SlideCode";
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
  background-image: url("../../../../assets/img/home/bg.jpeg");
  left: 15px;
  right: 15px;
  height: 420px;
}
.row-container {
  display: grid;
  grid-template-rows: repeat(3, auto);
  height: calc(100% - 120px);
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
  background-color: #ff0000;
  padding: 5px 35px;
  filter: brightness(80%);
  height: 45px;
  color: #ffffff;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: 0.4s ease-in-out;
  &:hover {
    filter: brightness(100%);
    transform: translateY(-2px);
  }
}
.row {
  height: 420px;
}
@media (min-width: 900px) {
  .row {
    position: relative;
    margin: 60px 0 0;
  }
  .bg-img {
    bottom: 0;
    height: unset;
  }
  .row-container {
    justify-content: start;
    text-align: left;
    padding: 60px;
  }
  .router-button {
    justify-content: start;
    margin: unset;
    width: fit-content;
  }
  img {
    position: absolute;
    height: 100%;
    width: 360px;
    right: 30px;
    top: 0;
    bottom: 0;
  }
}
</style>
