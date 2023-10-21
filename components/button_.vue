<script setup>
 const props = defineProps(['url'])
</script>

<template>
    <NuxtLink :to="url" class="ring-1 ring-offset-2 px-14 py-2 rounded-full ring-offset-primary-hover hover:text-primary-hover hover:ring-4">
      <slot></slot>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    
</style>
