<template>
  <div class="row" :class="[$store.state.layoutGrid || 'two-column-grid']">
    <h4>Newsletter</h4>
    <CardImage
      v-for="(item, index) of $store.state.blogCardList"
      :card="item"
      :key="index"
    />
  </div>
</template>

<script>
import CardImage from "@/components/Cards/CardImage";
export default {
  name: "GridLayout",
  components: { CardImage },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
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
    grid-area: 1 / span 2;
    text-align: left;
  }
  .two-column-grid,
  .three-column-grid {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    column-gap: 30px;
    width: calc(100% - 30px);
    .card-image-container {
      position: relative;
      width: unset;
      overflow: hidden;
    }
    .card-image-href {
      padding-bottom: 60%;
      position: relative;
    }
  }
  .three-column-grid {
    h4 {
      grid-area: 1 / span 3;
    }
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
}
</style>
