import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingPage: true,
    isFullScreen: false,
    isDesktopView: window.innerWidth >= 900,
    layoutGrid: "",
    singlePortfolioPage: true,
    isLeftMenuActive: false,
    isRightMenuActive: false,
    isRightMenuNotActive: true,
    isSubItems: false,
    isSubItem: false,
    isOnePage: false,
    xSlideIndex: 0,
    xPosition: 0,
    filterLinks: [
      {
        content: "All Categories",
        dataFilter: "*",
      },
      {
        content: "Web Templates",
        dataFilter: ".webTemplates",
      },
      {
        content: "Logos",
        dataFilter: ".logos",
      },
      {
        content: "Drawings",
        dataFilter: ".drawings",
      },
      {
        content: "UI Elements",
        dataFilter: ".ui",
      },
    ],
    showingPortfolioCards: [],
    portfolioCards: [
      {
        imageSrc: require("../assets/img/portfolio/1.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "short",
        dataFilter: ".webTemplates",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/2.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "tall",
        dataFilter: ".logos",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/3.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "short",
        dataFilter: ".drawings",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/4.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "short",
        dataFilter: ".ui",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/5.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "short",
        dataFilter: ".webTemplates",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/6.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "tall",
        dataFilter: ".logos",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/7.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "short",
        dataFilter: ".drawings",
        buttonContent: "Read more",
      },
      {
        imageSrc: require("../assets/img/portfolio/8.jpeg"),
        imageAlt: "portfolio 1",
        imagehref: "singleproject",
        title: "Title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        size: "short",
        dataFilter: ".ui",
        buttonContent: "Read more",
      },
    ],
    blogCardList: [
      {
        imageSrc: require("../assets/img/blog/1.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/2.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/3.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/4.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/5.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/6.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/7.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
      {
        imageSrc: require("../assets/img/blog/8.jpeg"),
        imageAlt: "blog image",
        imagehref: "singleproject",
        title: "Blog post title",
        content: "Sit amet, consectetur adipisicing elit. Quas, architecto.",
        href: "singleproject",
        buttonContent: "Read more",
        isBlog: true,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
