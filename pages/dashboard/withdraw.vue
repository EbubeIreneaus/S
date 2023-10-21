<script lang="ts" setup>
definePageMeta({
    layout:"db"
})
</script>

<template>
    <div class="flex justify-center">
        <br />
        <div class="h-max py-2  w-full">
            <section class="">
                <div class="flex items-center justify-center px-4 py-8 mx-auto sm:px-10 sm:py-0">
                    <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 px-4 py-8 shadow-lg shadow-violet-300">
                        <div class="space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                Initiate A Withdrawal
                            </h1>
                            <form class="space-y-3 md:space-y-4">
                                <div>
                                    <label for="amount" class="block mb-1 text-sm font-medium">Amount</label>
                                    <input type="text" pattern="[0-9]+" placeholder="1000" class="!appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 
                                        outline-none invalid:ring-2 invalid:ring-red-700" />

                                </div>
                                <div>
                                    <label for="">Channel</label>
                                    <select
                                        class="appearance-none w-full                bg-slate-700 my-2 px-3 font-mono border-0 outline-none">
                                        <option value="BTC">BTC</option>
                                        <option value="USDT">USDT</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="address" class="block mb-1 text-sm font-medium">Wallet</label>
                                    <input type="text" placeholder="wallet address" class="!appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 
                                        outline-none invalid:ring-2 invalid:ring-red-700" />

                                </div>
                                <div>
                                    <label for="password" class="block mb-1 text-sm font-medium">Password</label>
                                    <input type="password" placeholder="*********" class="!appearance-none w-full py-1 bg-slate-700 my-2 px-3 font-mono border-0 
                                        outline-none invalid:ring-2 invalid:ring-red-700" />

                                </div>
                                <div class="mt-5 text-center">
                                    <button type="button" class="ring w-full py-2 mt-3 hover:ring-primary-hover">
                                        Initiate This withdrawal
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
