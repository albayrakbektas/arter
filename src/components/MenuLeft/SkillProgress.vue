<template>
  <div class="skill-progress-container">
    <div class="skill-top">
      <h6>{{ skill.name }}</h6>
      <p>{{ skill.percent }}%</p>
    </div>
    <progress :value="Number(skill.percent)" max="100" />
  </div>
</template>

<script>
export default {
  name: "SkillProgress",
  props: {
    skill: Object,
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
