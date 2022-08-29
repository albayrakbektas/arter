<template>
  <div class="slide-code-container">
    &lt;<i>code</i>&gt; &lt;/<i>code</i>&gt;
  </div>
</template>

<script>
export default {
  name: "SlideCode",
};
</script>

<style lang="scss" scoped>
.slide-code-container {
  font-family: "Courier Prime", monospace;
  color: #fafafc;
  font-size: 16px;
}
i {
  color: #ffc107;
}
</style>
