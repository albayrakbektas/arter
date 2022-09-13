<template>
  <div
    class="row"
    :class="[
      $store.state.layoutGrid || 'two-column-grid',
      $route.name === 'onepage' ? 'onepage-grid' : '',
    ]"
  >
    <h4>Newsletter</h4>
    <beko-carousel
      v-if="$route.name === 'onepage'"
      :scroll-per-page="false"
      :per-page-custom="[[900, 3]]"
      :autoplay="true"
      :loop="true"
      :navigation-enabled="true"
    >
      <beko-slide
        v-for="(item, index) of $store.state.blogCardList.slice(0, 5)"
        :key="index"
      >
        <CardImage
          :style="{ width: 'calc(100% - 15px)' }"
          :card="item"
          :key="index"
        />
      </beko-slide>
    </beko-carousel>
    <CardImage
      v-else
      v-for="(item, index) of $store.state.blogCardList"
      :card="item"
      :key="index"
    />
  </div>
</template>

<script>
import CardImage from "@/components/Cards/CardImage";
import BekoCarousel from "@/components/Carousel/BekoCarousel";
import BekoSlide from "@/components/Carousel/BekoSlide";
export default {
  name: "GridLayout",
  components: { BekoSlide, BekoCarousel, CardImage },
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
.onepage-grid {
  display: block;
}
@media (min-width: 900px) {
  .onepage-grid {
    display: block;
  }
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
