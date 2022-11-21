<template>
  <div class="row">
    <h4>My Services</h4>
    <CardMain v-for="(item, index) of cardList" :card="item" :key="index" />
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "contact",
        },
        {
          title: "Mobile Development",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "contact",
        },
        {
          title: "UI Testing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
}
h4 {
  font-size: 17px;
  margin: 30px 0;
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
