<template>
  <div>
    <p>{{ display }}</p>
    <p v-if="appended">{{ appended }}</p>
  </div>
</template>

<script>
import { getPaddedString } from '../utilities/numbers'
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    appended: {
      type: String
    }
  },
  computed: {
    display () {
      return getPaddedString(this.value)
    }
  }
}
</script>

<style lang="scss">
  div {
    display: flex;
    p {
      margin: 0;
      font-size: 22vw;
    }
  }
</style>
