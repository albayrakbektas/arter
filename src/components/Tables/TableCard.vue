<template>
  <div class="table-padding">
    <TableInfo :table-list="tableList" />
  </div>
</template>

<script>
import TableInfo from "@/components/MenuLeft/TableInfo";
export default {
  name: "TableCard",
  components: { TableInfo },
  props: {
    tableList: Array,
  },
};
</script>

<style scoped>
.table-padding {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px;
  margin-bottom: 30px;
}
.information-table {
  padding: 15px 0 !important;
}
</style>
