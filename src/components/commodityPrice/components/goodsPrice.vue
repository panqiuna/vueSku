<!--价格-->
<template>
  <div class="pricrLayout">
    <div class="priceLeft">商品价:</div>
    <div class="priceRight">
      <span class="priceChart">{{goodsPriced}}</span>
      <span class="errortitle" v-show="errorShow">{{text}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'goodsPrice',
    props: {
      goodsPriced: {
        type: [String, Number],
        default: '0'
      },
      errorShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        text: '商品价格必须大于等于0.01并且小于1000万的数字',
      }
    },
    created() {
      this.sukPrice = this.goodsPriced
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .pricrLayout {
    width: 1221px;
    display: flex;
    .priceLeft {
      flex: 1;
    }
    .priceRight {
      flex: 11;
      .priceChart {
        display: inline-block;
        height: 28px;
        line-height: 30px;
        background: rgb(235, 235, 228);
        width: 380px;
        font-size: 14px;
        padding-left: 5px;
        color: #2b2b2b;
      }
      .errortitle {
        display: inline-block;
        color: red;
        font-size: 13px;
        height: 28px;
        background: white;
        line-height: 28px;
        vertical-align: top;

      }
    }
  }
</style>
<!--
:goodsPriced 值 (类型：String, Number)
:errorShow 值（类型：Boolean,默认值：false）
-->

