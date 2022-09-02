<template>
  <div class="row">
    <div class="footer-container">
      <div class="footer-left">© 2021 Artur Carter</div>
      <div class="footer-right">
        Template author:&nbsp;
        <a href="#" target="_blank"> Nazar Miller </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMain",
};
</script>

<style lang="scss" scoped>
.row {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  align-items: center;
}
.footer-container {
  padding: 20px 30px 10px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  div {
    margin-bottom: 10px;
    font-size: 11px;
    color: #8c8c8e;
    &:last-child {
      margin-bottom: 20px;
    }
  }
}
</style>
