<template>
  <router-link class="router-button" to="#">
    <span>{{ button.content }}</span>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    button: Object,
  },
};
</script>

<style lang="scss" scoped>
.router-button {
  background-color: #ffc107;
  padding: 5px 35px;
  color: #20202a;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: 0.4s ease-in-out;
  position: relative;
  &:hover {
    transform: translateY(-2px);
  }
}
@media (min-width: 900px) {
  .router-button {
    justify-content: start;
    margin: unset;
    width: fit-content;
  }
}
</style>
