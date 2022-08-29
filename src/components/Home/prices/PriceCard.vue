<template>
  <div
    class="service-card-container"
    :class="{ 'price-card-before': card.before }"
  >
    <h5>{{ card.title }}</h5>
    <div v-if="card.price" class="price-mount">
      <span>$</span>{{ card.price }}<span>h</span>
    </div>
    <div v-else class="price-mount">Free<sup>*</sup></div>
    <p>
      <CardContent />
    </p>
    <router-link :to="card.href">
      ORDER NOW
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
    <div v-if="card.info" class="price-info">
      <sup>*</sup>
      {{ card.info }}
    </div>
  </div>
</template>

<script>
import CardContent from "@/components/Home/prices/CardContent";
export default {
  name: "PriceCard",
  components: { CardContent },
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.service-card-container {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}
h5 {
  font-size: 14px;
  margin: 0 0 25px;
}
p {
  font-size: 12px;
  color: #8c8c8e;
}
a {
  font-size: 10px;
  letter-spacing: 1.5px;
  font-weight: 600;
}
a,
i {
  color: #ffc107;
}
.price-mount {
  color: #ffc107;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  sup {
    font-size: 14px;
    color: #ffc107;
    opacity: 0.5;
  }
  span {
    font-size: 12px;
    color: #fafafc;
    font-weight: 200;
    padding: 0 2px;
    opacity: 0.5;
  }
}
.price-info {
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  font-size: 8px;
  opacity: 0.5;
  text-align: center;
  width: 100%;
  left: 0;
  color: #8c8c8e;
}
.price-card-before::before {
  position: absolute;
  content: "POPULAR";
  background-color: #ffc107;
  color: #1e1e28;
  font-weight: 600;
  padding: 2px;
  font-size: 10px;
  transform: rotate(45deg);
  right: -20px;
  top: 20px;
  width: 100px;
}
</style>
