<template>
  <div class="social-media-icon-container">
    <router-link
      v-for="(item, index) of socialMediaIconList"
      :key="index"
      :to="item.href"
    >
      <i :class="item.name"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterIcons",
  data() {
    return {
      socialMediaIconList: [
        {
          name: "fa-brands fa-linkedin-in",
          href: "#.",
        },
        {
          name: "fa-brands fa-dribbble",
          href: "#.",
        },
        {
          name: "fa-brands fa-behance",
          href: "#.",
        },
        {
          name: "fa-brands fa-github",
          href: "#.",
        },
        {
          name: "fa-brands fa-twitter",
          href: "#.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.social-media-icon-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-evenly;
  align-content: center;
  height: 100%;
  a {
    display: flex;
    justify-content: center;
  }
}
</style>
