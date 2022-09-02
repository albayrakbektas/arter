<template>
  <div class="row">
    <h4>Price Plans</h4>
    <PriceCard v-for="(item, index) of cardList" :card="item" :key="index" />
  </div>
</template>

<script>
import PriceCard from "@/components/Home/prices/PriceCard";
export default {
  name: "PricePlans",
  components: { PriceCard },
  data() {
    return {
      cardList: [
        {
          title: "Starter Price",
          href: "#",
          info: "Free only when ordering paid services",
        },
        {
          title: "Hourly Payment",
          price: "29",
          href: "#",
          before: true,
        },
        {
          title: "Full Time",
          price: "2999",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
  justify-content: unset;
  text-align: center;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: 30px;
  }
  h4 {
    grid-area: 1 / span 3;
    text-align: left;
  }
}
</style>
