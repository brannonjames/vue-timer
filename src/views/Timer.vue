<template>
  <main>
    <h1>Timer</h1>
    <TimerDisplay @timer-time-change="handleTimeSetChange" :timeObj="timeObj" :isActive="isActive" />
    <Button v-if="isActive" @click="cancelTimer">CANCEL</Button>
    <Button v-else @click="startTimer()">START</Button>
    <Button @click="handleShareClick" :disabled="!isActive">
      {{ urlCopied ? 'URL copied to clipboard!' : 'SHARE' }}
    </Button>
  </main>
</template>

<script>
import TimerDisplay from '../components/TimerDisplay'
import Button from '../components/Button'

export default {
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isActive: false,
      urlCopied: false
    }
  },
  components: {
    TimerDisplay,
    Button
  },
  computed: {
    timeObj () {
      const { hours, minutes, seconds } = this
      return { hours, minutes, seconds }
    }
  },
  created () {
    if (this.$route.params.date) {
      const endDate = new Date(Number(this.$route.params.date))
      //
      // If a date exists in the URL automatically start the timer
      this.startTimer(endDate)
    }
  },
  methods: {
    startTimer (initialEndDate) {
      this.isActive = true
      if (initialEndDate) {
        this.endDate = initialEndDate
      } else {
        const endDate = new Date()
        const hours = endDate.getHours() + this.hours
        const minutes = endDate.getMinutes() + this.minutes
        const seconds = endDate.getSeconds() + this.seconds
        endDate.setHours(hours, minutes, seconds)
        this.endDate = endDate
      }
      //
      // Set the date as a url param to freshing the page brings you back to the correct countdown
      this.$router.replace({ name: 'timer', params: { date: this.endDate.getTime() } })
      //
      this.timer = setInterval(() => {
        const now = new Date()
        const difference = this.endDate.getTime() - now.getTime()

        if (difference > 0) {
          this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          this.seconds = Math.floor((difference % (1000 * 60)) / 1000)
        } else {
          this.$router.replace({ name: 'timer', params: { date: '' } })
          this.isActive = false
          clearInterval(this.timer)
        }
      }, 500)
    },
    cancelTimer () {
      clearInterval(this.timer)
      this.endDate = null
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
      this.isActive = false
    },
    async handleShareClick () {
      //
      await window.navigator.clipboard.writeText(window.location.href)
      //
      this.urlCopied = true
      setTimeout(() => {
        this.urlCopied = false
      }, 3000)
      //
    },
    handleTimeSetChange ({ hours, minutes, seconds }) {
      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
    }
  }
}
</script>
