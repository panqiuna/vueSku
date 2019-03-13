<template>
  <div class="hello">
    <div class="SkuContainer">
      <div class="skuLeft">规格：</div>
      <div class="skuRight">
        <div class="colorList" v-for="(item,index) in goodsSkuList" :key="index" @click='removeSku(index)'>
          <span>{{item}}</span>
          <img :src="outimg" alt="" class="outImg">
        </div>
        <span class="skuadd" @click="skuAdd">添加</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'skuSize',
    props:{
      goodsSkuList:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    data() {
      return {
        title: '',
        outimg:
          'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551836732&di=ae512f4557196fcafd18e5a07d6961c8&src=http://bpic.588ku.com/element_origin_min_pic/01/58/86/515748436bc59ed.jpg',
      }
    },
    created() {
    },
    methods: {
      removeSku(index) {
        this.$emit('removeSizeBtn',index)
      },
      skuAdd() {
        this.showSku = !this.showSku;
        this.$emit('skuSizeBtn')
      },
    },
    computed: {},
    components: {},
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  .SkuContainer {
    display: flex;
    .skuLeft {
      flex: 1;
    }
    .skuRight {
      flex: 11;
      .colorList {
        display: inline-block;
        padding: 0 8px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        background: #f7f7f7;
        color: #495060;
        font-size: 12px;
        border-radius: 2px;
        margin: 0 3px;
        .outImg {
          display: inline-block;
          width: 8px;
          vertical-align: middle;
          height: 8px;
          cursor: pointer;
        }
      }
      .skuadd {
        display: inline-block;
        cursor: pointer;
        color: white;
        font-size: 12px;
        width: 56px;
        height: 26px;
        background: #fc8a4c;
        line-height: 26px;
        text-align: center;
      }
    }
  }
</style>
<!--
可写可不写
@removeSizeBtn  删除添加规格
@skuSizeBtn： 添加规格


-->
