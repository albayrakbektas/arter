<template>
  <div v-if="$store.state.isFullScreen" class="img-detail-main-container">
    <div class="from-left">
      <i @click="closeFullScreen" class="fa-solid fa-xmark"></i>
      <i @click="navigateImages(-1)" class="fa-solid fa-chevron-left"></i>
      <img
        :src="currentImage.imageSrc"
        :alt="currentImage.imageAlt"
        :key="currentImage.imageSrc"
        class="image"
        ref="image"
      />
      <img
        :src="currentImage.imageSrc"
        :alt="currentImage.imageAlt"
        :key="currentImage.imageSrc + '-bg'"
        class="img-detail-main img-detail-main-bg"
        ref="image"
      />
      <i @click="navigateImages(1)" class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullScreen",
  components: {},
  data() {
    return {
      index: 0,
      currentImage: null,
    };
  },
  mounted() {
    console.log(this.getFullScreenImages);
    this.currentImage = this.getFullScreenImages[this.index];
  },
  computed: {
    getFullScreenImages() {
      return this.$store.getters.getFullScreenImages;
    },
  },
  watch: {
    "$store.state.fullScreenImages": function (val) {
      this.currentImage = val[0];
      console.log(val[0]);
    },
    index: function (val) {
      console.log(val);
      this.currentImage = this.$store.state.fullScreenImages[val];
    },
  },
  methods: {
    changeZoom() {
      this.isZoom = !this.isZoom;
    },
    navigateImages(direction) {
      const arrayLength = this.$store.state.fullScreenImages.length;
      if (direction === 1) {
        this.index++;
        if (this.index >= arrayLength) {
          this.index = 0;
        }
      } else if (direction === -1) {
        this.index--;
        if (this.index < 0) {
          this.index = arrayLength - 1;
        }
      }
    },
    closeFullScreen() {
      this.$store.state.isFullScreen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.from-left {
  //translate: -100% 0;
}
.from-top {
  translate: 0 -100%;
}
.from-right {
  translate: 100% 0;
}
.img-detail-main-container {
  position: fixed;
  z-index: 9999;
  padding: 15px;
  box-sizing: border-box;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  translate: 0 0;
  transition: 1s ease-in-out;
}
.img-detail-main {
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  translate: 0 0;
  transition: 1s ease-in-out;
}
img {
  position: absolute;
  z-index: 9999;
  object-fit: cover;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  scale: 1;
  transition: 0.6s ease-in-out;
  max-height: 50vh;
  max-width: 50vw;
  border: 1px solid rgba(255, 193, 7, 0.3);
  &:hover {
    //scale: 1.1;
  }
}
.img-detail-main-bg {
  max-width: unset;
  max-height: unset;
  z-index: -1;
  filter: blur(8px);
  //width: calc(100vw - 30px);
  //height: calc(100vh - 30px);
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  //translate: 5% 5%;
  cursor: unset;
  object-fit: fill;
  &:hover {
    //scale: 1;
  }
}
.rel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
}
i {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-size: 25px;
  color: #fafafc;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.4s ease-in-out;
  z-index: 999999;
  &:hover {
    opacity: 1;
    color: #ffc107;
  }
}
.fa-xmark {
  font-size: 30px;
  top: 30px;
  right: 30px;
  translate: -30% -30%;
}
.fa-chevron-left {
  left: 5px;
}
.fa-chevron-right {
  right: 5px;
}
@media (max-width: 900px) {
  img {
    width: calc(100vw - 60px);
    max-height: unset;
    max-width: unset;
  }
  .img-detail-main-bg {
    width: 100vw;
  }
}
</style>
