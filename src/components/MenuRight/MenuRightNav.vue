<template>
  <ul class="menu-right-nav-container">
    <NavigationList
      v-for="(item, index) of routerList"
      :item="item"
      :key="index"
    />
  </ul>
</template>

<script>
import NavigationList from "@/components/MenuRight/NavigationList";
export default {
  name: "MenuRightNav",
  components: { NavigationList },
  data() {
    return {
      isSubItem: false,
      routerList: [
        {
          textContent: "home",
          href: "/",
        },
        {
          textContent: "portfolio",
          href: "/",
          subItems: [
            {
              textContent: "All",
              href: "/portfolio",
            },
            {
              textContent: "Arter",
              href: "/project/arter",
              detailedProject: "arter",
            },
            {
              textContent: "CV-maker",
              href: "/project/cv-maker",
              detailedProject: "cv-maker",
            },
            {
              textContent: "Ramsey",
              href: "/project/ramsey",
              detailedProject: "ramsey",
            },
          ],
        },
        {
          textContent: "history",
          href: "/history",
        },
        {
          textContent: "contact",
          href: "/contact",
        },
        {
          textContent: "onepage",
          href: "/onepage",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-right-nav-container {
  width: 100%;
  margin-bottom: 60px;
}
ul {
  padding-inline-start: 0;
}
</style>
