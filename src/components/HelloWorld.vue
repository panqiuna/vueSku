<template>
  <div class="container">
    <goodsPrice :goodsPriced='goodsPriced'></goodsPrice><!--价格-->
    <skuColor @addColorbtn="addColorbtn" @removeColorBtn="removeColorBtn"
              :goodsColorList="skuObjectItem.goodsColorList"></skuColor>
    <!--颜色-->
    <skuSize :goodsSkuList="skuObjectItem.goodsSkuList" @skuSizeBtn="skuSizeBtn"
             @removeSizeBtn="removeSizeBtn"></skuSize><!--规格-->
    <!--table-->
    <div class="table" style="display: flex;">
      <div class="layoutLeft">sku表</div>
      <YuTable>
        <HeaderItem slot="tabheader" :list="list"></HeaderItem>
        <tableCell slot="tabbody" v-for="(item,index) in goodsOpitionsList" :key="index"
                   :sukCode="item.shopCode" :barCode="item.articleNum" :sukPrice="item.price"
                   :sukStock="item.stock" :skuColr="item.firstOiption" :skuSize="item.secondOption"
                   @sukPriceBtn="sukPriceBtn" @deleteoff="deleteoff(index)"
        ></tableCell>
      </YuTable>
    </div>
    <!--弹框-->
    <Popout :displayShow="displayShow" @sureClick="sureClick">
      <div slot="appendSize">
        <input type="text" v-model="addSizeColor">
      </div>
    </Popout>
    <!--弹框-->
    <Popout :displayShow="SizeShow" @sureClick="skuSizeSure">
      <div slot="appendSize">
        <input type="text" v-model="secsName">
      </div>
    </Popout>
  </div>
</template>
<script>
  import goodsPrice from './commodityPrice/components/goodsPrice';
  import skuColor from './ColorComponent/src/main';
  import skuSize from './SizeCompoment/src/main';
  import Popout from './pop-up/src/index';
  import YuTable from './YuTable/src/main';
  import HeaderItem from './YuTable/components/headerItem';
  import tableCell from './YuTable/components/tableCell';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        list: [
          '图片',
          '颜色',
          '规格',
          '商家编码(非必选)',
          '商品条形码(非必选)',
          '价格(最低0.01元)',
          '库存',
          '删除'
        ],
        goodsOpitionsList: null,
        goodsPriced: '',
        displayShow: false,
        SizeShow: false,
        secsName: '',
        addSizeColor: '',
        skuObjectItem: {
          goodsColorList: [],
          goodsSkuList: [],
        }
      }
    },
    methods: {
      addColorbtn() {
        this.displayShow = !this.displayShow;//添加颜色
      },
      sukPriceBtn(vaule) {
        this.goodsPriced = vaule
      },
      sureClick() {
        this.displayShow = !this.displayShow;//添加颜色
        var isHave = false;
        if (this.addSizeColor != '') {
          for (let Size of this.skuObjectItem.goodsColorList) {//校验重复
            if (Size == this.addSizeColor) {
              isHave = true
              break
            }
          }
          if (!isHave) {
            this.skuObjectItem.goodsColorList.push(this.addSizeColor)
          } else {
            alert('已经存在' + this.addSizeColor);
          }
          this.addSizeColor = '';
          this.skuObject()
        } else {
          alert('请添加')
        }
      },
      removeColorBtn(index) {//删除
        this.skuObjectItem.goodsColorList.splice(index,1);
      /*table*/
        this.goodsOpitionsList.splice(index,1)
      },
      skuSizeBtn() {
        this.SizeShow = !this.SizeShow;//添加颜色
      },
      skuSizeSure() {
        this.SizeShow = !this.SizeShow;//添加颜色
        var isHave = false;
        if (this.secsName != '') {
          for (let Size of this.skuObjectItem.goodsSkuList) {//校验重复
            if (Size == this.secsName) {
              isHave = true
              break
            }
          }
          if (!isHave) {
            this.skuObjectItem.goodsSkuList.push(this.secsName);
          } else {
            alert('已经存在' + this.secsName)
          }
          this.secsName = '';
          this.skuObject()
        } else {
          alert('请添加')
        }
      },
      removeSizeBtn(index) {
        this.skuObjectItem.goodsSkuList.splice(index,1);
        this.goodsOpitionsList.splice(index,1)
      },
      skuObject() {
        var v = this.skuObjectItem;
        var Arr = [];
        var index = 0;
        for (var i = 0; i < v.goodsColorList.length; i++) {
          for (var j = 0; j < v.goodsSkuList.length; j++) {
            // console.log(i)
            Arr.push({
              id: '',
              goodId: null,
              firstOiption: v.goodsColorList[i],
              secondOption: v.goodsSkuList[j],
              price: '13',
              originalPrice: null,
              stock: 70,
              image: 'https://shopfile.woyihome.com/test/shangping/hailanzhijia/haixiangqintu/H3.jpg',
              shopCode: null,
              articleNum: 'HKCAD3E290A',
              shopId: null
            })
          }
        }
        this.goodsOpitionsList = Arr
      },
      deleteoff(index){//删除表格
        this.goodsOpitionsList.splice(index,1);
        this.skuObjectItem.goodsColorList.splice(index,1);
        this.skuObjectItem.goodsSkuList.splice(index,1);
        this.goodsPriced=''
      }
    },
    components: {
      goodsPrice, skuColor,
      skuSize, YuTable,
      HeaderItem, tableCell,
      Popout
    }
  }
</script>
<style lang="less" scoped>
  .container {
    width: 1221px;
    .table {
      display: flex;
      margin: 20px 0;
      .layoutLeft {
        flex: 1;
      }
    }
  }
</style>
