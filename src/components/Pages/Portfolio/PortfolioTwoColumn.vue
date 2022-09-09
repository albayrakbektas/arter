<template>
  <div
    ref="row"
    class="row"
    :class="[$store.state.layoutGrid || 'two-column-grid']"
  >
    <CardImage
      v-for="(item, index) of $store.state.showingPortfolioCards"
      :card="item"
      :key="index"
      ref="card"
    />
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
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
@media (min-width: 900px) {
  .row {
    display: block;
    width: 100%;
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
  .two-column-masonry {
    -moz-column-count: 2;
    -moz-column-gap: 3%;
    -moz-column-width: 50%;
    -webkit-column-count: 2;
    -webkit-column-gap: 2%;
    -webkit-column-width: 50%;
    column-count: 2;
    column-gap: 3%;
    column-width: 50%;
    direction: ltr;
  }
  .three-column-masonry {
    -moz-column-count: 3;
    -moz-column-gap: 3%;
    -moz-column-width: 30%;
    -webkit-column-count: 3;
    -webkit-column-gap: 3%;
    -webkit-column-width: 30%;
    column-count: 3;
    column-gap: 3%;
    column-width: 30%;
  }
}
//.masonry-with-columns {
//  display: grid;
//  grid-template-columns: repeat(2, 1fr);
//  .card-image-container {
//    flex: auto 0;
//    text-align: center;
//    font-family: system-ui;
//    font-weight: 900;
//    font-size: 2rem;
//  }
//  @for $i from 1 through 8 {
//    div:nth-child(#{$i}) {
//      $h: (random(100) + 100) + px;
//      height: $h;
//    }
//    div:nth-child(#{$i}) {
//      $h: (random(300) + 100) + px;
//      height: $h;
//    }
//  }
//}
</style>
