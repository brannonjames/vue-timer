<template>
  <div id="nav-container">
    <nav>
      <router-link :to="{ name: 'timer' }">Timer</router-link>
      <router-link :to="{ name: 'stopwatch' }">Stopwatch</router-link>
    </nav>
  </div>
</template>

<style scoped lang=scss>
  #nav-container {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    nav {
      width: 100%;
      background-color: #BBB;
      padding: 16px;
      max-width: 420px;
      display: flex;
      justify-content: space-around;
    }
  }
</style>
