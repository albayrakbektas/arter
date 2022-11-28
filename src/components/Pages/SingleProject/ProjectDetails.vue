<template>
  <div class="row">
    <h4>Project Details</h4>
    <div class="row-grid">
      <CardMain :card="$store.state.detailedProject.card" />
      <TableCard :table-list="$store.state.detailedProject.tableList" />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/Cards/CardMain";
import TableCard from "@/components/Tables/TableCard";
export default {
  name: "ProjectDetails",
  components: { TableCard, CardMain },
  props: {
    detailedProject: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: block;
  margin: 0 0 15px;
  padding: 0;
}
h4 {
  font-size: 17px;
  margin: 30px 0;
  text-align: center;
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: 30px;
    margin: 0 -15px 15px;
    padding: 0 30px;
  }
  h4 {
    text-align: left;
  }
  .row-grid {
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-template-rows: repeat(1, 1fr);
    gap: 30px;
    justify-content: space-between;
  }
}
</style>
