<script setup>
const props = defineProps(["type", 'id']);
</script>

<template>
  <button
    :id="id"
    :type="type"
    class="ring-1 ring-offset-2 px-14 py-2 rounded-full disabled:cursor-not-allowed
     ring-offset-primary-hover hover:text-primary-hover hover:ring-4 disabled:ring-0 disabled:hover:text-violet-300
     disabled:ring-offset-0 disabled:border disabled:border-slate-200"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
</style>
