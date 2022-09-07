<template>
  <div
    v-if="$store.state.isFullScreen"
    class="fancybox-container fancybox-show-toolbar fancybox-is-open fancybox-is-zoomable fancybox-can-swipe"
  >
    <div class="fancybox-bg"></div>
    <div class="fancybox-inner">
      <div class="fsi-header-container bg-linear">
        <div class="fsih-icon-container">
          <i @click="changeZoom" class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="fsih-icon-container">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="fancybox-stage">
        <div
          class="fancybox-slide fancybox-slide--image fancybox-slide--current fancybox-slide--complete"
        >
          <div ref="target" class="fancybox-content">
            <img
              @click="setTransform"
              class="fancybox-image"
              :class="[{ 'fsi-zoom-in': isZoom }]"
              src="../assets/img/face-1.jpeg"
              alt="profile picture"
            />
          </div>
        </div>
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
      positionX: 0,
      positionY: 0,
      isDown: false,
    };
  },
  mounted() {
    // (function () {
    //   var curYPos, curXPos, curDown;
    //
    //   this.$refs["target"].addEventListener("mousemove", function (e) {
    //     if (curDown) {
    //       window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
    //     }
    //   });
    //
    //   this.$refs["target"].addEventListener("mousedown", function (e) {
    //     curYPos = e.pageY;
    //     curXPos = e.pageX;
    //     curDown = true;
    //   });
    //
    //   this.$refs["target"].addEventListener("mouseup", function (e) {
    //     curDown = false;
    //     console.log(e);
    //   });
    // })();
    // window.addEventListener("mousemove", this.mouseMove);
    // window.$refs.target.addEventListener("mousedown", this.mouseDown);
    // window.$refs.target.addEventListener("mouseup", this.mouseUp);
    // this.$refs.target.addEventListener("mousedown", this.onGrab);
    // this.$refs.target.addEventListener("touchmove", this.onGrab);
  },
  methods: {
    // mouseMove(e) {
    //   if (this.isDown === true) {
    //     window.scrollTo(
    //       document.body.scrollLeft + (this.positionX - e.pageX),
    //       document.body.scrollTop + (this.positionY - e.pageY)
    //     );
    //   }
    // },
    // mouseDown(e) {
    //   this.isDown = true;
    //   this.positionY = e.pageY;
    //   this.positionX = e.pageX;
    // },
    // mouseUp(e) {
    //   this.isDown = false;
    //   console.log(e);
    // },
    changeZoom() {
      this.isZoom = !this.isZoom;
    },
    setTransform(e) {
      console.log(e.target);
      e.target.style.transform = "translate(-401.68px, -444.294px) scale(1, 1)";
      e.target.style.width = "1500px";
      e.target.style.height = "1411px";
    },
  },
};
</script>

<style lang="scss" scoped>
.fancybox-container {
  margin: 0;
  width: 100vw;
  height: 100vh;
  -webkit-backface-visibility: hidden;
  left: 0;
  outline: none;
  position: fixed;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  transform: translateZ(0);
  z-index: 99992;
}
.fancybox-stage {
  direction: ltr;
  overflow: visible;
  transform: translateZ(0);
  z-index: 99994;
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

.fancybox-slide {
  -webkit-backface-visibility: hidden;
  display: none;
  height: 100%;
  left: 0;
  outline: none;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 44px;
  position: absolute;
  text-align: center;
  top: 0;
  transition-property: transform, opacity;
  white-space: normal;
  width: 100%;
  z-index: 99994;
}

.fancybox-content {
  background: #fff;
  display: inline-block;
  margin: 0;
  max-width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 44px;
  position: relative;
  text-align: left;
  vertical-align: middle;
  transform: translate(0px, 184px);
  width: 370px;
  height: 348.047px;
}
.fancybox-slide--image .fancybox-content {
  animation-timing-function: cubic-bezier(0.5, 0, 0.14, 1);
  -webkit-backface-visibility: hidden;
  background: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: 0;
  max-width: none;
  overflow: visible;
  padding: 0;
  position: absolute;
  top: 0;
  transform-origin: top left;
  transition-property: transform, opacity;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99995;
}
.fancybox-image,
.fancybox-spaceball {
  background: transparent;
  border: 0;
  height: 100%;
  left: 0;
  margin: 0;
  max-height: none;
  max-width: none;
  padding: 0;
  position: absolute;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
}
.fancybox-inner,
.fancybox-stage,
.fancybox-bg {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.fancybox-image {
  vertical-align: middle;
}
.fancybox-is-open .fancybox-stage {
  overflow: hidden;
}
.fancybox-container .fancybox-bg {
  background: rgba(32, 32, 42, 0.98);
  opacity: 1;
}
.fancybox-slide--image {
  padding: 130px 0 60px;
  overflow: hidden;
}
.fancybox-is-sliding .fancybox-slide,
.fancybox-slide--current,
.fancybox-slide--next,
.fancybox-slide--previous {
  display: block;
}
.fancybox-can-pan .fancybox-content,
.fancybox-can-swipe .fancybox-content {
  cursor: grab;
}
@media (min-width: 900px) {
}
</style>
