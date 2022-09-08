<template>
  <LayoutPage>
    <ContactGrid />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import ContactGrid from "@/components/Pages/Contact/ContactGrid";
export default {
  name: "ContactView",
  components: { ContactGrid, LayoutPage },
};
</script>

<style lang="scss" scoped></style>
