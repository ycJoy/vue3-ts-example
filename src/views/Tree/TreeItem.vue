<template>
  <li>
    <div
        :class="{bold: isFolder}"
        @click="toggle"
        @dblclick="changeType">
        {{model.name}}
        <span v-if="isFolder">[{{state.open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="state.open" v-if="isFolder">
        <TreeItem
        class="item"
        v-for="model in state.model.children"
        :model="model"
        :key="model">
        </TreeItem>
        <li class="add" @click="addChild">+</li>
    </ul>
    </li>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, computed } from 'vue'

export default defineComponent({
  name: 'TreeItem',
  props: {
    model: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const state = reactive({
      model: props.model,
      open: false
    })
    const isFolder = computed(() => {
      return state.model.children && state.model.children.length
    })

    const toggle = () => {
      if (isFolder.value) {
        state.open = !state.open
      }
    }

    const changeType = () => {
      if (!isFolder.value) {
        state.model.children = []
        addChild()
        state.open = true
      }
    }
    const addChild = () => {
      state.model.children.push({
        name: 'new stuff'
      })
    }

    onMounted(() => {
      console.log('TreeItem---')
    })

    return {
      state,
      isFolder,
      toggle,
      changeType,
      addChild
    }
  }
})
</script>
<style lang="less" scoped>
 .item {
  cursor: pointer;
  text-align: left;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

</style>
