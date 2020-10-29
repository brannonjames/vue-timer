<template>
  <router-view />
  <NavBar />
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
}

#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
