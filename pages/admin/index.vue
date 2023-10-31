<script  setup>
import Axios from 'axios'
definePageMeta({
    layout: ""
})
const url = 'http://127.0.0.1:8000/'
// provide('url', 'https://backend-springfield.vercel.app/')
const password = ref('')
const AdminLogin = async (e) =>{
    e.target.disabled = true
    const res = await Axios.post(`${url}csadmin/auth`,{'password':password.value})
    if (res.data.status == 'success') {
        sessionStorage.setItem('admin_key', res.data.key)
        useRouter().push('/admin/transact')
    }else{
        alert("Unknown User!! are you trying to hack this page??")
        e.target.disabled = false
    }
}
</script>

<template>
    <div class="w-screen h-screen border flex justify-center bg-slate-900  text-violet-300 font-serif selection:bg-primary-hover selection:text-violet-300 ">
        <div class=" max-w-sm w-full h-fit mt-32 px-3 py-10 shadow-md shadow-black">
           <div class=" ">
            <h1 class="text-center text-2xl mb-5">Admin Login</h1>

            <div class="my-5">
                <label for="" class="block mb-3">Admin Password</label>
                <input type="password" focus v-model="password" id="" placeholder="password"
                class="w-full bg-transparent ps-3 py-2 border rounded-lg mb-5">

                <btn type="button" class="ring w-full py-2 mt-3 hover:ring-primary-hover relative group
                    disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                        @click="AdminLogin($event)">
                        <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin "></i> Login
                    </btn>
            </div>
           </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
