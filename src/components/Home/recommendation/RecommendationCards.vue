<template>
  <div class="row">
    <h4>Recommendations</h4>
    <div class="recommendations-scroll-x">
      <div @mousedown="touchEnd" @mouseup="touchStart" class="scroll-hidden">
        <RecommendationCard
          v-for="(item, index) of cardList"
          :card="item"
          :key="index"
        />
      </div>
      <span class="swiper-notification"></span>
    </div>
    <div class="navigation-container">
      <SwiperBullet :card-list="cardList" />
      <SwiperNav />
    </div>
  </div>
</template>

<script>
import RecommendationCard from "@/components/Home/recommendation/RecommendationCard";
import SwiperBullet from "@/components/Home/recommendation/SwiperBullet";
import SwiperNav from "@/components/Home/recommendation/SwiperNav";
export default {
  name: "RecommendationCards",
  components: { SwiperNav, SwiperBullet, RecommendationCard },
  methods: {
    touchStart(e) {
      console.log(e.target.deltaX, e.deltaX);
    },
    touchEnd(e) {
      console.log(e.target.deltaX, e.deltaX);
    },
  },
  data() {
    return {
      cardList: [
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-1.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 1,
          index: 0,
        },
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-2.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 2,
          index: 1,
        },
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-3.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 3,
          index: 2,
        },
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-4.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 4,
          index: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
  width: 343px;
  justify-content: unset;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
.recommendations-scroll-x {
  width: 343px;
  overflow: visible;
}
.scroll-hidden {
  position: relative;
  display: flex;
  box-sizing: content-box;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0px, 0px, 0px);
  width: 100%;
  height: 100%;
  z-index: 1;
  transition-duration: 1000ms;
}
.navigation-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
@media (min-width: 900px) {
  .row {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: unset;
    width: unset;
    position: relative;
    z-index: 99999;
  }
  .recommendations-scroll-x,
  .navigation-container,
  h4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  h4 {
    text-align: left;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
