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
              textContent: "2 Column",
              href: "portfolio",
              layoutGrid: "two-column-grid",
            },
            {
              textContent: "3 Column",
              href: "portfolio",
              layoutGrid: "three-column-grid",
            },
            {
              textContent: "2 Column Masonry",
              href: "portfolio",
              layoutGrid: "two-column-masonry",
            },
            {
              textContent: "3 Column masonry",
              href: "portfolio",
              layoutGrid: "three-column-masonry",
            },
            {
              textContent: "single project",
              href: "singleproject",
              layoutGrid: "single-project",
            },
            {
              textContent: "single project 2",
              href: "singleproject",
              layoutGrid: "single-project-two",
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
          href: "blog",
          subItems: [
            {
              textContent: "2 column",
              href: "#.",
              layoutGrid: "two-column-grid",
            },
            {
              textContent: "3 Column",
              href: "#.",
              layoutGrid: "three-column-grid",
            },
            {
              textContent: "publication",
              href: "publication",
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
