<template>
  <div ref="row" class="row">
    <div
      class="row-card-container"
      v-for="(item, index) of $store.state.portfolioCards"
      :key="index"
    >
      <CardImage :card="item" ref="card" />
    </div>
  </div>
</template>

<script>
import CardImage from "@/components/Cards/CardImage";
export default {
  name: "PortfolioG",
  data() {
    return {
      firstColumnTop: 0,
      secondColumnTop: 0,
      thirdColumnTop: 0,
    };
  },
  components: { CardImage },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
}
.row-card-container {
  position: relative;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 0;
    box-sizing: border-box;
  }
  h4 {
    grid-area: 1 / span 3;
    text-align: left;
  }
  @mixin randomNum($index) {
    @if $index % 2 == 0 {
      height: 400px;
    } @else {
      height: 200px;
    }
  }
  .two-column-grid,
  .three-column-grid {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    column-gap: 30px;
    width: calc(100% - 30px);
    .card-image-container {
      position: relative;
      height: unset;
      width: unset;
    }
    .card-image-href {
      height: unset;
    }
  }
  .three-column-grid {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
}
</style>
