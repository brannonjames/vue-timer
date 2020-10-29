<template>
  <main>
    <h1>Timer</h1>
    <div id="timer-display">
      <DoubleDigitDisplay appended=":" />
      <DoubleDigitDisplay appended="." />
      <DoubleDigitDisplay />
    </div>
  </main>
</template>

<script>
import DoubleDigitDisplay from '../components/DoubleDigitDisplay'
export default {
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  components: {
    DoubleDigitDisplay
  }
}
</script>

<style lang="scss">
  #timer-display {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      font-size: 22vw;
    }
  }
</style>
