<template>
  <div style="margin-top: 15px">
    <router-link to="/portfolio">My Projects</router-link>
    <div ref="row" class="row">
      <CardImage
        v-for="(item, index) of $store.state.portfolioCards"
        :card="item"
        :key="index"
        ref="card"
      />
    </div>
  </div>
</template>

<script>
import CardImage from "@/components/Cards/CardImage";
export default {
  name: "PortfolioTwoColumn",
  components: { CardImage },
  data() {
    return {
      elements: this.$refs.row,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
  column-gap: 15px;
  margin-top: 15px;
}
a {
  font-size: 17px;
  margin-left: 15px;
  text-align: center;
  color: #ffc107;
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
  a {
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
