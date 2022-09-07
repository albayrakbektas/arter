<template>
  <div class="publication-content">
    <ContentCard />
    <TableCard :table-list="table" />
  </div>
</template>

<script>
import TableCard from "@/components/Tables/TableCard";
import ContentCard from "@/components/Pages/Publication/ContentCard";
export default {
  name: "PublicationContent",
  components: { ContentCard, TableCard },
  data() {
    return {
      table: [
        {
          key: "Date:",
          value: "24.12.2019",
        },
        {
          key: "Author:",
          value: "Artur Carter",
        },
        {
          key: "Category:",
          value: "Product design\n",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.publication-content {
  display: grid;
  align-items: start;
  justify-content: space-between;
}
@media (min-width: 900px) {
  .publication-content {
    grid-template-columns: 65% 1fr;
    gap: 30px;
  }
}
</style>
