<template>
  <div id="NumberSelector">
    <button :disabled="disabled" @click="onUp">UP</button>
    <div>
      <slot></slot>
    </div>
    <button :disabled="disabled" @click="onDown">DOWN</button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean
    }
  },
  methods: {
    onUp () {
      this.$emit('number-selector-change', 'UP')
    },
    onDown () {
      this.$emit('number-selector-change', 'DOWN')
    }
  }
}
</script>

<style scoped lang="scss">
  #NumberSelector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
