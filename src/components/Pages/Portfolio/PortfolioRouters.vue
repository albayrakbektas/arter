<template>
  <div
    class="row"
    :class="{ 'onepage-header-routers-row': $store.state.isOnePage }"
  >
    <h4 v-if="$store.state.isOnePage">Works</h4>
    <div class="header-routers">
      <router-link
        v-for="(item, index) of $store.state.filterLinks"
        :data-filter="item.dataFilter"
        to="#"
        :key="index"
        @click.native="filterCards"
      >
        {{ item.content }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioRouters",
  mounted() {
    this.$store.state.showingPortfolioCards = this.$store.state.portfolioCards;
  },
  methods: {
    filterCards(e) {
      if (e.target.getAttribute("data-filter") === "*") {
        this.$store.state.showingPortfolioCards =
          this.$store.state.portfolioCards;
      } else {
        this.$store.state.showingPortfolioCards =
          this.$store.state.portfolioCards.filter(
            (card) => card.dataFilter === e.target.getAttribute("data-filter")
          );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 30px 0 15px;
}
.header-routers {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  text-align: center;
}
a {
  margin-bottom: 10px;
  font-size: 10px;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-transform: uppercase;
}
.onepage-header-routers-row {
  gap: 15px;
  text-align: center;
  padding: 15px;
  h4 {
    padding-bottom: 10px;
    margin: 0;
  }
}
@media (min-width: 900px) {
  .row {
    justify-content: start;
    padding-left: 30px;
  }
  .header-routers {
    grid-template-columns: repeat(5, auto);
    align-items: center;
    gap: 15px;
    a:first-child {
      color: #fafafc;
    }
    a {
      transition: 0.4s ease-in-out;
      &:hover {
        color: #fafafc;
      }
    }
  }
  .onepage-header-routers-row {
    justify-content: space-between;
    grid-template-columns: repeat(2, auto);
    gap: 30px;
    text-align: center;
    width: calc(100% - 30px);
    h4 {
      padding-bottom: 10px;
      margin: 0;
    }
  }
}
</style>
