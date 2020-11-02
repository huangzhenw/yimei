<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">yijian</router-link>
      <router-link to="/yiqun">yiqun</router-link>
      <router-link to="/yimei">yimei</router-link>
      <router-link to="/yiwo">yiwo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  .nav
    position fixed
    display flex
    width 100%
    bottom 0
    a
        flex:1
        text-align center
</style>
