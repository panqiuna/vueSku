<template>
  <tr class='theadStyle'>
    <th v-for="(item,index) in list" :key="index">{{item}}</th>
  </tr>
</template>
<script>
export default {
  name: 'HeaderItem',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.theadStyle {
  height: 48px;
  line-height: 48px;
  th {
    min-width: 100px;
    border: 1px solid #eee;
    // padding: 0 5px;
    font-size: 16px;
    color: #2b2b2b;
    text-align: center;
    font-weight: 100;
    background: #eee;
  }
}
</style>
