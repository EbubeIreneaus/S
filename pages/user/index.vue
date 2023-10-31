<script  setup>

definePageMeta({
    layout: "db",
});
const userId = inject("userId");
const url = inject("url");

const account = inject('account')


const { data: transactions } = await useFetch(`${url}transaction/`, {
    method: "get",
    query: { userId: userId },
    watch: false,
    cache: false,
});


const format_amount = (amount) => {
    const num = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 2,
    });
    return num.format(amount);
}
onMounted(() => { });
</script>

<template>
    <div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
            <div class="bg-slate-950 shadow-md shadow-violet-300 h-36 rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.balance) }}</h2>
                        <p>Account Balance</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-green-600/40 rounded-md align-top">
                        <i class="fa fa-long-arrow-right -rotate-45 text-green-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="bg-slate-950 shadow-md shadow-violet-300 h-36 rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.active_investment) }}</h2>
                        <p>Active Investment</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-green-600/40 rounded-md align-top">
                        <i class="fa fa-long-arrow-right -rotate-45 text-green-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="bg-slate-950 shadow-md shadow-violet-300 h-36 rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.pending_withdraw) }}</h2>
                        <p>pending withdrawal</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-red-600/40 rounded-md align-top">
                        <i class="fa fa-long-arrow-right rotate-45 text-red-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="bg-slate-950 shadow-md shadow-violet-300 h-36 rounded-xl">
                <div class="flex h-full items-center justify-between mx-5">
                    <div>
                        <h2 class="text-2xl">{{ format_amount(account.Total_earnings) }}</h2>
                        <p>Total Earnings</p>
                    </div>
                    <div class="px-3 mb-5 py-2 bg-green-600/40 rounded-md align-top">
                        <i class="fa fa-long-arrow-right -rotate-45 text-green-400" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex gap-5 flex-wrap">
            <div class="shadow-md shadow-violet-300 flex flex-col gap-5 justify-center max-w-sm w-full h-80 px-5">
                <h1 class="text-2xl">Last Transactions</h1>
                <div class="flex justify-between px-5">
                    <h2 class="text-xl">Last Deposit:</h2>
                    <p>{{ format_amount(account.last_deposit) }}</p>
                </div>
                <div class="flex justify-between px-5">
                    <h2 class="text-xl">Last Withdraw:</h2>
                    <p>{{ format_amount(account.last_withdraw) }}</p>
                </div>
            </div>
            <div class="shadow-md shadow-violet-300 flex flex-col gap-5 justify-center flex-grow h-80 px-5"></div>
        </div>
        <div class="mt-7">
            <h2 class="text-center text-2xl py-4">Transactions</h2>
            <div class="shadow-md w-full overflow-x-auto">
                <table class="table-auto w-full text-left border-separate border-spacing-y-1" v-if="transactions">
                    <thead class="w-full">
                        <tr class="capitalize">
                            <th class="py-5 px-4">s/n</th>
                            <th class="py-5 px-4">id</th>
                            <th class="py-5 px-4">type</th>
                            <th class="py-5 px-4">channel</th>
                            <th class="py-5 px-4">amount</th>
                            <th class="py-5 px-4">status</th>
                            <th class="py-5 px-4">plan</th>
                            <th class="py-5 px-4">progress</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="odd:bg-slate-800 hover:bg-slate-700" v-for="(tx, index) in transactions" :key="index">
                            <td class="py-3 px-4">
                                <span class="ps-2 ng-binding">{{ ++index }}</span>
                            </td>
                            <td class="px-4">{{ tx.transact_id }}</td>
                            <td class="px-4">{{ tx.type }}</td>
                            <td class="px-4">{{ tx.channel }}</td>
                            <td class="px-4">{{ format_amount(tx.amount) }}</td>

                            <td class="px-4 bg-yellow-600/50 text-yellow-400" v-if="tx.status == 0">
                                awaiting
                            </td>
                            <td class="px-4 bg-green-600/50 text-green-400" v-if="tx.status == 1">
                                approved
                            </td>
                            <td class="px-4 bg-red-600/50 text-red-400" v-if="tx.status == 2">
                                reject
                            </td>

                            <td class="px-4">{{ tx.plan??'****'}}</td>

                            <td class="px-4 bg-yellow-600/50 text-yellow-400" v-if="tx.progress == 'pending'">
                                pending
                            </td>
                            <td class="px-4 bg-green-600/50 text-green-400" v-if="tx.progress == 'active'">
                                active
                            </td>
                            <td class="px-4 bg-red-600/50 text-red-400" v-if="tx.progress == 'completed'">
                               completed
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
