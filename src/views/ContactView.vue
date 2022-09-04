<template>
  <LayoutPage>
    <div class="page-grid">
      <ContactInformation />
      <GetInTouch />
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import ContactInformation from "@/components/Pages/Contact/ContactInformation";
import GetInTouch from "@/components/Pages/Contact/GetInTouch";
export default {
  name: "ContactView",
  components: { GetInTouch, ContactInformation, LayoutPage },
};
</script>

<style lang="scss" scoped></style>
