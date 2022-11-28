<template>
  <div class="card-container" :class="[{ 'card-after': card.isAfter }]">
    <div class="card-top">
      <div class="card-top-left">
        <h5>{{ card.title }}</h5>
        <p v-if="card.subTitle" class="sub-title">{{ card.subTitle }}</p>
      </div>
      <div v-if="card.date" class="card-date-container">
        <span class="card-date">{{ card.date || "jan 2018 - may 2020" }}</span>
      </div>
    </div>
    <p>{{ card.content }}</p>
    <div @click="setDetailedProject(card)">
      <router-link
        v-if="!card.emptyRoute && !card.outOfProject"
        :to="{
          path: card.href,
          params: { project: card.title.toLowerCase(), detailedProject: card },
        }"
        :target="card.isBlank ? '_blank' : '_self'"
      >
        {{ card.buttonContent || "order now" }}
        <i class="fa-solid fa-chevron-right"></i>
      </router-link>
      <a
        v-if="card.outOfProject && !card.emptyRoute"
        :href="card.href"
        :target="card.isBlank ? '_blank' : '_self'"
      >
        {{ card.buttonContent || "order now" }}
        <i class="fa-solid fa-chevron-right"></i>
      </a>
    </div>
    <!--    <div-->
    <!--      class="div-router"-->
    <!--      v-if="!card.emptyRoute"-->
    <!--      @click="setDetailedProject(card.href, card.isBlank, card)"-->
    <!--    >-->
    <!--      {{ card.buttonContent || "order now" }}-->
    <!--      <i class="fa-solid fa-chevron-right"></i>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "CardMain",
  props: {
    card: Object,
  },
  methods: {
    setDetailedProject(card) {
      console.log(card);
      this.$store.state.detailedProject = card;
      // let routeData = this.$router.resolve({
      //   name: "project",
      //   params: { project: href },
      // });
      // window.open(routeData.href, isBlank ? "_blank" : "_self");
    },
    // setGridLayout(item) {
    //   console.log(item.href);
    //   if (item.href === "singleproject") {
    //     this.$store.state.layoutGrid = "single-project";
    //   }
    //   this.$router.push("/singleproject");
    // },
  },
};
</script>

<style lang="scss" scoped>
.div-router {
  font-size: 10px;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  color: #ffc107;
  filter: brightness(80%);
  cursor: pointer;
  &:hover {
    filter: brightness(100%);
    i {
      margin-left: 5px;
    }
  }
}
.card-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px;
  margin-bottom: 30px;
  position: relative;
}
@media (max-width: 500px) {
  .card-container {
    margin-bottom: 0;
  }
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
  transition: all 0.4s ease-in-out;
  &:hover {
    filter: brightness(100%);
    i {
      filter: brightness(100%);
    }
    i.fa-chevron-right {
      transform: translateX(4px);
    }
  }
}
a,
i {
  color: #ffc107;
  filter: brightness(80%);
  transition: 400ms ease-in-out;
}
</style>
