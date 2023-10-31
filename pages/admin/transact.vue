<script  setup>
import Axios from 'axios'
definePageMeta({
    layout: ""
})
// const url = 'http://127.0.0.1:8000/'
provide('url', 'https://backend-springfield.vercel.app/')

const tId = ref('')
let admin_key = ref('')
const transaction = ref(null)

const getTrasactDetails = async () => {
    transaction.value = null
    const res = await Axios.get(`${url}csadmin/getTransaction/`, {
        params: { tId: tId.value },
        headers: {
            "Content-Type": 'application/json',
            "session-key": admin_key.value
        }
    })
    if (res.data.status != " failed") {
        transaction.value = res.data
    }

}

const approveTransaction = async (e) => {
    e.target.disabled = true
    const res = await Axios.post(`${url}csadmin/approve/`,{ 'tId': tId.value }, {
         headers: {
            "Content-Type": 'application/json',
            "session-key": admin_key.value
        }
    })
    if (res.data.status != "failed") {
        alert("This Transaction has been approved !!!!!")
        transaction.value = null
    }else{
        alert("Error occured while approving this transaction, please try again later!!!!!")
    }

}

onMounted(() => {
    if (sessionStorage.getItem('admin_key')) {
        admin_key.value = sessionStorage.getItem('admin_key')
    } else {
        useRouter().push('/admin/')
    }
})
</script>

<template>
    <div
        class="w-screen h-screen border flex justify-center bg-slate-900  text-violet-300 font-serif selection:bg-primary-hover selection:text-violet-300 ">
        <div class=" max-w-sm w-full mt-32 px-2">
            <div>
                <div class="group flex gap-1">
                    <input type="search" v-model="tId" placeholder="Enter transaction Id"
                        class="flex-grow border-0 outline-none ps-2 bg-transparent border-b">
                    <button class="py-2 px-3 ring-1 ring-primary-hover hover:ring-violet-300" @click="getTrasactDetails"> <i
                            class="fa fa-search"></i></button>
                </div>

                <div class=" mt-10 px-1 overflow-clip " v-if="transaction">
                    <p class="line-clamp-2 overflow-ellipsis my-2">Id: <b>{{ transaction.transact_id }}</b></p>
                    <p>profile: <b>{{ transaction.profile.user.first_name }} {{ transaction.profile.user.last_name }}</b></p>
                    <p class="my-2">status: <b>{{ transaction.status ==0?"pending":"answered" }}</b></p>
                    <p>Amount: <b>${{ transaction.amount }}</b></p>

                    <div class="flex justify-between py-3 my-3">
                        <btn class="ring-green-400 ring-offset-0" @click="approveTransaction($event)">Approve</btn>
                        <btn class="ring-red-400 ring-offset-0" @click="rejectTransaction($event)">Reject</btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
