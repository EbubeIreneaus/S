<script  setup>
definePageMeta({
    layout: "db",
});
const userId = inject('userId')
const url = inject('url')

const invest = reactive({
    userId: userId,
    plan: "bronze",
    amount: null,
    channel: "BTC",
});
const min_amount = computed(() => {
    let min;
    switch (invest.plan) {
        case "bronze":
            min = 50;
            break;
        case "silver":
            min = 350;
            break;
        case "gold":
            min = 900;
            break;
        case "estate":
            min = 5000;
            break;
        case "pro":
            min = 15000;
            break;

        default:
            min = 50;
            break;
    }
    return min;
});
const max_amount = computed(() => {
    let max;
    switch (invest.plan) {
        case "bronze":
            max = 349;
            break;
        case "silver":
            max = 899;
            break;
        case "gold":
            max = 4999;
            break;
        case "estate":
            max = 14999;
            break;
        case "pro":
            max = 500000;
            break;

        default:
            max = 349;
            break;
    }
    return max;
});
const format_amount = (amount) => {
    const num = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
    });
    return num.format(amount);
};
const roi = computed(() => {
    let pct = 0;
    if (invest.amount == null) {
        pct = 0;
    } else {
        if (
            invest.plan == "bronze" &&
            invest.amount >= 50 &&
            invest.amount <= 348
        ) {
            pct = 0.2 * invest.amount;
        } else if (
            invest.plan == "silver" &&
            invest.amount >= 350 &&
            invest.amount <= 899
        ) {
            pct = 0.4 * invest.amount;
        } else if (
            invest.plan == "gold" &&
            invest.amount >= 900 &&
            invest.amount <= 4999
        ) {
            pct = 0.6 * invest.amount;
        } else if (
            invest.plan == "estate" &&
            invest.amount >= 5000 &&
            invest.amount <= 14900
        ) {
            pct = 0.8 * invest.amount;
        } else if (invest.plan == "pro" && invest.amount >= 15000) {
            pct = invest.amount;
        }
    }
    return pct;
});
const total_return = computed(() => {
    if (roi.value == 0) {
        return 0;
    } else {
        return roi.value + invest.amount;
    }
});
const wallet_address = computed(() => {
    return invest.channel == "BTC"
        ? "18pDM9tV7ngtcXAkey1XWkFasmFAPSxig2"
        : "TNfFvxM3j8c5eQfZwUdyNBCi41tqRZGP62";
});

const copyAddress = (e) => {
    e.target.select();
    navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            if (window.navigator.clipboard.writeText(wallet_address.value)) {
                let alert = document.getElementsByClassName("alert")[0];
                alert.classList.add("alert-show");
                setTimeout(() => {
                    alert.classList.remove("alert-show");
                }, 2000);
            }
        } else {

        }
    });
};

const initiate = async (e) => {
    e.target.disabled =true
   
    const {data: res, error: error} = await useFetch(`${url}transaction/`, {
        method: 'post', watch: false, body: invest, key: new Date().getTime().toString()
    })
    if(res.value){
        if(res.value.staus == 'success'){
            e.target.innerHTML = 'Initiated'
             invest.amount = ''
        }else{
            alert("could not initiate this transaction, Try again letter!!!")
            e.target.disabled =false
        }
        
    }else{
        alert("could not initiate this transaction, Try again letter!!!")
            e.target.disabled =false
    }

}

</script>

