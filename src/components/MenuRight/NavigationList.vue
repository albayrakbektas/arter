<template>
  <li
    @click="showSubItems"
    class="menu-item"
    :class="{ 'menu-item-dropdown': item.subItems }"
  >
    <router-link :to="item.href">
      <span>
        {{ item.textContent }}
      </span>
      <span
        v-if="item.subItems && !isSubItem"
        class="material-symbols-outlined"
      >
        keyboard_arrow_right
      </span>
      <span v-if="item.subItems && isSubItem" class="material-symbols-outlined">
        keyboard_arrow_down
      </span>
    </router-link>
    <ul
      class="menu-right-nav-container menu-right-subNav-container"
      :class="{ 'active-menu-right-subNav-container': isSubItem }"
    >
      <li
        v-for="(subItem, subIndex) of item.subItems"
        class="menu-item menu-sub-item"
        :class="{ 'menu-sub-item-visible': isSubItem }"
        :key="subIndex"
      >
        <router-link :to="subItem.href">
          <span>
            {{ subItem.textContent }}
          </span>
          <span
            v-if="subItem.subItems && !isSubItem"
            class="material-symbols-outlined"
          >
            keyboard_arrow_right
          </span>
          <span
            v-if="subItem.subItems && isSubItem"
            class="material-symbols-outlined"
          >
            keyboard_arrow_down
          </span>
        </router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavigationList",
  data() {
    return {
      isSubItem: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    showSubItems() {
      this.isSubItem = !this.isSubItem;
    },
  },
};
</script>

<style lang="scss" scoped>
.material-symbols-outlined {
  font-size: 1.2rem;
}
li {
  display: block;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: transparent;
  span {
    text-transform: uppercase;
    display: inline-flex;
    vertical-align: middle;
  }
}
.menu-right-subNav-container {
  display: block;
  position: relative;
  transition: max-height 600ms ease-in-out;
  max-height: 0;
  padding-left: 0;
  background-color: #20202a;
  -webkit-filter: brightness(95%);
  filter: brightness(95%);
  box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
}
.active-menu-right-subNav-container {
  max-height: 500px;
}
a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 30px;
  line-height: 1.2;
}
.menu-item {
  font-size: 11px;
}
.menu-sub-item {
  font-size: 10px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 600ms ease-in-out;
  &:first-child {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 15px;
  }
}
.menu-sub-item-visible {
  opacity: 1;
  pointer-events: all;
}
</style>
