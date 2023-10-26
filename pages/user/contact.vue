<script setup>
import Axios from "axios";
const url = inject("url");
const account = inject("account");
definePageMeta({
    layout: "db",
});
console.log(account);
const form = reactive({
    first_name: account.value.profile.user.first_name,
    last_name: account.value.profile.user.last_name,
    email: account.value.profile.user.email,
    subject: "",
    message: "",
});
const send_feedback = async(e) => {
    document.getElementById('sbtn').disabled = true
    const res = await Axios.post(`${url}contact/`, form);
    if (res.data) {
        document.getElementById('alert').classList.remove('-translate-x-[400px]')
        document.getElementById('alert').classList.remove('opacity-0')
        e.target.reset()
        document.getElementById('sbtn').disabled = false
    }
}
</script>

<template>
    <div class="flex justify-center">
        <br />
        <div class=" py-2 w-full">
            <section class="">
                <div class="flex items-center justify-center py-8 mx-auto sm:py-0">
                    <div class="mt-[7%]  max-w-sm w-full px-3 overflow-x-hidden ">
                        <div class="bg-green-800/50 rounded-lg shadow text-center text-green-400
                        -translate-x-[400px] opacity-0 transition-all duration-500" id="alert">
                            <p class="text-xl mb-1">Thank You for contacting us!</p>
                            <small class="text-violet-200">Our customer service agent will get back to you as quick as
                                possible</small>
                        </div>

                        <form @submit.prevent="send_feedback($event)">
                            <div>
                                <div class="mt-7 mb-4">
                                    <label for="" class="text-primary-hover">Subject: </label>
                                    <input type="text" placeholder="subject" id=""
                                        class="w-full py-2 0 px-2 rounded-lg" v-model="form.subject" />
                                </div>
                                <label for="" class="text-primary-hover">Message: </label>
                                <textarea name="" id="" cols="30" rows="5" v-model="form.message"
                                    class="w-full p-2 rounded-lg" placeholder="message"></textarea>
                            </div>
                            <btn type="submit" class="mt-2 w-full group mb-3" id="sbtn"> 
                                <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i> send
                                 </btn>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
   
</template>

<style lang="scss" scoped></style>
