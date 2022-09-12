<template>
  <div
    ref="row"
    class="row"
    :class="[$store.state.layoutGrid || 'three-column-masonry']"
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
  name: "PortfolioG",
  data() {
    return {
      firstColumnTop: 0,
      secondColumnTop: 0,
      thirdColumnTop: 0,
    };
  },
  components: { CardImage },
  mounted() {
    this.setLayout();
  },
  methods: {
    setLayout() {
      const container = document.querySelector(
        ".three-column-masonry"
      ).children;
      for (let i = 0; i < container.length; i++) {
        if (i % 3 === 0) {
          container[i].style.top = `${this.firstColumnTop}px`;
          this.firstColumnTop += container[i].clientHeight;
        } else if (i % 3 === 1) {
          container[i].style.left = "30%";
          container[i].style.top = `${this.secondColumnTop}px`;
          this.secondColumnTop += container[i].clientHeight;
        } else {
          container[i].style.left = "60%";
          container[i].style.top = `${this.thirdColumnTop}px`;
          this.thirdColumnTop += container[i].clientHeight;
        }
      }
    },
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
  .two-column-masonry,
  .three-column-masonry {
    position: relative;
    width: 100%;
    height: 10000px;
    .card-image-container {
      position: absolute;
    }
  }
  .two-column-masonry {
    .card-image-container {
      width: calc(calc(100% - 30px) / 2);
    }
  }
  .three-column-masonry {
    .card-image-container {
      width: calc(calc(100% - 30px) / 3);
    }
  }
}
</style>
