<template>
  <div>
    <ul>
      <li v-for="(item, index) of knowledgeList" :key="index">
        <i class="fa-solid fa-check"></i>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KnowledgeList",
  data() {
    return {
      knowledgeList: [
        "Bootstrap, Materialize",
        "Stylus, Sass, Less",
        "Gulp, Webpack, Grunt",
        "GIT knowledge",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding-inline-start: 0;
}
i {
  margin-right: 5px;
  font-size: 9px;
  color: #ffc107;
  font-weight: 900;
}
li {
  list-style: none;
  display: grid;
  line-height: 1.5;
  grid-template-columns: auto 1fr;
  text-align: start;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #8c8c8e;
  margin-bottom: 5px;
}
@media (min-width: 900px) {
  i {
    margin-right: 10px;
  }
}
</style>
