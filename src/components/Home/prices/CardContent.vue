<template>
  <ul>
    <li v-for="item in workList" :key="item">
      <i class="fa-solid fa-check"></i>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CardContent",
  data() {
    return {
      workList: [
        "UI Design",
        "Web Development",
        "Logo Design",
        "SEO Optimization",
        "Wordpress Integration",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 15px;
  font-weight: 300;
}
i {
  color: #ffc107;
  margin-right: 5px;
  font-weight: 900;
  font-size: 9px;
}
</style>
