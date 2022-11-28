<template>
  <div class="row">
    <h4>My Services</h4>
    <div v-for="(item, index) of cardList" :key="index" class="asdf">
      <CardMain :card="item" />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/Cards/CardMain";
export default {
  name: "MyServices",
  components: { CardMain },
  data() {
    return {
      cardList: [
        {
          title: "Web Development",
          content:
            "I use Javascript, Vue.js, Node.js and Firebase for mobile Development",
          href: "contact",
        },
        {
          title: "Mobile Development",
          content: "I use Flutter for mobile development",
          href: "contact",
        },
        {
          title: "UI Testing",
          content: "I use Jest and Puppeteer for website's ui testing.",
          href: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.asdf {
  height: 100%;
}
.row {
  grid-auto-rows: auto;
}
h4 {
  font-size: 17px;
  margin: 35px 0 15px 0;
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
