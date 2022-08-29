<template>
  <div class="service-card-container">
    <h5>{{ card.title }}</h5>
    <p>{{ card.content }}</p>
    <router-link :to="card.href">
      ORDER NOW
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
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
}
h5 {
  font-size: 14px;
  margin: 0;
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
</style>
