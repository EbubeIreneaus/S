<script lang="ts" setup></script>

<template>
    <section
        class="relative  bg-[url('~/assets/img/btc-1.jpg')] bg-cover bg-center before:absolute before:w-full before:h-full before:top-0
         before:left-0 before:bg-slate-950/70">

        <div class="py-10 z-40">
            <h2
                class="text-3xl relative  py-5 before:absolute before:border before:w-28 before:bottom-0 before:border-primary-hover text-center ">
                Investment
            </h2>


            <div class="flex lg:flex-row flex-wrap gap-5 mt-10 justify-center py-14 px-5 ">
                <div class="flex flex-col gap-2 shadow-md items-center px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl">Choose a Package</h2>
                    <p class="text-center">
                        You can choose from our robust packages that have been tailored to suit your quest.
                        No hidden Charges, what you see is what you get. Upgrades are also inclusive.
                    </p>
                </div>
                <div class="flex flex-col gap-2 shadow-md items-center  px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl">Deposit Funds</h2>
                    <p class="text-center">
                        Choose from Paypal and all the Money Order (Netteler, Skrill, Master Card) to Bitcoin and
                        effortlessly fund your account.
                    </p>
                </div>

                <div class="flex flex-col gap-2 shadow-md items-center  px-5 py-5 basis-[350px] grow z-40">
                    <h2 class=" text-2xl">Withdraw Profits</h2>
                    <p class="text-center">
                        With Quick and Fast Withdrawals, you can be sure to receive your profit into your desired channel of
                        withdrawal within 5 business working days.
                    </p>
                </div>
            </div>

            <h2
                class="text-3xl relative py-5 my-14 before:absolute before:border before:w-28 before:bottom-0 before:border-primary-hover text-center">
                Choose Package
            </h2>

            <div class="grid sm:grid-cols-3 lg:grid-cols-5 place-items-center  gap-y-7 relative px-5">
                <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center bg-gradient-to-r from-[#40c9ff] to-[#e81cff] bg-clip-text 
                        text-transparent font-bold"> Bronze Plan</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $50 - $349
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">20% ROI</li>
                        <li class="py-3">Withdraw Anytime</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <button_  url="/auth/signin" >Get Started</button_></div>
                    </ul>
                </div>

                <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center bg-gradient-to-r from-[#40c9ff] to-[#e81cff] bg-clip-text 
                        text-transparent font-bold"> Silver plan</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $350 - $899
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">40% ROI</li>
                        <li class="py-3">Withdraw 48hrs</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <button_  url="/auth/signin" >Get Started</button_></div>
                    </ul>
                </div> 
                 <div class="flex flex-col gap-5 shadow-lg items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center bg-gradient-to-r from-[#40c9ff] to-[#e81cff] bg-clip-text 
                        text-transparent font-bold"> Gold Plan</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $900 - $4999
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">60% ROI</li>
                        <li class="py-3">Withdraw 72hrs</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <button_  url="/auth/signin" >Get Started</button_></div>
                    </ul>
                </div> 

                   <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center bg-gradient-to-r from-[#40c9ff] to-[#e81cff] bg-clip-text 
                        text-transparent font-bold">Real Estate</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $5000 - $14,999
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">80% ROI</li>
                        <li class="py-3">Withdraw 48hrs</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <button_  url="/auth/signin" >Get Started</button_></div>
                    </ul>
                </div>  
                <div class="flex flex-col gap-5 shadow-sm items-center shadow-slate-300 px-5  py-7">
                    <h2
                        class=" text-3xl text-center bg-gradient-to-r from-[#40c9ff] to-[#e81cff] bg-clip-text 
                        text-transparent font-bold">Trading Pro</h2>
                    <p class="text-center font-serif font-semibold text-xl">
                        $15000 - $500,000
                    </p>
                    <ul role="list" class="text-center">
                        <li class="py-3">100% ROI</li>
                        <li class="py-3">Withdraw 96hrs</li>
                        <li class="py-3">24/7 Customer Support</li>

                       <div class="mt-14"> <button_  url="/auth/signin" >Get Started</button_></div>
                    </ul>
                </div>


            </div>
    </div>
</section></template>

<style lang="scss" scoped></style>
