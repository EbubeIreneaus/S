<script lang="ts" setup>
</script>

<template>
  <div class="">
    <div
      class="bg-[url('~/assets/img/btc-bg.jpg')] relative bg-cover bg-center h-[300px] w-full before:w-full before:h-full before:absolute before:bg-slate-900/50 before:z-0"
    >
      <div
        class="absolute z-50 top-1/3 left-0 w-full sm:top-1/2 text-white text-center"
      >
        <h1 class="text-3xl tracking-wider">Our Service</h1>
        <nuxt-link to="/" class="text-violet-300 hover:text-primary-hover">
          Home</nuxt-link
        >
        |
        <nuxt-link
          to="/about"
          class="text-violet-300 hover:text-primary-hover"
        >
          About</nuxt-link
        >
      </div>
    </div>
    <div>
        <service />
        <invest />
        <reviews />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
