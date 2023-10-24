<script setup>
import Cookies from "js-cookie";
import Axios from 'axios'
const url = inject("url");
const userId = ref(null);

const send_verification_email = async () => {
    const btn = document.getElementById('resend_button')
    btn.disabled = true
    const res = await Axios.get(`${url}auth/resend_link/`, {
        params: { userId: userId.value },
    });
    if (res.data.status == "success") {
        Cookies.set("userId", res.data.userId);
    }else{
        useRouter().push("/auth/signin");
    }

    const timeout = setTimeout(()=>{
        btn.disabled = false
        clearTimeout(timeout)
    }, 90000)
};

onMounted(() => {
    if (Cookies.get("userId")) {
        userId.value = Cookies.get("userId");
        send_verification_email()
    } else {
        useRouter().push("/auth/signin");
    }
});
</script>

<template>
    <div class="border border-transparent">
        <div class="w-full h-[calc(100vh-100px)] mt-[30px] relative grid content-center">
            <div class="max-w-sm !w-full mx-auto text-center py-5 px-2 shadow-md shadow-violet-300">
                <h2 class="text-2xl">Verify your email account</h2>
                <p class="py-10">
                    we have sent a verification link to your email account
                </p>
                <p>didn't recieve the link?</p>
                <btn class="mt-3 group" @click="send_verification_email($event)" id="resend_button">
                    <i class="fas fa-spinner !hidden group-disabled:!inline-block animate-spin"></i>
                    Resend
                </btn>
            </div>
        </div>
    </div>
</template>

<style></style>
