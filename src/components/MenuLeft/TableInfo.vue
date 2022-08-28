<template>
  <div class="information-table">
    <ul>
      <li v-for="(item, index) of tableList" :key="index">
        <h6>{{ item.key }}</h6>
        <p>{{ item.value }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TableInfo",
  data() {
    return {
      tableList: [
        {
          key: "Residence:",
          value: "Turkey",
        },
        {
          key: "City:",
          value: "Izmir",
        },
        {
          key: "Age:",
          value: "26",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.information-table {
  padding: 15px 0;
}
ul {
  padding-inline-start: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  * {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
    font-family: Poppins, sans-serif;
  }
  h6 {
    color: #fafafc;
  }
  p {
    color: #8c8c8e;
  }
}
</style>