<template>
    <div>
        <div class="grid md:grid-cols-2 py-5 gap-7">
            <div class="w-full px-3 py-5 shadow-xl shadow-violet-800">
                <div class="flex justify-between">
                    <p>Deposit</p>
                    <p>$500</p>
                </div>
                <div class="my-5">
                    <img src="~/assets/img/btc-bg.jpg" alt="" class="shadow-md h-[200px] w-full object-cover" />
                </div>

                <div>
                    <div class="flex flex-col gap-2">
                        <label class="flex bg-slate-950 px-2 py-2 rounded-lg"
                            :class="{ 'ring-2 ring-violet-600': invest.plan == 'bronze' }">
                            <input type="radio" class="peer hidden" value="bronze" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring h-fit rounded-full text-transparent peer-checked:text-violet-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Bronze</h3>
                                    <p class="font-thin">$50-$349</p>
                                </div>
                                <p class="font-thin font-mono">+20% per complete cycle</p>
                            </div>
                        </label>

                        <label class="flex bg-slate-950 px-2 py-2 rounded-lg"
                            :class="{ 'ring-2 ring-violet-600': invest.plan == 'silver' }">
                            <input type="radio" class="peer hidden" value="silver" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring h-fit rounded-full text-transparent peer-checked:text-violet-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Silver</h3>
                                    <p class="font-thin">$350-$899</p>
                                </div>
                                <p class="font-thin font-mono">+40% per complete cycle</p>
                            </div>
                        </label>

                        <label class="flex bg-slate-950 px-2 py-2 rounded-lg"
                            :class="{ 'ring-2 ring-violet-600': invest.plan == 'gold' }">
                            <input type="radio" class="peer hidden" value="gold" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring h-fit rounded-full text-transparent peer-checked:text-violet-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Gold</h3>
                                    <p class="font-thin">$900-$4,999</p>
                                </div>
                                <p class="font-thin font-mono">+60% per complete cycle</p>
                            </div>
                        </label>

                        <label class="flex bg-slate-950 px-2 py-2 rounded-lg"
                            :class="{ 'ring-2 ring-violet-600': invest.plan == 'estate' }">
                            <input type="radio" class="peer hidden" value="estate" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring h-fit rounded-full text-transparent peer-checked:text-violet-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Real Estate</h3>
                                    <p class="font-thin">$5000 - $14,999</p>
                                </div>
                                <p class="font-thin font-mono">+80% per complete cycle</p>
                            </div>
                        </label>

                        <label class="flex bg-slate-950 px-2 py-2 rounded-lg"
                            :class="{ 'ring-2 ring-violet-600': invest.plan == 'pro' }">
                            <input type="radio" class="peer hidden" value="pro" v-model="invest.plan" />

                            <i
                                class="fas fa-check-circle ring h-fit rounded-full text-transparent peer-checked:text-violet-400 me-3">
                            </i>

                            <div class="w-full px-4 flex flex-col gap-2">
                                <div class="flex justify-between">
                                    <h3 class="font-semibold">Trading Pro</h3>
                                    <p class="font-thin">$15000 - $500,000</p>
                                </div>
                                <p class="font-thin font-mono">+100% per complete cycle</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div class="w-full py-5 shadow-xl shadow-violet-800 px-7">
                <div class="position-relative">
                    <p>Payment Details</p>
                    <p class="text-sm">
                        Complete your payment by providing your payment details
                    </p>
                    <div class="my-2">
                        <label for="">Amount(USD):</label>
                        <input type="number" v-model="invest.amount" step="50" :min="min_amount" :max="max_amount"
                            :placeholder="min_amount"
                            class="appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 outline-none out-of-range:ring-2 out-of-range:ring-red-700" />
                    </div>
                    <div class="my-2">
                        <label for="">Pay with:</label>
                        <select v-model="invest.channel"
                            class="appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 outline-none">
                            <option value="BTC">BTC</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                    <div>
                        <p class="flex justify-between my-4 text-sm">
                            <span>Amount</span>
                            <span class="font-mono">{{ format_amount(invest.amount) }}</span>
                        </p>
                        <p class="flex justify-between text-sm">
                            <span>ROI</span>
                            <span class="font-mono">{{ format_amount(roi) }}</span>
                        </p>
                        <p class="flex justify-between my-4 text-sm">
                            <span>Total Return</span>
                            <span class="font-mono">{{ format_amount(total_return) }}</span>
                        </p>
                    </div>
                    <!-- alert adress copied -->
                    <div
                        class="alert absolute py-5 px-10 max-w-sm w-full shadow-md bottom-[150px] shadow-green-300/50 bg-green-900/90 rounded-2xl">
                        <h3 class="text-green-500">
                            wallet address copied <i class="fas fa-check-circle"></i>
                        </h3>
                    </div>
                    <!-- alert adress copied -->

                    <label for="">Copy and make payment to the address below!</label>
                    <input type="text" name="" readonly id="walletInput" :value="wallet_address"
                        @click="copyAddress($event)"
                        class="appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 outline-none" />

                    <button type="button" class="ring w-full py-2 mt-3 hover:ring-primary-hover relative group
                    disabled:cursor-not-allowed disabled:ring-0 disabled:border"
                        @click="initiate($event)">
                        <i class="fas fa-spinner invisible group-disabled:visible animate-spin "></i> Initiate This Investment
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.alert {
    transform: translateX(100vw);
    opacity: 0;
    transition: all 0.5s ease;
    display: none;
}

.alert-show {
    transform: translateX(0) !important;
    opacity: 1 !important;
    display: block;
}
</style>
