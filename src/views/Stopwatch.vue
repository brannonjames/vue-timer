<template>
  <h1>Stopwatch</h1>
  <main>
    <TimerDisplay @timer-time-change="handleTimeSetChange" :timeObj="timeObj" :isActive="isActiveRef" />
    <div class="button-group">
      <Button v-if="isActiveRef" @click="cancelTimer">CANCEL</Button>
      <Button v-else @click="startTimer()">START</Button>
      <Button @click="handleShareClick" :disabled="!isActiveRef">
        {{ isUrlCopiedRef ? 'URL copied to clipboard!' : 'SHARE' }}
      </Button>
    </div>
  </main>
</template>

<script>
import { reactive, ref, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import TimerDisplay from '../components/TimerDisplay'
import Button from '../components/Button'

export default {
  setup () {
    //
    let timer
    const timeObj = reactive({
      hours: 0,
      minutes: 0,
      seconds: 0
    })
    const isActiveRef = ref(false)
    const isUrlCopiedRef = ref(false)
    //
    const router = useRouter()
    const route = useRoute()
    //
    onBeforeMount(() => {
      if (route.params.date) {
        const endDate = new Date(Number(route.params.date))
        //
        // If a date exists in the URL automatically start the timer
        startTimer(endDate)
      }
    })
    //
    const handleTimeSetChange = ({ hours, minutes, seconds }) => {
      timeObj.hours = hours
      timeObj.minutes = minutes
      timeObj.seconds = seconds
    }
    //
    const handleShareClick = async () => {
      //
      await window.navigator.clipboard.writeText(window.location.href)
      //
      isUrlCopiedRef.value = true
      setTimeout(() => {
        isUrlCopiedRef.value = false
      }, 3000)
      //
    }
    //
    const cancelTimer = () => {
      clearInterval(timer)
      timeObj.hours = 0
      timeObj.minutes = 0
      timeObj.seconds = 0
      isActiveRef.value = false
      router.replace({ name: 'stopwatch', params: { date: '' } })
    }
    //
    const startTimer = (initialStartDate) => {
      //
      isActiveRef.value = true
      //
      let startDate
      if (initialStartDate) {
        startDate = initialStartDate
      } else {
        startDate = new Date()
      }
      //
      router.replace({ name: 'stopwatch', params: { date: startDate.getTime() } })
      //
      timer = setInterval(() => {
        const now = new Date()
        const difference = now.getTime() - startDate.getTime()
        if (difference > 0) {
          timeObj.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          timeObj.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          timeObj.seconds = Math.floor((difference % (1000 * 60)) / 1000)
        } else {
          cancelTimer()
        }
      })
    }
    return {
      timeObj,
      isActiveRef,
      isUrlCopiedRef,
      handleTimeSetChange,
      handleShareClick,
      cancelTimer,
      startTimer
    }
  },
  components: {
    TimerDisplay,
    Button
  }
}

</script>
