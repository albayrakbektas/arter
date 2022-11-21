<template>
  <div class="social-media-icon-container">
    <a
      v-for="(item, index) of socialMediaIconList"
      :key="index"
      :href="item.href"
      target="_blank"
    >
      <i :class="item.name"></i>
    </a>
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
          href: "https://www.linkedin.com/in/bekta%C5%9F-albayrak-ab6aa71b2",
        },
        {
          name: "fa-brands fa-github",
          href: "https://github.com/albayrakbektas",
        },
        {
          name: "fa-brands fa-instagram",
          href: "https://www.instagram.com/albaybektas",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.social-media-icon-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  align-content: center;
  height: 100%;
  a {
    display: flex;
    justify-content: center;
    &:hover {
      i {
        color: #fafafc;
      }
    }
  }
}
i {
  color: #ffc107;
  transition: 0.4s ease-in-out;
  &:hover {
    color: #fafafc;
  }
}
</style>
