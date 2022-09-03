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
          href: "#.",
          subItems: [
            {
              textContent: "portfolio-1",
              href: "portfolio",
            },
            {
              textContent: "portfolio-2",
              href: "portfolio",
            },
            {
              textContent: "portfolio-3",
              href: "portfolio",
            },
            {
              textContent: "portfolio-4",
              href: "portfolio",
            },
          ],
        },
        {
          textContent: "history",
          href: "history",
        },
        {
          textContent: "contact",
          href: "contact",
        },
        {
          textContent: "blog",
          href: "#.",
          subItems: [
            {
              textContent: "blog-1",
              href: "blog",
            },
            {
              textContent: "blog-2",
              href: "blog",
            },
            {
              textContent: "blog-3",
              href: "blog",
            },
          ],
        },
        {
          textContent: "onepage",
          href: "onepage",
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
