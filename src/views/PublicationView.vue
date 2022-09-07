<template>
  <LayoutPage>
    <div class="row">
      <PublicationHeader :card="header" />
      <PublicationFullImg :img="img" />
      <PublicationContent />
      <FooterNavigation :card="card" />
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import PublicationHeader from "@/components/Pages/Publication/PublicationHeader";
import PublicationFullImg from "@/components/Pages/Publication/PublicationFullImg";
import PublicationContent from "@/components/Pages/Publication/PublicationContent";
import FooterNavigation from "@/components/Pages/Publication/FooterNavigation";
export default {
  name: "PublicationView",
  components: {
    FooterNavigation,
    PublicationContent,
    PublicationFullImg,
    PublicationHeader,
    LayoutPage,
  },
  data() {
    return {
      header: {
        title: "Publication",
        content: "Ui Design, Graphic",
      },
      img: {
        src: require("../assets/img/blog/publication/2.jpeg"),
        alt: "",
      },
      card: {
        prevLink: "previous post",
        allLink: {
          content: "all publications",
          href: "#",
          route: "blog",
        },
        nextLink: "previous post",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: block;
}
@media (min-width: 900px) {
  .row {
    justify-content: space-between;
    column-gap: 30px;
  }
}
</style>
