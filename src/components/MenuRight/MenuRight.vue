<template>
  <div
    class="menu-right-container menu-container"
    :class="{ 'active-menu-right': $store.state.isRightMenuActive }"
  >
    <div>
      <div
        @click="changeMenu"
        class="menu-container-icon-header"
        :class="[
          {
            'menu-container-icon-header-active': $store.state.isRightMenuActive,
          },
          {
            'opacity-zero': $store.state.isLeftMenuActive,
          },
        ]"
      >
        <span
          v-if="$store.state.isRightMenuActive"
          class="material-symbols-outlined"
          :class="{
            'opacity-zero': $store.state.isLeftMenuActive,
          }"
        >
          close
        </span>
        <span v-else class="material-symbols-outlined"> menu </span>
      </div>
      <div
        class="menu-right-container-header menu-container-header bg-linear"
      ></div>
      <div class="menu-right-container-header menu-container-content">
        <MenuRightNav />
      </div>
      <div class="menu-right-container-footer menu-container-footer bg-linear">
        <div class="language-container">
          <LanguageAvatar language="EN" id="en" />
          <LanguageAvatar language="TR" id="tr" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageAvatar from "@/components/MenuRight/LanguageAvatar";
import MenuRightNav from "@/components/MenuRight/MenuRightNav";
export default {
  name: "MenuRight",
  components: { MenuRightNav, LanguageAvatar },
  methods: {
    changeMenu() {
      this.$store.state.isRightMenuActive =
        !this.$store.state.isRightMenuActive;
    },
  },
  data() {
    return {
      routerList: [
        {
          textContent: "home",
          href: "#.",
        },
        {
          textContent: "portfolio",
          href: "#.",
          subItems: [
            {
              textContent: "portfolio-1",
              href: "#.",
            },
            {
              textContent: "portfolio-2",
              href: "#.",
            },
            {
              textContent: "portfolio-3",
              href: "#.",
            },
            {
              textContent: "portfolio-4",
              href: "#.",
            },
          ],
        },
        {
          textContent: "history",
          href: "#.",
        },
        {
          textContent: "contact",
          href: "#.",
        },
        {
          textContent: "blog",
          href: "#.",
          subItems: [
            {
              textContent: "blog-1",
              href: "#.",
            },
            {
              textContent: "blog-1",
              href: "#.",
            },
            {
              textContent: "blog-1",
              href: "#.",
            },
          ],
        },
        {
          textContent: "onepage",
          href: "#.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-right-container {
  position: absolute;
  right: -70vw;
  width: 70vw;
  transition: 600ms ease-in-out;
}
.active-menu-right {
  transform: translateX(-70vw);
}
.menu-container-icon-header {
  justify-content: flex-start;
  transform: translateX(-80px);
}
.menu-container-icon-header-active {
  transform: translateX(0);
}
.menu-container-header {
  position: absolute;
  left: 0;
  width: 100%;
}
.menu-container-content {
  display: flex;
  height: 100vh;
  align-items: center;
}
.menu-right-container-footer {
  padding: 30px 26px;
  max-width: 100%;
}
.language-container {
  .lang-avatar:first-child {
    margin-bottom: 10px;
  }
}
.material-symbols-outlined {
  padding: 30px;
}
</style>
