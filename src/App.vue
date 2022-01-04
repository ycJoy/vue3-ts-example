<template>
  <div id="nav">
    <router-link to="/about" class="common">About</router-link>
    <router-link to="/tree" class="common">Tree</router-link>
    <router-link to="/todo" class="common">TodoMVC</router-link>
    <router-link to="/vantTest" class="common">Vant-Test</router-link>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Tree',
  components: {
  },
  setup () {
    onMounted(() => {
      const baseSize = 14 // 这个是设计稿中1rem的大小。
      function setRem () {
        // 实际设备页面宽度和设计稿的比值
        const scale = document.documentElement.clientWidth / 375
        // 计算实际的rem值并赋予给html的font-size
        document.documentElement.style.fontSize = (baseSize * scale) + 'px'
      }
      setRem()
      window.addEventListener('resize', () => {
        setRem()
      })
    })
  }
})
</script>

<style lang="less">
html{
  font-size: 62.5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size:20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.common{
  padding: 5px 5px;
}
.common-box{
  margin: 10px 10px;
}
</style>
