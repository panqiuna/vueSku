<template>
  <tr>
    <td class="tabimg">
      <img :src="imgUrl" alt="">
    </td>
    <td>{{skuColr}}</td>
    <td>{{skuSize}}</td>
    <td><input type="text" v-model="sukCode"></td>
    <td><input type="text" v-model="barCode"></td>
    <td><input type="text" v-model="sukPrice"></td>
    <td><input type="text" v-model="sukStock"></td>
    <td>
      <span class="deleteStyle" @click="deleteBtn">删除</span>
    </td>
  </tr>
</template>
<script>
  export default {
    name: 'tableCell',
    props: {
      imgUrl: {
        type: String,
        default:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1443063381,2025721196&fm=27&gp=0.jpg'
      },
      skuColr: {
        type: String,
        default: ''
      },
      skuSize: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        sukCode: null,
        barCode: null,
        sukPrice: null,
        sukStock: null
      }
    },
    methods: {
      deleteBtn() {
        this.$emit('deleteoff')
      }
    },
    watch: {
      sukCode(newName, oldName) {//商家编码(非必选)
        var _this = this;
        this.$emit('sukCodeBtn', _this.sukCode)
      },
      barCode(newName, oldName) {//商品条形码(非必选)
        var _this = this;
        this.$emit('barCodeBtn', _this.barCode)
      },
      sukPrice(newPrice, oldprice) {//价格(最低0.01元)
        var _this = this;
        this.$emit('sukPriceBtn', _this.sukPrice)
      },
      sukStock(newName, oldName) {//库存
        var _this = this;
        this.$emit('sukStockBtn', _this.sukStock)
      }
    }
  }
</script>
<style lang="less" scoped>
  tr {
    height: 70px;
    .tabimg {
      img {
        display: block;
        margin: 0 auto 0;
        width: 90px;
        height: 60px;
      }
    }
    td:nth-child(1) {
      border: 1px solid #eee;
    }
    td {
      border: 1px solid #eee;
      text-align: center;
      border-left: none;
      min-width: 100px;
      padding: 0 5px;
      input {
        width: 120px;
        text-indent: 5px;
      }
      .deleteStyle {
        display: inline-block;
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background: red;
        color: white;
        cursor: pointer;
      }
    }
  }
</style>

<!--
可传可不传
:skuColr :颜色  （类型 ：String）
:skuSize: 规格 （类型：String）

sukCodeBtn：传递商家编码(非必选) _this.sukCode：参数
barCodeBtn：商品条形码(非必选) _this.barCode：参数
sukPriceBtn：价格(最低0.01元)  _this.sukPrice：参数
sukStockBtn：库存 _this.sukStock：参数
@deleteoff ：删除
-->
