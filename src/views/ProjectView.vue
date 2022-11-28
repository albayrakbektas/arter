<template>
  <LayoutPage>
    <div class="row">
      <PublicationHeader
        :card="$store.state.detailedProject.header"
        class="pd header-width"
      />
      <CardImageSlider
        :card-list="$store.state.detailedProject.images"
        :header="$store.state.detailedProject.header"
        v-if="this.$store.state.layoutGrid === 'single-project'"
      />
      <PublicationFullImg
        v-if="this.$store.state.layoutGrid === 'single-project-two'"
        class="full-img"
        :img="img"
      />
      <ProjectDetails :detailed-project="$store.state.detailedProject" />
      <PortfolioResult
        v-if="this.$store.state.layoutGrid === 'single-project-two'"
      />
      <BgCard :button="button" :card="card" class="rel-row mt" />
      <FooterNavigation :card="footerCard" class="pd" />
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import ProjectDetails from "@/components/Pages/SingleProject/ProjectDetails";
import BgCard from "@/components/Cards/BgCard";
import FooterNavigation from "@/components/Pages/Publication/FooterNavigation";
import PublicationFullImg from "@/components/Pages/Publication/PublicationFullImg";
import PublicationHeader from "@/components/Pages/Publication/PublicationHeader";
import PortfolioResult from "@/components/Pages/SingleProject/PortfolioResult";
import CardImageSlider from "@/components/Pages/SingleProject/CardImageSlider";
export default {
  name: "ProjectView",
  components: {
    CardImageSlider,
    PortfolioResult,
    PublicationHeader,
    PublicationFullImg,
    FooterNavigation,
    BgCard,
    ProjectDetails,
    LayoutPage,
  },
  props: {
    detailedProjects: Object,
  },
  mounted() {
    this.$store.state.layoutGrid = "single-project";
    this.$store.state.portfolioCards.forEach((e) => {
      if (e.id && e.id === this.$route.params.project) {
        this.$store.state.detailedProject = e;
      }
    });
  },
  watch: {
    $route: {
      handler: function (val) {
        this.$store.state.isRightMenuActive = false;
        this.$store.state.portfolioCards.forEach((e) => {
          if (e.id && e.id === val.params.project) {
            this.$store.state.detailedProject = e;
          }
        });
      },
      deep: true,
    },
  },
  data() {
    return {
      detailedProject: {},
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
        src: require("../assets/img/portfolio/3.jpeg"),
        alt: "",
      },
      button: {
        content: "CONTACT ME",
        href: "/contact",
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
          href: "/portfolio",
          route: "portfolio",
        },
        nextLink: "next project",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.pd {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.row {
  justify-content: unset;
  margin-bottom: 15px;
}
.rel-row {
  position: relative !important;
  padding: 0 15px;
  h1 {
    font-weight: 800;
  }
}
.pd {
  margin-left: 15px;
  margin-right: 15px;
}
.full-img {
  left: 0;
  right: 15px;
}
.header-width {
  width: calc(100% - 30px);
}
@media (min-width: 900px) {
  .pd {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  .mt {
    margin-top: 0 !important;
  }
}
</style>
