<script setup>
definePageMeta({
    layout: "db",
});
const userId = inject("userId");
const account = inject("account");
const url = inject("url");
const form = reactive({
    userId: userId,
    amount: '',
    wallet: "",
    password: "",
    channel: "BTC",
});

const validate_withdrawal = () => {
    if (form.amount == '' || form.wallet == '' || form.channel == '' || form.password == '') {
        alert("please fill in the form completely before initiating transaction")
        return false
    }
    if (account.value.balance < form.amount) {
        alert("insufficient funds on your account balance")
        return false
    }
    return true
}

const initiate = async (e) => {
    const sbutton = document.getElementById("sbutton");

    if (!validate_withdrawal()) {
        return false;
    }
    sbutton.disabled = true;
    const { data: res, error: error } = await useFetch(`${url}transaction/`, {
        method: "post",
        watch: false,
        body: form,
        key: new Date().getTime().toString(),
    });

    if (res.value) {
        if (res.value.status == "success") {
            sbutton.innerHTML = "Initiated";
            e.target.reset();
        } else {
            alert("could not initiate this transaction, Error details \n" + res.value.code);
            sbutton.disabled = false;
        }
    } else {
        alert("could not initiate this transaction at this moment try again later!!!");
        sbutton.disabled = false;
    }
};
</script>

<template>
    <div class="flex justify-center">
        <br />
        <div class="h-max py-2 w-full">
            <section class="">
                <div class="flex items-center px-4 py-8  sm:py-0">
                    <div class="w-full rounded-lg md:mt-0 sm:max-w-2xl xl:p-0 px-4 py-8 shadow-sm">
                        <div class="space-y-4 md:space-y-6 ">
                            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl capitalize">
                                Initiate A Withdrawal
                            </h1>
                            <form class="grid d:grid-cols-2 gap-3 text-white font-sans" @submit.prevent="initiate($event)" autocomplete="off">
                                <div class="">
                                    <label for="amount" class="block mb-1 text-sm font-medium">Amount</label>
                                    <input type="text" pattern="[0-9]+" v-model="form.amount" placeholder="1000"
                                        class="w-full py-2 bg-slate-100 my-2 px-3 !text-black/60 font-semibold rounded-sm
                                        font-mono border-0 outline-none invalid:ring-2 invalid:ring-red-700" />
                                </div>
                                <div class="">
                                    <label for="">Channel</label>
                                    <select v-model="form.channel"
                                        class="appearance-none bg-slate-100 w-full py-2 my-2 px-3 border-0 outline-none !text-black/60 font-semibold">
                                        <option value="BTC">BTC</option>
                                        <option value="USDT">USDT</option>
                                    </select>
                                </div>
                                <div class="w-full md:col-span-2">
                                    <label for="address" class="block mb-1 text-sm font-medium">Wallet Address</label>
                                    <textarea placeholder="payment address" class="bg-slate-100  w-full py-2  my-2 px-3 !text-black/60 font-semibold border-0 
                                        outline-none invalid:ring-2 invalid:ring-red-700" v-model="form.wallet">
                                        </textarea>
                                </div>
                                <div class="w-full">
                                    <label for="password" class="block mb-1 text-sm font-medium">Password</label>
                                    <input type="password" v-model="form.password" placeholder="password"
                                        class="w-full bg-slate-100  py-2 my-2 px-3 !text-black/60 font-semibold border-0 outline-none invalid:ring-2 invalid:ring-red-700" />
                                </div>
                                <div class=" text-center md:col-span-2">
                                    <button type="submit"
                                        class="ring w-fit px-10 py-3 my-6 hover:ring-primary-hover relative group disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                                        id="sbutton">
                                        <i class="fas fa-spinner !hidden group-disabled:!block animate-spin"></i>
                                        Initiate This Withdrawal
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
