<template>
  <div class="skill-progress-container">
    <div class="skill-top">
      <h6>{{ skill.name }}</h6>
      <div class="p-container">
        <p ref="percent">{{ skill.percent }}</p>
        <p>%</p>
      </div>
    </div>
    <progress ref="progress" :value="0" max="100" />
  </div>
</template>

<script>
export default {
  name: "SkillProgress",
  props: {
    skill: Object,
  },
  mounted() {
    this.percentAnimate(0, Number(this.skill.percent), 2000, "percent", false);
    this.percentAnimate(0, Number(this.skill.percent), 2000, "percent", false);
    this.percentAnimate(0, Number(this.skill.percent), 2000, "percent", false);
    this.percentAnimate(0, Number(this.skill.percent), 2000, "progress", true);
    this.percentAnimate(0, Number(this.skill.percent), 2000, "progress", true);
    this.percentAnimate(0, Number(this.skill.percent), 2000, "progress", true);
  },
  methods: {
    percentAnimate(start, end, duration, element, value) {
      if (start >= end) {
        return;
      }
      let range = end - start;
      let current = start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let timer = setInterval(() => {
        current += increment;
        if (value) {
          this.$refs[element].value = current;
        } else {
          this.$refs[element].textContent = current;
        }
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-progress-container {
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: center;
  margin-bottom: 20px;
}
.skill-top {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
.p-container {
  display: flex;
}
p {
  margin: 0;
  font-size: 11px;
  color: #8c8c8e;
}
progress {
  width: 100%;
  height: 5px;
  background-color: #ffc107;
  margin: 10px 0 0;
}
progress::-webkit-progress-bar {
  background-color: #000000;
}
progress::-webkit-progress-value {
  background-color: #ffc107;
}
</style>
