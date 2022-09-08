<template>
  <LayoutPage>
    <FirstSection />
    <ExperienceCards />
    <MyServices />
    <PricePlans />
    <RecommendationCards :header="recommendationHeader" />
    <PortfolioRouters />
    <PortfolioTwoColumn />
    <HistoryGrid />
    <GridLayout />
    <ContactGrid />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import FirstSection from "@/components/Pages/Home/top/FirstSection";
import ExperienceCards from "@/components/Pages/Home/experience/ExperienceCards";
import MyServices from "@/components/Pages/Home/services/MyServices";
import PricePlans from "@/components/Pages/Home/prices/PricePlans";
import RecommendationCards from "@/components/Pages/Home/recommendation/RecommendationCards";
import GridLayout from "@/components/Pages/Blog/GridLayout";
import HistoryGrid from "@/components/Pages/History/HistoryGrid";
import ContactGrid from "@/components/Pages/Contact/ContactGrid";
import PortfolioRouters from "@/components/Pages/Portfolio/PortfolioRouters";
import PortfolioTwoColumn from "@/components/Pages/Portfolio/PortfolioTwoColumn";
export default {
  name: "OnePageView",
  components: {
    ContactGrid,
    HistoryGrid,
    GridLayout,
    RecommendationCards,
    PricePlans,
    MyServices,
    ExperienceCards,
    FirstSection,
    LayoutPage,
    PortfolioRouters,
    PortfolioTwoColumn,
  },
  mounted() {
    this.$store.state.isOnePage = true;
  },
  data() {
    return {
      recommendationHeader: {
        title: "Recommendations",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
