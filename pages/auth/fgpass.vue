<script setup>
import Axios from 'axios'
const url = inject('url')
const username = ref('')
const success = ref(false)
let timeout
const send_psreset_email = async (e) =>{
    e.target.disabled = true
    const res = await Axios.get(`${url}auth/psreset_link/`, {
        params: { username: username.value.trim() },
    })
    if(res.data.status == 'success'){
        success.value = true
        timeout = setTimeout(()=>{
            e.target.disabled = false
            clearTimeout(timeout)
        }, 40000)
    }else{
        alert('No user with this username on our record!!!')
    }
}
</script>

<template>
    <div class="border border-transparent">
        <div class="w-full h-[calc(100vh-100px)] mt-[-10px] relative grid content-center">
            <div class="max-w-sm !w-full mx-auto text-center py-5 px-2 shadow-md shadow-violet-300">
                <h2 class="text-2xl">Send Me Reset Email</h2>
                <div class="my-3 text-left">
                    <label for="">Enter account Username:</label>
                    <input type="text" v-model="username" placeholder="username" focus class="w-full mt-1 py-2 ps-3 bg-transparent border">
                </div>
                <p class="py-10" v-if="success">
                    we have sent a reset link to your email account
                </p>
                <p>didn't recieve the link?</p>
                <btn class="mt-3 group" @click="send_psreset_email($event)" id="resend_button">
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin"></i>
                    send
                </btn>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
