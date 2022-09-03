<template>
  <div class="experience-card-container">
    <div class="experience-card-counter">
      <span ref="count">{{ experienceCard.count }}</span>
      <span>{{ experienceCard.plus }}</span>
    </div>
    <h6>{{ experienceCard.title }}</h6>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experienceCard: Object,
  },
  mounted() {
    this.percentAnimate(
      0,
      Number(this.experienceCard.count),
      2000,
      "count",
      false
    );
    // this.percentAnimate(0, Number(this.skill.percent), 2000, "percent", false);
    // this.percentAnimate(0, Number(this.skill.percent), 2000, "percent", false);
    // this.percentAnimate(0, Number(this.skill.percent), 2000, "progress", true);
    // this.percentAnimate(0, Number(this.skill.percent), 2000, "progress", true);
    // this.percentAnimate(0, Number(this.skill.percent), 2000, "progress", true);
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
.experience-card-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.experience-card-counter {
  display: flex;
  align-items: center;
}
span {
  color: #ffc107;
  font-size: 22px;
  font-weight: 600;
}
h6 {
  text-transform: unset;
  padding-left: 5px;
}
@media (min-width: 900px) {
  .experience-card-container {
    grid-template-columns: auto 2fr;
    column-gap: 5px;
  }
}
</style>
