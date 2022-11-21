<template>
  <div
    v-if="!$store.state.isOnePage"
    class="menu-right-container menu-container"
    :class="[
      { 'active-menu-right': $store.state.isRightMenuActive },
      { 'deactive-menu-right': $store.state.isRightMenuNotActive },
    ]"
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
          class="menu-icon menu-close"
          :class="{
            'opacity-zero': $store.state.isLeftMenuActive,
          }"
        >
        </span>
        <span v-else class="menu-icon"></span>
      </div>
      <div
        class="menu-right-container-header menu-container-header bg-linear"
      ></div>
      <div class="menu-right-container-header menu-container-content">
        <div
          v-if="$store.state.isDesktopView"
          class="current-page-text"
          :class="{ 'opacity-zero': $store.state.isRightMenuActive }"
        >
          {{ this.$route.name }}
        </div>
        <MenuRightNav v-if="$store.state.isRightMenuActive" />
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
      this.$store.state.isRightMenuNotActive =
        !this.$store.state.isRightMenuNotActive;
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
  height: 100vh;
}
.active-menu-right {
  transform: translateX(-70vw);
}
.deactive-menu-right {
  transform: translateX(0);
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
  cursor: pointer;
}
.menu-icon {
  opacity: 0.5;
  transition: opacity 1s;
  position: relative;
  margin: 5px 30px 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.menu-icon,
.menu-icon::before,
.menu-icon::after {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  background-color: #8c8c8e;
  content: "";
  width: 15px;
  height: 3px;
  display: block;
  border-radius: 1px;
  backface-visibility: hidden;
}
.menu-icon::before,
.menu-icon::after {
  position: absolute;
}
.menu-icon::before {
  top: -5px;
}
.menu-icon::after {
  top: 5px;
}
.menu-close {
  transform: rotate(45deg);
}
.menu-close::before {
  -webkit-transform: translate(0px, 5px) rotate(-90deg);
  transform: translate(0px, 5px) rotate(-90deg);
}
.menu-close::after {
  -webkit-transform: translate(0px, -5px) rotate(-90deg);
  transform: translate(0px, -5px) rotate(-90deg);
}
.current-page-text {
  transform: rotate(90deg);
  text-align: center;
  color: #ffc107;
  font-weight: 900;
  filter: brightness(80%);
  font-size: 11px;
  position: absolute;
  top: 150px;
  width: 200px;
  left: -63px;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 1s;
}
@media (min-width: 920px) {
  .menu-right-container {
    right: -150px;
    width: 230px;
    top: 0;
    bottom: 0;
    height: calc(100vh - 30px);
  }
  .active-menu-right {
    transform: translateX(-150px);
  }
  .menu-container-icon-header {
    transform: translateX(0px);
    cursor: pointer;
    &:hover {
      .menu-icon {
        opacity: 1;
      }
    }
  }
}
</style>
