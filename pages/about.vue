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
        <h1 class="text-3xl tracking-wider">About Us</h1>
        <nuxt-link to="/" class="text-violet-300 hover:text-primary-hover">
          Home</nuxt-link
        >
        |
        <nuxt-link
          to="/service"
          class="text-violet-300 hover:text-primary-hover"
        >
          Service</nuxt-link
        >
      </div>
    </div>
    <div>
      <div class="grid sm:gap-5 md:gap-10 sm:grid-cols-2 md:px-24 my-10 px-3">
        <img src="~/assets/img/about.jpg" alt="" class="h-full w-full object-cover object-center"  />
        <div class="">
          <h2
            class="text-3xl mb-5 tracking-wider relative py-5 before:absolute before:border before:w-24 before:bottom-0 before:border-primary-hover text-center"
          >
            Welcome to SpringField
          </h2>
          <p>
            At SpringField, we are committed to helping you navigate the world of cryptocurrency 
            investments with confidence and ease. Our platform is designed to provide you with a secure and 
            efficient way to grow your wealth through strategic digital asset management.
          </p>
          <h2 class="text-2xl my-5">
            Who We Are
          </h2>
          <p>
            SpringField was founded by a team of experienced financial experts and tech enthusiasts who 
            recognized the immense potential of cryptocurrencies in shaping the future of global finance. With 
            our in-depth knowledge of blockchain technology and investment strategies, we aim to empower individuals 
            and businesses to make informed decisions in the ever-evolving landscape of digital assets.
          </p>
          <h2 class="text-2xl my-5">
            Our Mission
          </h2>
          <p>
            Our mission is to simplify the complexities of cryptocurrency investments, making it accessible to 
            everyone, regardless of their background or expertise. We prioritize transparency, security, and 
            user-centric services, ensuring that our clients have the necessary tools and resources to achieve 
            their financial goals.
          </p>
          <h2 class="text-2xl my-5">
            Our Commitment to Security
          </h2>
          <p>
            Security is at the core of everything we do. We implement cutting-edge security measures and 
            adhere to industry best practices to safeguard your investments and personal information. Rest assured
             that your funds are protected with the highest level of security protocols.
          </p>
        </div>
      </div>
      <use-count />
      <reviews />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
