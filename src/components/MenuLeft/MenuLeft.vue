<template>
  <div
    class="menu-left-container menu-container"
    :class="{ 'active-menu-left': $store.state.isLeftMenuActive }"
  >
    <div>
      <div
        v-if="!$store.state.isDesktopView"
        @click="changeMenu"
        class="menu-container-icon-header"
        :class="[
          {
            'menu-container-icon-header-active': $store.state.isLeftMenuActive,
          },
          {
            'opacity-zero': $store.state.isRightMenuActive,
          },
        ]"
      >
        <span class="material-symbols-outlined"> more_vert </span>
      </div>
      <div class="menu-left-container-header menu-container-header bg-linear">
        <ProfileAvatar />
        <router-link
          :is="$route.name !== 'onepage' ? 'router-link' : 'span'"
          :to="$route.name !== 'onepage' ? '/' : null"
          class="span-link"
        >
          <h5>Bektas Albayrak</h5>
        </router-link>
        <router-link to="#.">
          <p>
            Front-end Developer <br />
            UI/UX Designer
          </p>
        </router-link>
      </div>
      <div class="menu-left-container-header menu-container-content">
        <MainContent />
      </div>
      <div class="menu-left-container-footer menu-container-footer bg-linear">
        <FooterIcons />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from "@/components/MenuLeft/ProfileAvatar";
import FooterIcons from "@/components/MenuLeft/FooterIcons";
import MainContent from "@/components/MenuLeft/MainContent";
export default {
  name: "MenuLeft",
  components: { MainContent, FooterIcons, ProfileAvatar },
  data() {
    return {};
  },
  methods: {
    changeMenu() {
      this.$store.state.isLeftMenuActive = !this.$store.state.isLeftMenuActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-left-container {
  position: absolute;
  left: -80vw;
  width: 80vw;
  transition: 600ms ease-in-out;
  height: 100vh;
}
.active-menu-left {
  transform: translateX(80vw);
}
.menu-container-icon-header {
  justify-content: flex-end;
  transform: translateX(80px);
}
.menu-container-icon-header-active {
  transform: translateX(0);
}
.menu-left-container-header {
  height: auto;
  display: grid;
  justify-items: center;
  * {
    text-align: center;
  }
  a {
    margin: 0 0 10px 0;
  }
  h5 {
    font-size: 15px;
    color: #fafafc;
    transition: 0.4s ease-in-out;
    &:hover {
      color: #ffc107;
    }
  }
  p {
    font-size: 11px;
    color: #8c8c8e;
    margin: 0;
  }
}
.menu-container-header {
  position: absolute;
  z-index: 9;
  left: 0;
  right: 0;
  padding: 30px;
}
.menu-container-content {
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  //height: 100%;
}
::-webkit-scrollbar {
  display: none;
}
.menu-left-container-footer {
  padding: 0 35px;
  max-width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
}
.material-symbols-outlined {
  padding: 30px;
}
span.span-link {
  h5 {
    &:hover {
      color: #fafafc;
    }
  }
}
@media (min-width: 900px) {
  .menu-left-container {
    position: relative;
    height: calc(100vh - 30px);
    width: 290px;
    min-width: 290px;
    left: 0;
    background: #20202a;
  }
}
</style>
