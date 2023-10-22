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

const validate_withdrawal =()=> {
    if (form.amount == '' || form.wallet==''  ||form.channel == '' || form.password == '') {
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
                <div class="flex items-center justify-center px-4 py-8 mx-auto sm:px-10 sm:py-0">
                    <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 px-4 py-8 shadow-lg shadow-violet-300">
                        <div class="space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                Initiate A Withdrawal
                            </h1>
                            <form class="space-y-3 md:space-y-4" @submit.prevent="initiate($event)" autocomplete="off">
                                <div>
                                    <label for="amount" class="block mb-1 text-sm font-medium">Amount</label>
                                    <input type="text" pattern="[0-9]+"  v-model="form.amount"
                                        class="!appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 outline-none invalid:ring-2 invalid:ring-red-700" />
                                </div>
                                <div>
                                    <label for="">Channel</label>
                                    <select v-model="form.channel"
                                        class="appearance-none w-full bg-slate-700 my-2 px-3 font-mono border-0 outline-none">
                                        <option value="BTC">BTC</option>
                                        <option value="USDT">USDT</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="address" class="block mb-1 text-sm font-medium">Wallet</label>
                                    <input type="text" placeholder="wallet address" v-model="form.wallet"
                                        class="!appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 
                                        outline-none invalid:ring-2 invalid:ring-red-700 autofill:!bg-slate-700" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-1 text-sm font-medium">Password</label>
                                    <input type="password"  v-model="form.password" 
                                        class="autofill:!bg-slate-700 w-full py-1 !bg-slate-700 my-2 px-3 font-mono border-0 outline-none invalid:ring-2 invalid:ring-red-700" />
                                </div>
                                <div class="mt-5 text-center">
                                    <button type="submit"
                                        class="ring w-full py-2 mt-3 hover:ring-primary-hover relative group disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                                        id="sbutton">
                                        <i class="fas fa-spinner invisible group-disabled:visible animate-spin"></i>
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
