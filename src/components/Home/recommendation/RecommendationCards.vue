<template>
  <div class="row">
    <h4>My Services</h4>
    <RecommendationCard
      v-for="(item, index) of cardList"
      :card="item"
      :key="index"
    />
  </div>
</template>

<script>
import RecommendationCard from "@/components/Home/recommendation/RecommendationCard";
export default {
  name: "RecommendationCards",
  components: { RecommendationCard },
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
        },
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-2.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 2,
        },
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-3.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 3,
        },
        {
          imgSrc: require("../../../assets/img/home/recommendation/face-4.jpeg"),
          title: "Paul Trueman",
          subTitle: "Template author",
          content:
            "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
          starCount: 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
</style>
