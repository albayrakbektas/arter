<template>
  <div class="menu-left-main-content">
    <TableInfo />
    <div class="divider" />
    <div class="language-circle-container">
      <LanguageCircle
        v-for="(item, index) of languageCircleList"
        :circle="item"
        :key="index"
      />
    </div>
    <div class="divider" />
    <SkillProgressContainer />
    <div class="divider" />
    <KnowledgeList />
    <div class="divider" />
    <div class="pdf-container">
      <router-link class="download-pdf" to="#.">
        DOWNLOAD CV
        <i class="fa-solid fa-download"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import TableInfo from "@/components/MenuLeft/TableInfo";
import LanguageCircle from "@/components/MenuLeft/LanguageCircle";
import SkillProgressContainer from "@/components/MenuLeft/SkillProgressContainer";
import KnowledgeList from "@/components/MenuLeft/KnowledgeList";
export default {
  name: "MainContent",
  components: {
    KnowledgeList,
    SkillProgressContainer,
    LanguageCircle,
    TableInfo,
  },
  data() {
    return {
      languageCircleList: [
        {
          language: "french",
          percent: "100",
        },
        {
          language: "english",
          percent: "80",
        },
        {
          language: "spanish",
          percent: "70",
        },
      ],
    };
  },
  mounted() {
    document.querySelector(".menu-left-main-content").style.transform =
      "translate3d(0px, 0px, 0px)";
    this.setProgress();
  },
  beforeDestroy() {
    this.setProgress();
  },
  methods: {
    setProgress() {
      const spinners = document.querySelectorAll(".progress-spinner");
      for (let i = 0; i < spinners.length; i++) {
        spinners[i].style.background =
          "conic-gradient(rgb(255, 193, 7) " +
          0 +
          "deg,rgb(255, 193, 7)" +
          Number(this.languageCircleList[i].percent) * 3.6 +
          "deg,rgb(0, 0, 0) " +
          Number(this.languageCircleList[i].percent) * 3.6 +
          "deg,rgb(0, 0, 0) 360deg)";
      }
    },
    // transform(e) {
    //   console.log(document.documentElement.scrollTop);
    //   e.target.style.transform = "translate3d(0px, 0px, 0px)";
    // },
  },
};
</script>

<style lang="scss" scoped>
.menu-left-main-content {
  padding: 230px 0 53px;
  height: 100vh;
  width: 75%;
  margin: 0 auto;
}
.divider {
  background-color: #646466;
  height: 1px;
  width: 100%;
  opacity: 0.5;
}
.language-circle-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 15px;
}
.download-pdf {
  height: calc(100% - 50px);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  gap: 5px;
  justify-content: start;
  padding: 15px 0;
  font-size: 10px;
  color: #8c8c8e;
  line-height: 1.5;
}
</style>
