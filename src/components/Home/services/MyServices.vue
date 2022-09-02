<template>
  <div class="row">
    <h4>My Services</h4>
    <ServiceCard v-for="(item, index) of cardList" :card="item" :key="index" />
  </div>
</template>

<script>
import ServiceCard from "@/components/Home/services/ServiceCard";
export default {
  name: "MyServices",
  components: { ServiceCard },
  data() {
    return {
      cardList: [
        {
          title: "Web Development",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "#.",
        },
        {
          title: "UI/UX Design",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "#.",
        },
        {
          title: "Sound Design",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "#.",
        },
        {
          title: "Game Design",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "#.",
        },
        {
          title: "Advertising",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
          href: "#.",
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
