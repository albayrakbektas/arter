<template>
  <LayoutPage>
    <div class="row">
      <PublicationHeader />
      <PublicationFullImg />
      <PublicationContent />
      <FooterNavigation />
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
