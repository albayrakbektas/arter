<template>
  <div class="page-grid">
    <ContactInformation />
    <GetInTouch />
  </div>
</template>

<script>
import GetInTouch from "@/components/Pages/Contact/GetInTouch";
import ContactInformation from "@/components/Pages/Contact/ContactInformation";

export default {
  name: "ContactGrid",
  components: { GetInTouch, ContactInformation },
};
</script>

<style lang="scss" scoped></style>
