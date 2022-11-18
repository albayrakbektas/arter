<template>
  <div class="skill-container-parent">
    <SkillProgress
      v-for="(item, index) of skillList"
      :skill="item"
      :key="index"
    />
  </div>
</template>

<script>
import SkillProgress from "@/components/MenuLeft/SkillProgress";
export default {
  name: "SkillProgressContainer",
  components: { SkillProgress },
  data() {
    return {
      skillList: [
        {
          name: "HTML",
          percent: "90",
        },
        {
          name: "CSS",
          percent: "85",
        },
        {
          name: "JavaScript",
          percent: "75",
        },
        {
          name: "Flutter",
          percent: "45",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skill-container-parent {
  padding: 30px 0 15px;
}
</style>
