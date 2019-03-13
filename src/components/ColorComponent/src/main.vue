<template>
  <div class="hello">
    <div class="colorContainer">
      <div class="colorLeft">颜色分类:</div>
      <div class="colorRight">
        <div class="colorList" v-for="(item,index) in  goodsColorList" :key="index" @click="removeBtn(index)">
          <span>{{item}}</span>
          <img :src="img" alt="" class="outImg">
        </div>
        <span class="addColor" @click="addColor">添加</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    naem: 'skuColor',
    props: {
      goodsColorList: {
        type: Array,
        delete: () => {
          return []
        }
      }
    },
    data() {
      return {
        title: '颜色',
        img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551836732&di=ae512f4557196fcafd18e5a07d6961c8&src=http://bpic.588ku.com/element_origin_min_pic/01/58/86/515748436bc59ed.jpg',
      }
    },
    created() {
    },
    methods: {
      removeBtn(index) {
        this.$emit('removeColorBtn',index)
      },
      addColor() {
        this.$emit('addColorbtn')
      },
    },
    computed: {},
    components: {},
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  .colorContainer {
    margin: 20px 0;
    display: flex;
    .colorLeft {
      flex: 1;
    }
    .colorRight {
      flex: 11;
      .colorList {
        display: inline-block;
        padding: 0 8px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        background: #f7f7f7;
        color: #495060;
        border-radius: 2px;
        font-size: 12px;
        margin: 0 3px;
        .outImg {
          display: inline-block;
          width: 8px;
          height: 8px;
        }
      }
      .addColor {
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
@removeColorBtn： 删除 index 参数
@addColorbtn： 添加 颜色
:goodsColorList 传参 类型 数组
-->
