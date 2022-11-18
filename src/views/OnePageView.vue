<template>
  <LayoutPage>
    <FirstSection />
    <MyServices />
    <PortfolioRouters />
    <PortfolioTwoColumn />
    <HistoryGrid />
    <ContactGrid />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import FirstSection from "@/components/Pages/Home/top/FirstSection";
import MyServices from "@/components/Pages/Home/services/MyServices";
import HistoryGrid from "@/components/Pages/History/HistoryGrid";
import ContactGrid from "@/components/Pages/Contact/ContactGrid";
import PortfolioRouters from "@/components/Pages/Portfolio/PortfolioRouters";
import PortfolioTwoColumn from "@/components/Pages/Portfolio/PortfolioTwoColumn";
export default {
  name: "OnePageView",
  components: {
    ContactGrid,
    HistoryGrid,
    MyServices,
    FirstSection,
    LayoutPage,
    PortfolioRouters,
    PortfolioTwoColumn,
  },
  created() {
    this.$store.state.layoutGrid = "three-column-masonry";
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
