<template>
  <div @click="changeLangAvatar" class="lang-avatar">
    {{ language }}
  </div>
</template>

<script>
export default {
  name: "LanguageAvatar",
  props: {
    language: String,
  },
  mounted() {
    document.querySelector(".lang-avatar").classList.add("lang-avatar-active");
  },
  methods: {
    changeLangAvatar(e) {
      document
        .querySelector(".lang-avatar-active")
        .classList.remove("lang-avatar-active");
      e.target.classList.add("lang-avatar-active");
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-avatar {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  text-transform: uppercase;
  color: #8c8c8e;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e28;
  font-weight: 600;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fafafc;
  }
}
.lang-avatar-active {
  background-color: #ff0000;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  color: #1e1e28;
  &:hover {
    color: unset;
  }
}
</style>
