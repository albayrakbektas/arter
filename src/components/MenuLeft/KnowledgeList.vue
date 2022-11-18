<template>
  <div :class="elementClass">
    <ul>
      <li
        class="knowledge-list-item"
        v-for="(item, index) of knowledgeList"
        :key="index"
      >
        <i :class="item.icon"></i>
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KnowledgeList",
  props: {
    elementClass: String,
    knowledgeList: Array,
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
  color: #ff0000;
  font-weight: 900;
}
.fa-circle {
  color: #1e1e28;
  font-size: 5px;
  border: 2px solid #ff0000;
  border-radius: 50%;
  box-sizing: border-box;
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
