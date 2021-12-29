<template>
  <div id="nav">
    <router-link to="/about" class="common">About</router-link>
    <router-link to="/tree" class="common">Tree</router-link>
    <router-link to="/todo" class="common">TodoMVC</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
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
</style>
