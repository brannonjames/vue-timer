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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: calc(100vh - 54px);
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
}
</style>
