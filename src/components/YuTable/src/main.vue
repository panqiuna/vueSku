<template>
    <table border="0" cellspacing="0" cellpadding="0" class="tableSku" :class="{talContainer}">
        <thead>
            <slot name="tabheader"></slot>
        </thead>
        <tbody class="goodsTbody">
            <slot name="tabbody"></slot>
        </tbody>
    </table>
</template>
<script>
export default {
  name: 'YuTable',
  props: {
    talContainer: {
      type: String,
      default: 'tableSku'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.tableSku {
  width: 1062px;
  border: none;
  flex: 11;
}
</style>
