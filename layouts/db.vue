<script setup>
import Cookies from 'js-cookie'
import Axios from 'axios'
const userId = Cookies.get('userId')
const account = ref(null)
provide('userId', userId)
// const url = 'http://127.0.0.1:8000/'
const url = 'https://backend-springfield.vercel.app/'

provide('url', url)

    const {data:res} = await useFetch(`${url}account/details/${userId}`, {watch: false})
   
     account.value = res.value


provide('account', account)

let sideLinks

const nav = ref([
    { title: "dashboard", link: "/user/" },
    { title: "invest", link: "/user/invest" },
    { title: "withdraw", link: "/user/withdraw" },
    { title: "account", link: "" },
    { title: "contact us", link: "/user/contact" },
    { title: "logout", link: "/auth/signout" },
])

const checkUser = () => {
    if (userId) {

    } else {
        useRouter().push('/auth/signin')
    }
}
onBeforeMount(() => {
    checkUser()
    getAccount()
})

const toogleSidebar = () => {
    const aside = document.querySelector('aside')
    aside.classList.toggle('!w-full')
    //    aside.classList.toggle('w-0')
    aside.classList.toggle('!opacity-100')
    //    aside.classList.toggle('w-0')
}

onMounted(() => {

})

</script>

<template>
    <div v-if="account"
        class="bg-slate-900  min-h-screen border border-transparent main w-full text-violet-300 font-serif selection:bg-primary-hover selection:text-violet-300 ">
        <header class="bg-slate-950 w-full h-16 fixed z-50">
            <div class="flex items-center justify-between h-full pe-8">

                <div
                    class="logo hidden md:flex items-center  gap-2  bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]">
                    <img src="~/assets/img/btc-logo.png" alt="" class="rounded-full w-10 h-10 ring-2" />
                    <h2 class="font-semibold italic text-xl text-transparent">
                        Spring Field
                    </h2>
                </div>

                <button @click="toogleSidebar"
                    class="px-3 m-4 block md:hidden ring-1 py-1 rounded-lg hover:ring-4 hover:ring-offset-1 hover:ring-offset-primary-hover">
                    <i class="fa fa-bars"></i>
                </button>

                <div class="flex justify-end items-center  gap-3 ">
                    <img src="~/assets/img/db-user.png" alt="" class="h-10 w-10 rounded-full">
                    <p class="capitalize font-semibold">{{ account.profile.user.username }}</p>
                </div>
            </div>
        </header>

        <div class="mt-16 ">
            <aside class="h-[calc(100vh-64px)] max-w-sm w-0 opacity-0 md:!w-[250px] md:opacity-100 z-40 bg-slate-950 
            flex flex-col gap-y-10 fixed overflow-hidden transition-all duration-500">
                <div class="flex  w-full gap-3 mt-5 mx-3">
                    <img src="~/assets/img/db-user.png" alt="" class="h-10 w-10 rounded-full">
                    <div>
                        <p class="capitalize font-semibold">{{ account.profile.user.first_name }} {{
                            account.profile.user.last_name }}</p>
                        <small>{{ account.profile.user.username }}</small>
                    </div>
                </div>
                <div>
                    <ul role="list" class="mt-5 list-outside pe-4">
                        <nuxt-link :to="x.link" v-for="x, index in nav" :key="index" @click="toogleSidebar">
                            <li class="capitalize side-links  py-3 my-2 px-2 rounded-e-full
                            hover:bg-slate-900">{{ x.title }}</li>
                        </nuxt-link>
                    </ul>
                </div>
            </aside>
            <main class="w-screen ms-0 px-4 sm:px-6 md:w-[calc(100vw-250px)] md:ms-[250px]">
                <slot></slot>
                <footer class="my-5 py-4">

                </footer>
            </main>
        </div>

    </div>
</template>

<style lang="scss" scoped>
aside {
    .router-link-active {
        li {

            border-inline-start-width: 4px;
            border-inline-start-color: rgb(196 181 253);
            background-color: rgb(15 23 42);
        }
    }
}
</style>
