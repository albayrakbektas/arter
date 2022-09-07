<template>
  <div class="row">
    <h4>Project Details</h4>
    <div class="row-grid">
      <CardMain :card="detailedProject.card" />
      <TableCard :table-list="detailedProject.tableList" />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/Cards/CardMain";
import TableCard from "@/components/Tables/TableCard";
export default {
  name: "ProjectDetails",
  components: { TableCard, CardMain },
  data() {
    return {
      detailedProject: {
        card: {
          title: "Description",
          content:
            "Perferendis modi tempora, minus facere! Animi ipsam explicabo beatae soluta qui repellat minus perspiciatis placeat doloribus praesentium laborum debitis error sed ex nisi, ipsum ad obcaecati assumenda ut recusandae. Vero, voluptate, magni unde accusantium vel ducimus expedita!",
          buttonContent: "read more",
          href: "#",
        },
        tableList: [
          {
            key: "Order Date:",
            value: "24.12.2019",
          },
          {
            key: "Final Date:",
            value: "12.03.2020",
          },
          {
            key: "Status",
            value: "Completed",
          },
          {
            key: "Client",
            value: "Envato Market",
          },
          {
            key: "Location",
            value: "Ukraine, Lviv",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: block;
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
