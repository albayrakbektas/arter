<template>
  <div ref="row" class="row">
    <div ref="bg-img" class="bg-img">
      <div class="overlay">
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
      </div>
      <img
        v-if="card.isImg"
        class="profile-photo"
        src="../../assets/img/bektasalbayrak.jpg"
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
  data() {
    return {
      myHeight: 0,
    };
  },
  mounted() {
    this.setHeight();
  },
  methods: {
    setHeight() {
      this.$refs.row.style.height =
        Number(this.$refs["bg-img"].offsetHeight) + "px";
    },
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
  left: 15px;
  right: 15px;
}
.overlay {
  position: relative;
  display: flex;
  padding: 60px;
  height: 100%;
  width: calc(100% - 120px);
  background-image: linear-gradient(
    90deg,
    rgba(45, 45, 58, 0.9) 15%,
    rgba(45, 45, 58, 0.7) 50%,
    rgba(43, 43, 53, 0.7) 100%
  );
}
.row-container {
  display: block;
  text-align: center;
  width: 100%;
}
.router-button {
  background-color: #ffc107;
  height: 45px;
  padding: 0 35px;
  font-weight: 600;
  color: #20202a;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: max-content;
  transition: 0.4s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
}
p {
  font-size: 16px;
  color: #fafafc;
  font-family: "Courier Prime", monospace;
}
@media (min-width: 900px) {
  .row {
    position: relative;
  }
  .bg-img {
    left: 30px;
    right: 30px;
  }
  .row-container {
    justify-content: center;
    justify-items: center;
    align-self: center;
  }
  .router-button {
    justify-content: start;
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
