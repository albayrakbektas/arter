<template>
  <div class="slide-code-container">
    &lt;<i>code</i>&gt;I build
    <span
      ref="typewrite"
      class="typewrite"
      data-period="2000"
      data-type='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
    >
      <span ref="wrap" class="wrap"></span> </span
    >&lt;/<i>code</i>&gt;
  </div>
</template>

<script>
export default {
  name: "SlideCode",
  data() {
    return {
      txt: "",
      loopNum: 0,
      isDeleting: false,
      slideContentList: [
        "web interfaces.",
        "ios and android applications.",
        "design mocups.",
        "automation tools.",
      ],
    };
  },
  mounted() {
    this.changeContent();
  },
  methods: {
    changeContent() {
      let toRotate = JSON.parse(this.$refs.typewrite.getAttribute("data-type"));
      let period =
        parseInt(this.$refs.typewrite.getAttribute("data-period"), 10) || 2000;
      let i = this.loopNum % toRotate.length;
      let fullTxt = toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.$refs.wrap.textContent = this.txt;

      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
      setTimeout(() => {
        this.changeContent();
      }, delta);
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-code-container {
  font-family: "Courier Prime", monospace;
  color: #fafafc;
  font-size: 16px;
  min-height: 70px;
  text-align: center;
}
i {
  color: #ffc107;
  font-weight: 300;
}
.wrap {
  border-right: 0.08em solid #fff;
}
</style>
