<template>
  <div class="brand-card-container">
    <img :src="brand.src" :alt="brand.alt" />
  </div>
</template>

<script>
export default {
  name: "BrandCard",
  props: {
    brand: Object,
  },
};
</script>

<style lang="scss" scoped>
.brand-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 120px;
  width: 120px;
  margin-bottom: 30px;
  opacity: 0.5;
}
</style>
