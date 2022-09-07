<template>
  <div class="row">
    <h4>Result</h4>
    <PublicationFullImg
      v-for="(item, index) of imgList"
      :img="item"
      :key="index"
      :class="item.span"
    />
  </div>
</template>

<script>
import PublicationFullImg from "@/components/Pages/Publication/PublicationFullImg";
export default {
  name: "PortfolioResult",
  components: { PublicationFullImg },
  data() {
    return {
      imgList: [
        {
          src: require("../../../assets/img/portfolio/result/1.jpeg"),
          alt: "",
        },
        {
          src: require("../../../assets/img/portfolio/result/2.jpeg"),
          alt: "",
          span: "gs",
        },
        {
          src: require("../../../assets/img/portfolio/result/3.jpeg"),
          alt: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  grid-auto-rows: auto;
  display: block;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
.card-image-href {
  height: 150px;
}
.gs {
  height: 350px;
}
@media (min-width: 900px) {
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr 1fr;
    justify-content: space-between;
    column-gap: 30px;
  }
  h4 {
    grid-area: 1 / span 2;
    text-align: left;
  }
  .card-image-href {
    width: 100%;
    height: unset;
  }
  .gs {
    height: unset;
    grid-row: 2 / span 3;
    grid-column: 2;
    height: -webkit-fill-available;
  }
}
</style>
