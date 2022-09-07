<template>
  <div class="publication-header">
    <h4>Publication</h4>
    <div class="card-date-container">
      <span class="card-date">Ui Design, Graphic </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicationHeader",
};
</script>

<style lang="scss" scoped>
h4 {
  font-size: 17px;
  margin: 30px 0;
  text-align: center;
}
.card-date-container {
  margin-bottom: 30px;
}
.card-date {
  color: #646466;
  padding: 5px 15px;
  background: #20202a;
  font-size: 10px;
  border-radius: 15px;
}
.publication-header {
  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  align-items: center;
}
@media (min-width: 900px) {
  h4 {
    font-size: 17px;
    margin: 30px 0;
    text-align: center;
  }
  .publication-header {
    justify-content: space-between;
    grid-template-rows: unset;
    grid-template-columns: repeat(2, auto);
  }
  .card-date-container {
    margin-bottom: 0;
  }
}
</style>
