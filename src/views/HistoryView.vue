<template>
  <LayoutPage>
    <HistoryGrid />
  </LayoutPage>
</template>

<script>
import LayoutPage from "@/components/Layouts/LayoutPage";
import HistoryGrid from "@/components/Pages/History/HistoryGrid";
export default {
  name: "HistoryView",
  components: {
    HistoryGrid,
    LayoutPage,
  },
  data() {
    return {
      firstTitle: "Education",
      secondTitle: "Work History",
      firstList: [
        {
          title: "Dokuz Eylul University",
          subTitle: "Student",
          date: "2017 - Present",
          content: "Final Year of Department of Mathematics",
          href: "#",
          isAfter: true,
          buttonContent: "diplome",
        },
        {
          title: "Arter design school",
          subTitle: "Student",
          date: "jan 2018 - may 2020",
          content:
            "Consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?",
          href: "#",
          emptyRoute: true,
          isAfter: true,
          buttonContent: "",
        },
        {
          title: "Web developer courses",
          subTitle: "Student",
          date: "jan 2018 - may 2020",
          content:
            "Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.",
          href: "#",
          isAfter: true,
          buttonContent: "licence",
        },
        {
          title: "Academy of Art University",
          subTitle: "Student",
          date: "jan 2018 - may 2020",
          content:
            "Ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.",
          href: "#",
          isAfter: true,
          buttonContent: "certificate",
        },
      ],
      secondList: [
        {
          title: "Envato",
          subTitle: "Template author",
          date: "jan 2018 - may 2020",
          content:
            "Placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.",
          href: "#",
          emptyRoute: true,
          isAfter: true,
          buttonContent: "",
        },
        {
          title: "Themeforest",
          subTitle: "Template author",
          date: "jan 2018 - may 2020",
          content:
            "Adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?",
          href: "#",
          isAfter: true,
          buttonContent: "recommendation",
        },
        {
          title: "Envato market",
          subTitle: "Template author",
          date: "jan 2018 - may 2020",
          content:
            "Consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.",
          href: "#",
          isAfter: true,
          buttonContent: "recommendation",
        },
        {
          title: "SoftService company",
          subTitle: "Template author",
          date: "jan 2018 - may 2020",
          content:
            "Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.",
          href: "#",
          isAfter: true,
          buttonContent: "recommendation",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
