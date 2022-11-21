<template>
  <div class="landing-container">
    <div class="loading-container">
      <h4>Bektas Albayrak</h4>
      <div>
        <progress id="loading" :value="barValue" max="100"></progress>
        <p>{{ loading.toString() }} %</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      barValue: 0,
      loading: 0,
    };
  },
  mounted() {
    this.loadingBar();
  },
  methods: {
    loadingBar() {
      const a = setInterval(() => {
        this.barValue++;
        this.loading++;
        if (this.loading >= 100) {
          clearInterval(a);
          this.$store.state.loadingPage = false;
        }
      }, 15);
    },
  },
};
</script>

<style scoped lang="scss">
.landing-container {
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  text-align: center;
  background-color: #20202a;
}
.loading-container {
  width: 50vw;
  display: grid;
  justify-content: center;
}
h4 {
  margin-block-end: 0;
  color: #fafafc;
}
p {
  margin-block-start: 0;
  color: #8c8c8e;
}
progress {
  accent-color: #ffc107;
}
</style>
