<template>
  <div class="grid-column">
    <CardContainer :title="firstTitle" :card-list="firstList" />
    <CardContainer :title="secondTitle" :card-list="secondList" />
  </div>
</template>

<script>
import CardContainer from "@/components/Pages/History/CardContainer";

export default {
  name: "HistoryGrid",
  components: {
    CardContainer,
  },
  data() {
    return {
      firstTitle: "Education",
      secondTitle: "Work / Experience History",
      firstList: [
        {
          title: "Dokuz Eylul University",
          subTitle: "Department of Mathematics",
          date: "2017 - Present",
          content: "Department of Mathematics",
          href: "https://www.deu.edu.tr/",
          isAfter: false,
          isBlank: true,
          buttonContent: "University Website",
        },
        {
          title: "Anadolu University",
          subTitle: "Web Design and Codding",
          date: "2020 - Present",
          content: "Web Design and Codding",
          href: "https://www.anadolu.edu.tr/",
          isBlank: true,
          isAfter: true,
          buttonContent: "University Website",
        },
        {
          title: "Icel Anadolu High School",
          subTitle: "Student",
          date: "2011 - 2015",
          content: "",
          href: "https://ial.meb.k12.tr/",
          isBlank: true,
          isAfter: true,
          buttonContent: "University Website",
        },
      ],
      secondList: [
        {
          title: "Signess",
          subTitle: "Web Development",
          date: "October 2022",
          content: "Vue.js, Firebase",
          href: "#",
          isBlank: true,
          emptyRoute: true,
          isAfter: true,
          buttonContent: "",
        },
        {
          title: "base64.ai",
          subTitle: "UI Tester",
          date: "June 2022 - September 2022",
          content: "Node.js, Jest, Puppeteer",
          href: "https://base64.ai/",
          isBlank: true,
          isAfter: true,
          buttonContent: "Employer's Website",
        },
        {
          title: "DiaTic",
          subTitle: "Web Development",
          date: "February 2022 - April 2022",
          content: "Vue.js, Node.js, Express.js, AWS",
          href: "#",
          emptyRoute: true,
          isAfter: true,
          buttonContent: "recommendation",
        },
        {
          title: "CV Maker",
          subTitle: "Template Author",
          date: "November 2022 - Present",
          content: "Vue.js, Firebase",
          href: "https://cv-maker.bektasalbayrak.com",
          isBlank: true,
          isAfter: true,
          buttonContent: "Go to Website",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-column {
  width: 100%;
}
@media (min-width: 900px) {
  .grid-column {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
