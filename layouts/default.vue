<script setup>
// provide('url', 'http://127.0.0.1:8000/')
provide('url', 'https://backend-springfield.vercel.app/')
const navLinks = reactive([
    { title: "home", link: "/" },
    { title: "about", link: "/about" },
    { title: "service", link: "/service" },
    { title: "contact us", link: "/contact" },
]);

const toogleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("w-0");
    sidebar.classList.toggle("w-[80%]");
    sidebar.classList.toggle("opacity-0");
};
onMounted(() => { });
</script>

<template>
    <main class="bg-slate-900 w-full text-violet-300 font-serif selection:bg-primary-hover selection:text-violet-300 ">
        <header class="!absolute w-full shadow-sm shadow-slate-50/50 z-[999] top-0">
            <div class="h-24 flex items-center lg:container lg:mx-auto py-12 justify-between px-2">

                <div class="logo flex items-center gap-2 bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]">
                    <img src="~/assets/img/btc-logo.png" alt="" class="rounded-full w-10 h-10 ring-2" />
                    <h2 class="font-semibold italic text-xl text-transparent">
                        <NuxtLink to="/">Spring Field</NuxtLink>
                    </h2>
                </div>

                <button @click="toogleSidebar"
                    class="px-3 me-2 block md:hidden ring-1 py-1 rounded-lg hover:ring-4 hover:ring-offset-1 hover:ring-offset-primary-hover">
                    <i class="fa fa-bars"></i>
                </button>

                <div id="sidebar"
                    class="fixed shadow-md shadow-violet-300 w-0 opacity-0 md:opacity-100 h-[100vh] top-0 left-0 bg-slate-900 md:static md:h-auto md:w-auto md:shadow-none md:bg-inherit overflow-hidden transition-all ease-in-out duration-300">
                    <div class="p-2 my-1 mt-4 md:hidden">
                        <div
                            class="logo flex items-center justify-between bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]">
                            <img src="~/assets/img/btc-logo.png" alt="" class="rounded-full w-10 h-10 ring-2" />

                            <i class="fa fa-close fa-xl text-transparent ring-1 ring-offset-1 px-3 py-4 rounded-md hover:ring-2 hover:ring-offset-primary-hover"
                                @click="toogleSidebar"></i>
                        </div>
                    </div>

                    <nav class="capitalize px-5 mt-10 md:px-0 md:mt-0">
                        <div class="flex flex-col md:flex-row gap-x-5 gap-y-4">
                            <ul role="list" class="flex flex-col md:flex-row gap-x-5 gap-y-4">
                                <li :id="link.link" v-for="(link, index) in navLinks" :key="index"
                                    class="py-1 hover:text-primary-hover">
                                    <nuxt-link :to="link.link">{{ link.title }}</nuxt-link>
                                </li>
                            </ul>
                            <nuxt-link to="/auth/signup" class="py-1 hover:text-primary-hover">sign up</nuxt-link>
                            <nuxt-link to="/auth/signin"
                                class="border px-10 py-1 rounded-full hover:ring-offset-2 hover:border-primary-hover hover:border-4 hover:text-primary-hover">sign
                                in</nuxt-link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    <slot></slot>
    <footer class="shadow-md shadow-slate-300 mt-10">
        <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <NuxtLink to="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                        <div class="logo flex items-center gap-2 bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]">
                            <img src="~/assets/img/btc-logo.png" alt="" class="rounded-full w-10 h-10 ring-2" />
                            <h2 class="font-semibold italic text-xl text-transparent">
                                Spring Field
                            </h2>
                        </div>
                    </NuxtLink>
                    <div class="mt-6 lg:max-w-sm">
                        <p class="text-sm">
                            Created in 2012, SpringField Investestment came into the investment market with the primary objective of
                             ensuring that we give as many people who are interested in investing in the financial
                              market, a genuine encounter with the investment market.
                        </p>
                    </div>
                </div>
                <div class="space-y-2 text-sm">
                    <p class="text-base font-bold tracking-wide">Contacts</p>
                    <div class="flex hover:text-primary-hover hover:scale-105">
                        <p class="mr-1">Phone:</p>
                        <a href="+1 401 594 9299" aria-label="Our phone" title="Our phone"
                            class="transition-colors duration-500 text-deep-purple-accent-400">+1 401 594 9299</a>
                    </div>
                    <div class="flex hover:text-primary-hover hover:scale-105">
                        <p class="mr-1">Email:</p>
                        <a href="mailto:info@springfieldinvest.com" aria-label="Our email" title="Our email"
                            class="transition-colors duration-300 text-deep-purple-accent-400">info@springfield.com</a>
                    </div>
                    <div class="flex hover:text-primary-hover hover:scale-105">
                        <p class="mr-1">Address:</p>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"
                            aria-label="Our address" title="Our address"
                            class="transition-colors duration-300 text-deep-purple-accent-400">
                            312 Lovely Street, NY
                        </a>
                    </div>
                </div>
                <div>
                    <span class="text-base font-bold tracking-wide">Social</span>
                    <div class="flex items-center mt-1 space-x-3">
                        <a href="#" class="text-gray-500 transition-colors duration-300 hover:text-primary-hover">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="text-gray-500 transition-colors duration-300 hover:text-primary-hover">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-500 transition-colors duration-300 hover:text-primary-hover">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <p class="mt-4 text-sm text-gray-500">
                        <!-- Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
                        spare ribs salami. -->
                    </p>
                </div>
            </div>
            <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm">
                    © Copyright 2023 SpringField. All rights reserved.
                </p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="/" class="text-sm transition-colors duration-300 hover:text-primary-hover">F.A.Q</a>
                    </li>
                    <li>
                        <a href="/" class="text-sm transition-colors duration-300 hover:text-primary-hover">Privacy
                            Policy</a>
                    </li>
                    <li>
                        <a href="/" class="text-sm transition-colors duration-300 hover:text-primary-hover">Terms &amp;
                            Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</main>
</template>

<style lang="scss" scoped>
header{
    .router-link-active{
        color: rgb(232 28 255);
    }
}
</style>
