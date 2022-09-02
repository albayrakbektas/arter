<template>
  <div class="experience-card-container">
    <div class="experience-card-counter">
      <span>{{ experienceCard.count }}</span>
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
