<template>
  <div class="circle-container">
    <div class="language-circle">
      <div class="middle-circle">
        <p ref="percent">{{ circle.percent }}</p>
        %
      </div>
      <div class="progress-spinner"></div>
    </div>
    <h6>{{ circle.language }}</h6>
  </div>
</template>

<script>
export default {
  name: "LanguageCircle",
  props: {
    circle: Object,
  },
  mounted() {
    this.percentAnimate(0, Number(this.circle.percent), 2000, "percent");
  },
  methods: {
    percentAnimate(start, end, duration, element) {
      if (start >= end) {
        return;
      }
      let range = end - start;
      let current = start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let timer = setInterval(() => {
        current += increment;
        this.$refs[element].textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
}
.language-circle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.progress-spinner {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
.middle-circle {
  position: absolute;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #1e1e28;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #8c8c8e;
  font-size: 11px;
}
h6 {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
}
</style>
