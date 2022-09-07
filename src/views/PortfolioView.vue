<template>
  <LayoutPage>
    <PortfolioRouters />
    <PortfolioTwoColumn />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import PortfolioTwoColumn from "@/components/Pages/Portfolio/PortfolioTwoColumn";
import PortfolioRouters from "@/components/Pages/Portfolio/PortfolioRouters";
export default {
  name: "PortfolioView",
  components: { PortfolioRouters, PortfolioTwoColumn, LayoutPage },
};
</script>

<style lang="scss" scoped></style>
