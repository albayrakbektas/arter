<template>
  <LayoutPage>
    <PortfolioRouters />
    <h4>My Projects</h4>
    <PortfolioG />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import PortfolioRouters from "@/components/Pages/Portfolio/PortfolioRouters";
import PortfolioG from "@/components/Pages/Portfolio/PortfolioG";
export default {
  name: "PortfolioView",
  components: { PortfolioG, PortfolioRouters, LayoutPage },
};
</script>

<style lang="scss" scoped>
h4 {
  margin: 0 0 15px 30px;
}
</style>
