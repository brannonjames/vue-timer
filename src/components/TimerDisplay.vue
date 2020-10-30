<template>
  <div id="timer-display">

      <NumberSelector :disabled="isActive" @number-selector-change="onHourChange">
        <DoubleDigit appended=":" :value="timeObj.hours" />
      </NumberSelector>

      <NumberSelector :disabled="isActive" @number-selector-change="onMinuteChange">
        <DoubleDigit appended="." :value="timeObj.minutes" />
      </NumberSelector>

      <NumberSelector :disabled="isActive" @number-selector-change="onSecondChange">
        <DoubleDigit :value="timeObj.seconds" />
      </NumberSelector>

    </div>
</template>

<script>
import DoubleDigit from '../components/DoubleDigit'
import NumberSelector from '../components/NumberSelector'
export default {
  props: {
    timeObj: { hours: Number, minutes: Number, seconds: Number },
    isActive: Boolean
  },
  components: {
    DoubleDigit,
    NumberSelector
  },
  methods: {
    onHourChange (direction) {
      this.handleTimeChange(direction, 'hours')
    },
    onMinuteChange (direction) {
      this.handleTimeChange(direction, 'minutes')
    },
    onSecondChange (direction) {
      this.handleTimeChange(direction, 'seconds')
    },
    handleTimeChange (direction, propertyName) {
      const property = this.timeObj[propertyName]
      let newValue = 0
      if (direction === 'UP') {
        //
        if (property === 99) {
          newValue = 0
        } else {
          newValue = property + 1
        }
        //
      } else {
        //
        if (property === 0) {
          newValue = 99
        } else {
          newValue = property - 1
        }
        //
      }
      //
      this.$emit('timer-time-change', { ...this.timeObj, [propertyName]: newValue })
    }
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
    img {
      height: 100px;
    }
  }
</style>
