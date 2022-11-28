<template>
  <LayoutPage>
    <FirstSection />
    <PortfolioTwoColumn />
    <HistoryGrid />
    <ContactGrid />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import FirstSection from "@/components/Pages/Home/top/FirstSection";
import HistoryGrid from "@/components/Pages/History/HistoryGrid";
import ContactGrid from "@/components/Pages/Contact/ContactGrid";
import PortfolioTwoColumn from "@/components/Pages/Portfolio/PortfolioTwoColumn";
export default {
  name: "OnePageView",
  components: {
    ContactGrid,
    HistoryGrid,
    FirstSection,
    LayoutPage,
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
