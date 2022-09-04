<template>
  <div class="full-screen-image-container">
    <div class="full-screen-image">
      <div class="fsi-header-container bg-linear">
        <div class="fsih-icon-container">
          <i @click="changeZoom" class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="fsih-icon-container">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="img-rel">
        <img
          class="fsi"
          :class="[{ 'fsi-zoom-in': isZoom }]"
          src="../assets/img/face-1.jpeg"
          alt="profile picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullScreen",
  data() {
    return {
      isZoom: false,
    };
  },
  methods: {
    changeZoom() {
      this.isZoom = !this.isZoom;
    },
  },
};
</script>

<style lang="scss" scoped>
.full-screen-image-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 9999999;
  background-color: #1e1e28;
  left: 0;
  top: 0;
  overflow: hidden;
}
.fsi-header-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 999;
}
.fsih-icon-container {
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
}
.full-screen-image {
  position: relative;
  height: 50vh;
  width: 100vw;
  display: grid;
}
.img-rel {
  position: relative;
  overflow: auto;
  width: 100vw;
  height: 100vh;
}
.fsi {
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  object-fit: cover;
  cursor: zoom-in;
  transform: translateY(50%);
}
.fsi-zoom-in {
  scale: 1.5;
  cursor: grab;
  cursor: -o-grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  max-width: none;
  max-height: none;
  //width: 100%;
  //height: 100%;
}
i {
  color: #fafafc;
  opacity: 0.5;
  transition: 0.4s ease-in-out;
  :first-child {
    font-size: 18px;
  }
  &:hover {
    opacity: 1;
  }
}
i.fa-magnifying-glass {
  font-size: 11px;
  &:focus {
    .fsi {
      scale: 1.2;
    }
  }
}
i.fa-xmark {
  font-size: 15px;
}
@media (min-width: 900px) {
  .full-screen-image-container {
    height: calc(100vh - 30px);
    width: calc(100vw - 30px);
  }
  .fsi {
    top: 50%;
    left: 50%;
    height: 50vh;
    width: 50vw;
    transform: translate3d(-50%, 50%, 0);
  }
}
</style>
