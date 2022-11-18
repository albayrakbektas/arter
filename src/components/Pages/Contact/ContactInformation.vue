<template>
  <div class="row">
    <h4>Contact information</h4>
    <div class="table-padding">
      <TableInfo :table-list="addressList" />
    </div>
    <div class="table-padding">
      <TableInfo :table-list="mailList" />
    </div>
    <!--    <div class="table-padding">-->
    <!--      <TableInfo :table-list="phoneList" />-->
    <!--    </div>-->
  </div>
</template>

<script>
import TableInfo from "@/components/MenuLeft/TableInfo";
export default {
  name: "ContactInformation",
  components: { TableInfo },
  data() {
    return {
      addressList: [
        {
          key: "Country:",
          value: "Turkey",
        },
        {
          key: "City:",
          value: "Izmir",
        },
        {
          key: "Street:",
          value: "Bornova",
        },
      ],
      mailList: [
        {
          key: "Email:",
          value: "albayrakbektas44@gmail.com",
        },
        {
          key: "Telegram:",
          value: "@albybk",
        },
        {
          key: "Skype:",
          value: "-",
        },
      ],
      // phoneList: [
      //   {
      //     key: "Support service:",
      //     value: "+78 (098) 333 11 22",
      //   },
      //   {
      //     key: "Office:",
      //     value: "+78 (098) 333 11 22",
      //   },
      //   {
      //     key: "Personal:",
      //     value: "+78 (098) 333 11 22",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
  justify-content: unset;
  padding-top: 30px;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
.table-padding {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 30px;
  margin-bottom: 30px;
}
.information-table {
  padding: 15px 0 !important;
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
  h4 {
    text-align: left;
    grid-area: 1 / span 4;
  }
  .table-padding {
    &:nth-of-type(1) {
      margin-right: 20px;
    }
    &:nth-of-type(2) {
      margin-left: 10px;
      margin-right: 10px;
    }
    &:nth-of-type(3) {
      margin-left: 20px;
    }
  }
}
</style>
