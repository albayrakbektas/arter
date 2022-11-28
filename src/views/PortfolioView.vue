<template>
  <LayoutPage>
    <h4>My Projects</h4>
    <PortfolioG />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import PortfolioG from "@/components/Pages/Portfolio/PortfolioG";
export default {
  name: "PortfolioView",
  components: { PortfolioG, LayoutPage },
};
</script>

<style lang="scss" scoped>
h4 {
  margin: 30px 0 15px 30px;
}
</style>
