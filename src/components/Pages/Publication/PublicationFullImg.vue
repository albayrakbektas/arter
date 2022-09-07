<template>
  <router-link class="card-image-href" to="#">
    <img
      class="card-image"
      src="../../../assets/img/blog/publication/2.jpeg"
      alt=""
    />
    <i class="fas fa-expand"></i>
  </router-link>
</template>

<script>
export default {
  name: "PublicationFullImg",
};
</script>

<style lang="scss" scoped>
.card-image-href {
  margin-bottom: 30px;
}
.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  -webkit-filter: brightness(85%) blur(0);
  filter: brightness(85%) blur(0);
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
a {
  display: block;
  width: 100%;
  outline: inherit;
  overflow: hidden;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  position: relative;
  padding-bottom: 50%;
  &:hover {
    .card-image {
      scale: 1.1;
    }
    i.fa-expand {
      opacity: 0.5;
    }
  }
}
i.fa-expand {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  height: 30px;
  width: 30px;
  position: absolute;
  left: 30px;
  top: 30px;
  border-radius: 50%;
  opacity: 0;
  scale: 1;
  transition: all 0.4s ease-in-out;
  color: #fafafc;
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58, 0.88) 0%,
    rgba(43, 43, 53, 0.88) 100%
  );
  &:hover {
    left: 29px;
    top: 29px;
    height: 32px;
    width: 32px;
    opacity: 1 !important;
  }
}
</style>
