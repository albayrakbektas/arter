<template>
  <div class="row">
    <div class="bg-img">
      <div class="row-container">
        <h1>
          {{ card.h1Top }}
          <br v-if="card.isBreakLine" />
          {{ card.h1Bottom }}
        </h1>
        <p>{{ card.content }}</p>
        <slot></slot>
        <MainButton :button="button" />
      </div>
      <img
        v-if="card.isImg"
        class="profile-photo"
        src="../../assets/img/face-2.png"
        alt="profile photo"
      />
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/Pages/Publication/MainButton";
export default {
  name: "BgCard",
  components: { MainButton },
  props: {
    card: Object,
    button: Object,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 46px;
  font-family: Poppins, sans-serif;
  margin: 0;
}
.bg-img {
  background-image: url("../../assets/img/home/bg.jpeg");
  left: 30px;
  right: 30px;
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
  background-color: #ffc107;
  padding: 5px 35px;
  color: #20202a;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: 0.4s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
}
.row {
  height: 420px;
}
p {
  font-size: 16px;
  color: #fafafc;
  font-family: "Courier Prime", monospace;
}
@media (min-width: 900px) {
  .row {
    position: relative;
    margin: 60px 0 0;
  }
  .bg-img {
    left: 15px;
    right: 15px;
    bottom: 0;
    height: unset;
  }
  .row-container {
    justify-content: center;
    justify-items: center;
    text-align: center;
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
