<template>
  <div class="row">
    <ExperienceCard
      v-for="(item, index) of experienceCardList"
      :experience-card="item"
      :key="index"
      :class="index.toString()"
    />
  </div>
</template>

<script>
import ExperienceCard from "@/components/Home/experience/ExperienceCard";
export default {
  name: "ExperienceCards",
  components: { ExperienceCard },
  data() {
    return {
      experienceCardList: [
        {
          count: "10",
          plus: "+",
          title: "Years Experience",
        },
        {
          count: "143",
          plus: "",
          title: "Completed Projects",
        },
        {
          count: "114",
          plus: "",
          title: "Happy Customers",
        },
        {
          count: "20",
          plus: "+",
          title: "Honors and Awards",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 30px;
  justify-content: space-between;
}
.\30,
.\32 {
  padding-right: 15px;
}
.\31,
.\33 {
  float: right;
}
</style>
