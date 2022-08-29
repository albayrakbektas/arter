<template>
  <div class="home">
    <div class="bg-img">
      <div class="bg-img-overlay" />
    </div>
    <div class="rows">
      <div class="scroll-rows">
        <FirstSection />
        <ExperienceCards />
      </div>
    </div>
  </div>
</template>

<script>
import FirstSection from "@/components/Home/top/FirstSection";
import ExperienceCards from "@/components/Home/experience/ExperienceCards";
export default {
  name: "HomeView",
  components: { ExperienceCards, FirstSection },
};
</script>

<style scoped lang="scss">
.bg-img {
  left: 0;
  right: 0;
  background-image: url("../assets/img/home/bg.jpeg");
}
</style>
