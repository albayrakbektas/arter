<template>
  <div
    class="menu-left-container menu-container"
    :class="{ 'active-menu-left': $store.state.isLeftMenuActive }"
  >
    <div>
      <div
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
        <router-link to="#.">
          <h5>Bektas Albayrak</h5>
        </router-link>
        <router-link to="#.">
          <p>
            Front-end Developer <br />
            UI/UX Designer
          </p>
        </router-link>
      </div>
      <div class="menu-left-container-header menu-container-content"></div>
      <div class="menu-left-container-footer menu-container-footer bg-linear">
        <div class="social-media-icon-container">
          <router-link
            v-for="(item, index) of socialMediaIconList"
            :key="index"
            :to="item.href"
          >
            <i :class="item.name"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from "@/components/ProfileAvatar";
export default {
  name: "MenuLeft",
  components: { ProfileAvatar },
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
  height: fit-content;
  display: grid;
  justify-items: center;
  * {
    text-align: center;
  }
  h5 {
    font-size: 15px;
    color: #fafafc;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 11px;
    color: #8c8c8e;
    margin: 0;
  }
}
.menu-container-header {
  position: absolute;
  left: 0;
  right: 0;
  padding: 30px;
}
.menu-container-content {
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: hidden;
}
.menu-left-container-footer {
  padding: 0 35px;
  max-width: 100%;
  height: 50px;
  display: grid;
  align-items: center;
}
.language-container {
  .lang-avatar:first-child {
    margin-bottom: 10px;
  }
}
.material-symbols-outlined {
  padding: 30px;
}
.social-media-icon-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-evenly;
  a {
    display: flex;
    justify-content: center;
  }
}
</style>
