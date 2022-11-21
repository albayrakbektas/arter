<template>
  <div class="recommendation-card-container-parent">
    <div class="recommendation-card-container">
      <div class="card-content">
        <img :src="card.imgSrc" :alt="card.imgAlt" />
        <h5>{{ card.title }}</h5>
        <h3>{{ card.subTitle }}</h3>
        <p>{{ card.content }}</p>
      </div>
      <div class="star-container">
        <ul>
          <li v-for="item in card.starCount" :key="item.index">
            <i class="fa-solid fa-star"></i>
          </li>
          <li v-for="item in 5 - card.starCount" :key="item.index">
            <i class="fa-solid fa-star empty-star"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationCard",
  data() {
    return {
      star: this.card.starCount,
    };
  },
  mounted() {
    // console.log(this.star);
  },
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.recommendation-card-container-parent {
  position: relative;
}
.recommendation-card-container {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px;
  position: relative;
  opacity: 1;
}
img {
  height: 65px;
  width: 65px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: -15px;
  z-index: 9999;
}
h5 {
  font-size: 14px;
  margin: 0;
}
h3 {
  font-size: 11px;
  color: #646466;
  margin: 5px 0 15px;
  font-style: italic;
}
p {
  font-size: 12px;
  color: #8c8c8e;
  margin: 0 0 15px;
  font-weight: 900;
}
.star-container {
  background-color: #20202a;
  border-radius: 1rem;
  width: fit-content;
  display: flex;
  padding: 5px 15px;
  position: relative;
}
ul {
  display: inline-flex;
  margin: 0;
  align-items: center;
  justify-content: center;
}
li {
  margin-right: 5px;
  font-size: 10px;
  &:first-child {
    margin-left: 5px;
  }
}
i {
  color: #ffc107;
}
.empty-star {
  color: rgba(43, 43, 53, 0.98);
}
@media (min-width: 900px) {
  .recommendation-card-container-parent {
    width: calc(100% - 15px);
  }
}
</style>
