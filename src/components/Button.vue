<template>
  <button v-bind="$props">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  button {
    min-width: 240px;
    max-width: 360px;
    padding: 12px;
    margin-bottom: 24px;
  }
</style>
