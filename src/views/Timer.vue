<template>
  <main>
    <h1>Timer</h1>
    <TimerDisplay @timer-time-change="handleTimeSetChange" :timeObj="timeObj" :isActive="isActive" />
    <button @click="startTimer">START</button>
  </main>
</template>

<script>
import TimerDisplay from '../components/TimerDisplay'

export default {
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isActive: false
    }
  },
  components: {
    TimerDisplay
  },
  computed: {
    timeObj () {
      const { hours, minutes, seconds } = this
      return { hours, minutes, seconds }
    }
  },
  methods: {
    startTimer () {
      this.isActive = true
      const endDate = new Date()
      const hours = endDate.getHours() + this.hours
      const minutes = endDate.getMinutes() + this.minutes
      const seconds = endDate.getSeconds() + this.seconds
      endDate.setHours(hours, minutes, seconds)
      //
      this.timer = setInterval(() => {
        const now = new Date()
        const difference = endDate.getTime() - now.getTime()

        if (difference > 0) {
          this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          this.seconds = Math.floor((difference % (1000 * 60)) / 1000)
        } else {
          this.isActive = false
          clearInterval(this.timer)
        }
      }, 500)
    },
    handleTimeSetChange ({ hours, minutes, seconds }) {
      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
    }
  }
}
</script>
