<!--弹框-->
<template>
  <div class="popoutOuter" :class="{mutableStyle}" v-show="displayShow">
    <div class="popclaer" :class="{popclaerCore}">
      <p class="popoutGoods">
        <span class="popoutHtin" :class="{headline}">{{popoutTitle}}</span>
        <span @click='shutBtn' class="shutImg"><img :src="banno" alt=""></span>
      </p>

      <div class="popoutInput" :class="{chlidInput}">
        <slot name="appendSize"></slot>
      </div>
      <footer class="popoutSure" :class="{childSure}">
        <span class="notarize" :class="{childNotarize}" @click="notarizeBtn">确定</span>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Popout',
    props: {
      //动态类名
      mutableStyle: {
        type: String,
        default: 'popoutOuter'
      },
      popclaerCore: {
        type: String,
        default: 'popclaer'
      },
      headline: {
        type: String,
        default: 'popoutHtin'
      },
      chlidInput: {
        type: String,
        default: 'popoutInput'
      },
      childSure: {
        type: String,
        default: 'popoutSure'
      },
      childNotarize: {
        type: String,
        default: 'notarize'
      },
      popoutTitle: {
        //title
        type: String,
        default: '提示'
      },
      /*
      @parmas
      displayShow false隐藏
      */
      displayShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        banno:
          'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551836732&di=ae512f4557196fcafd18e5a07d6961c8&src=http://bpic.588ku.com/element_origin_min_pic/01/58/86/515748436bc59ed.jpg'
      }
    },
    methods: {
      shutBtn() {
        this.$emit('outBtn')
      },
      notarizeBtn() {
        var _this = this;
        this.$emit('sureClick')
      },
      inpBtn() {
        this.$emit('IptvalBtn', this.$refs.input.appendSize)
      }
    },
  }
</script>
<style lang="less" scoped>
  .popoutOuter {
    display: flex;
    z-index: 99;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    .popclaer {
      z-index: 999;
      margin: 150px auto 0;
      width: 450px;
      height: 200px;
      position: absolute;
      background: white;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      .popoutGoods {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        background: #fc8a4c;
        margin: 0;
        -moz-box-shadow: 10px 10px 5px #fc8a4c; /* 老的 Firefox */
        box-shadow: #fc8a4c;
        font-size: 18px;
        line-height: 45px;
        color: white;
        .popoutHtin {
          padding-left: 20px;
        }
        .shutImg {
          margin-right: 20px;
          width: 18px;
          height: 18px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .popoutInput {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        input {
          margin: 30px 0;
          width: 200px;
          height: 28px;
          line-height: 28px;
          border: 2px solid #eee;
        }
      }
      .popoutSure {
        border-top: 1px solid #eee;
        display: flex;
        justify-content: flex-end;
        padding: 12px 25px;
        .notarize {
          display: block;
          width: 90px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: white;
          font-size: 16px;
          background: #fc8a4c;
          cursor: pointer;
        }
      }
    }
  }
</style>
