<template>
  <div class="common-box">
    <h3>Vue3 TypeScript tree view example</h3>
    <ul id="demo">
      <TreeItem
        class="item"
        :model="state.treeData"
        >
      </TreeItem>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, reactive } from 'vue'

export default defineComponent({
  name: 'Tree',
  components: {
    TreeItem: defineAsyncComponent(() => import('./TreeItem.vue'))
  },
  setup () {
    // demo data
    const data = {
      name: 'My Tree',
      children: [
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' }
              ]
            },
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' }
              ]
            }
          ]
        }
      ]
    }
    const state = reactive({
      treeData: data
    })
    onMounted(() => {
      console.log('Tree-----', state.treeData)
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
