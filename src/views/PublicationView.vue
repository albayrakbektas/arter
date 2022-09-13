<template>
  <LayoutPage>
    <div class="row">
      <PublicationHeader :card="header" />
      <PublicationFullImg :img="img" />
      <PublicationContent />
      <FooterNavigation :card="card" />
      <PublicationHeader :card="headerTwo" />
      <CardImageSlider :per-page-custom="[[900, 3]]" :card-list="cardList" />
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import PublicationHeader from "@/components/Pages/Publication/PublicationHeader";
import PublicationFullImg from "@/components/Pages/Publication/PublicationFullImg";
import PublicationContent from "@/components/Pages/Publication/PublicationContent";
import FooterNavigation from "@/components/Pages/Publication/FooterNavigation";
import CardImageSlider from "@/components/Pages/SingleProject/CardImageSlider";
export default {
  name: "PublicationView",
  components: {
    CardImageSlider,
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
      headerTwo: {
        title: "Similar posts",
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
      cardList: [
        {
          imageSrc: require("../assets/img/single/1.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: 1,
          title: "Blog post title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!",
          buttonContent: "Read more",
          href: "#.",
        },
        {
          imageSrc: require("../assets/img/single/7.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: 1,
          title: "Blog post title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!",
          buttonContent: "Read more",
          href: "#.",
        },
        {
          imageSrc: require("../assets/img/single/4.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: 1,
          title: "Blog post title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!",
          buttonContent: "Read more",
          href: "#.",
        },
        {
          imageSrc: require("../assets/img/single/5.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: 1,
          title: "Blog post title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!",
          buttonContent: "Read more",
          href: "#.",
        },
        {
          imageSrc: require("../assets/img/single/4.jpeg"),
          imageAlt: "",
          isBlog: true,
          isSlide: 1,
          title: "Blog post title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!",
          buttonContent: "Read more",
          href: "#.",
        },
      ],
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
