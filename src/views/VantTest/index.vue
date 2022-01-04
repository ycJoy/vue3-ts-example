<template>
  <div class="common-box">
      <div>
      <van-uploader v-model="state.fileList"  :after-read="afterRead"
      :max-count="4" :max-size="500 * 1024"
      @oversize="onOversize" :multiple="false"/>

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link />
          <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
        <van-cell icon="gift-o" title="我收到的礼物" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { Row, Col, Icon, Cell, CellGroup, Uploader } from 'vant'
export default defineComponent({
  name: 'Tree',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Uploader.name]: Uploader
  },
  setup () {
    // demo data
    const data = [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'uploading',
        message: '上传中...'
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'failed',
        message: '上传失败'
      }
    ]
    const state = reactive({
      fileList: data
    })
    onMounted(() => {
      console.log('Tree-----', state.fileList)
    })
    return {
      state
    }
  }
})
</script>
<style lang="less" scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
