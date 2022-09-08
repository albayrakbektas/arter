<template>
  <LayoutPage>
    <RecommendationCards
      :header="header"
      v-if="this.$store.state.layoutGrid === 'single-project'"
    />
    <div v-if="this.$store.state.layoutGrid === 'single-project-two'">
      <PublicationHeader :card="header" class="pd header-width" />
      <PublicationFullImg class="full-img" :img="img" />
    </div>
    <ProjectDetails />
    <PortfolioResult
      v-if="this.$store.state.layoutGrid === 'single-project-two'"
    />
    <RecommendationCards :header="headerTwo" />
    <ExperienceCards class="mt" />
    <BgCard :button="button" :card="card" class="rel-row mt" />
    <FooterNavigation :card="footerCard" class="pd" />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import ProjectDetails from "@/components/Pages/SingleProject/ProjectDetails";
import BgCard from "@/components/Cards/BgCard";
import FooterNavigation from "@/components/Pages/Publication/FooterNavigation";
import ExperienceCards from "@/components/Pages/Home/experience/ExperienceCards";
import RecommendationCards from "@/components/Pages/Home/recommendation/RecommendationCards";
import PublicationFullImg from "@/components/Pages/Publication/PublicationFullImg";
import PublicationHeader from "@/components/Pages/Publication/PublicationHeader";
import PortfolioResult from "@/components/Pages/SingleProject/PortfolioResult";
export default {
  name: "SingleProject",
  components: {
    PortfolioResult,
    PublicationHeader,
    PublicationFullImg,
    RecommendationCards,
    ExperienceCards,
    FooterNavigation,
    BgCard,
    ProjectDetails,
    LayoutPage,
  },
  mounted() {
    this.$store.state.layoutGrid = "single-project";
  },
  data() {
    return {
      single: true,
      singleSecond: false,
      header: {
        title: "Title",
        content: "Ui Design, Graphic",
      },
      headerTwo: {
        title: "Client reviews",
        content: "",
      },
      img: {
        src: require("../assets/img/blog/publication/2.jpeg"),
        alt: "",
      },
      button: {
        content: "CONTACT ME",
        href: "contact",
      },
      card: {
        h1Top: "Ready to order your project?",
        content: "Let's work together!",
        isImg: false,
      },
      footerCard: {
        prevLink: "previous project",
        allLink: {
          content: "all projects",
          href: "#",
          route: "portfolio",
        },
        nextLink: "next project",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.rel-row {
  position: relative !important;
  h1 {
    font-weight: 800;
  }
}
.pd {
  margin-left: 15px;
  margin-right: 15px;
}
.full-img {
  left: 15px;
  right: 15px;
}
.header-width {
  width: calc(100% - 30px);
}
@media (min-width: 900px) {
  .mt {
    margin-top: 0 !important;
  }
}
</style>
