<template>
  <div class="card-container" :class="[{ 'card-after': card.isAfter }]">
    <div class="card-top">
      <div class="card-top-left">
        <h5>{{ card.title }}</h5>
        <p v-if="card.subTitle" class="sub-title">Student</p>
      </div>
      <div v-if="card.date" class="card-date-container">
        <span class="card-date">{{ card.date || "jan 2018 - may 2020" }}</span>
      </div>
    </div>
    <p>{{ card.content }}</p>
    <router-link v-if="!card.emptyRoute" :to="card.href">
      {{ card.buttonContent || "order now" }}
      <i class="fa-solid fa-chevron-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardMain",
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px;
  margin-bottom: 30px;
  position: relative;
}
.card-after::after {
  position: absolute;
  height: 10px;
  width: 10px;
  transform: rotate(45deg);
  background-color: rgba(43, 43, 53, 0.98);
  right: -5px;
  top: 10px;
  content: "";
}
.sub-title {
  margin: 5px 0 15px;
  font-style: italic;
  opacity: 0.5;
  color: #646466;
  font-size: 11px;
}
.card-date-container {
  margin-bottom: 15px;
}
.card-date {
  color: #646466;
  padding: 5px 15px;
  background: #20202a;
  font-size: 10px;
  border-radius: 15px;
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
  text-transform: uppercase;
  &:hover {
    i.fa-chevron-right {
      transform: translateX(4px);
    }
  }
}
a,
i {
  color: #ffc107;
  transition: 400ms ease-in-out;
}
</style>
