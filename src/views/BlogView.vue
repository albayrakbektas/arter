<template>
  <LayoutPage>
    <GridLayout />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import GridLayout from "@/components/Pages/Blog/GridLayout";
export default {
  name: "BlogView",
  components: { GridLayout, LayoutPage },
};
</script>

<style lang="scss" scoped></style>
