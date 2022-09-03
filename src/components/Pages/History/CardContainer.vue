<template>
  <div class="row">
    <h4>{{ title }}</h4>
    <div class="card-list">
      <div v-for="(item, index) of cardList" class="card" :key="index">
        <div class="white-light"></div>
        <div class="yellow-light"></div>
        <CardMain :card="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/Cards/CardMain";
export default {
  name: "CardContainer",
  components: { CardMain },
  props: {
    title: String,
    cardList: Array,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: block;
  padding-top: 30px;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
.card-list {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: calc(100% - 10px);
    width: 5px;
    top: 10px;
    right: 5px;
    z-index: 999;
    background-color: #191923;
  }
}
.card {
  position: relative;
}
.yellow-light,
.white-light {
  position: absolute;
  border-radius: 50%;
  z-index: 999;
  box-sizing: border-box;
}
.white-light {
  height: 20px;
  width: 20px;
  background-color: #fafafc;
  right: -2px;
  top: 5.5px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  &:hover {
    opacity: 1;
  }
}
.yellow-light {
  cursor: pointer;
  right: 0;
  top: 8px;
  height: 15px;
  width: 15px;
  background-color: #1e1e28;
  border: solid 3px #ffc107;
  &:hover {
    .white-light {
      opacity: 1;
    }
  }
}
.card-container {
  margin-right: 30px;
}
@media (min-width: 900px) {
  .row {
  }
  h4 {
    grid-area: 1 / span 3;
    text-align: left;
  }
}
</style>
