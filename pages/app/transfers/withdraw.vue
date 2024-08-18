<script setup lang="ts">
import {useUserStore} from '~/stores/useUserStore';
import AccountSelect from '~/components/TransferScreen/AccountSelect.vue';
import {useWithdrawStore} from "~/stores/useWithdrawStore";

const userStore = useUserStore();
const withdrawStore = useWithdrawStore();
const toast = useToast();
const token = useCookie('token');
const runtimeConfig = useRuntimeConfig();

async function loadData() {
  await userStore.fetchData();
  await withdrawStore.fetchData();

}

onMounted(() => {
  loadData();
});

definePageMeta({
  layout: 'bank'
})

// const preAmount = ref(0);
// watch(
//     () => selectedAccount.value,
//     (newVal) => {
//       if (newVal && newVal.balance !== undefined) {
//         preAmount.value = newVal.balance;
//       } else {
//         preAmount.value = 0; // Default value if newVal is undefined or doesn't have balance
//       }
//     }
// );

const selectedAccount = ref(null);
const nickname = ref(undefined);
const amount = ref(0);
const comment = ref('');

async function withdraw() {
  if (!selectedAccount.value) {
    toast.add({
      severity: 'warn',
      summary: 'Warn Message',
      detail: 'Account not selected',
      life: 3000,
      class: 'w-full sm:w-auto'
    });
    return
  }

  const url = `${runtimeConfig.public.apiBase}/me/withdraw`;
  const data = {
    account_id: selectedAccount.value.account_id,
    nickname: nickname.value,
    amount: amount.value,
    comment: comment.value
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", token.value);


  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch(url, requestOptions);

    switch (response.status) {
      case 200:
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'The request has been created',
          life: 3000,
          class: 'w-full sm:w-auto'
        });
        await userStore.updateData();
        await withdrawStore.updateData();
        break;
      case 401:
      case 403:
        toast.add({
          severity: 'warn',
          summary: 'Token expired',
          detail: 'You need to login again',
          life: 3000,
          class: 'w-full sm:w-auto'
        });
        await userStore.logout();
        break;
      default:
        const result = await response.json();
        if (result.error) {
          toast.add({
            severity: 'warn',
            summary: 'Warn Message',
            detail: result.error,
            life: 3000,
            class: 'w-full sm:w-auto'
          });
        }
    }
  } catch (error) {
    console.error(error);
  }


}

</script>

<template>
  <Toast unstyled/>
  <TopMenu back name="Funds withdrawal" :notifications="false"/>
  <div class="px-6 flex flex-col gap-3 mt-3">
    <label for="account" class="block text-sm font-medium text-gray-700">Select the account number</label>
    <AccountSelect v-if="userStore.data" :accounts="userStore.data.accounts" v-model:selectedAccount="selectedAccount"/>
    <label for="account" class="block text-sm font-medium text-gray-700">Recipient's in-game nickname</label>
    <InputText type="text" v-model="nickname" placeholder="Nickname"/>
    <p class="text-gray-500">Do not change your in-game nickname until you receive the funds. If you want to transfer
      money to another player, it is better to use a transfer.</p>
    <label for="account" class="block text-sm font-medium text-gray-700">Amount:</label>
    <InputNumber v-model="amount" inputId="minmax" :min="0" placeholder="0" fluid/>
    <label for="account" class="block text-sm font-medium text-gray-700">Comment:</label>
    <Textarea v-model="comment" rows="5" cols="30"/>
    <p class="text-gray-500">You can write the coordinates of the chest with the hopper(It will be faster) or describe
      where you can be found and what time you are playing (also specify the time zone).</p>

    <!--    <div class="p-2 border rounded-xl w-fit cursor-pointer select-none" v-if="preAmount>0" @click="amount=preAmount">All-->
    <!--      {{ preAmount }} ₲-->
    <!--    </div>-->
    <Button @click="withdraw">Send</Button>
  </div>
  <div class="px-6 mt-3">
    <h3>Requests:</h3>
    <div v-for="withdraw in withdrawStore.data" class="border p-3 rounded-2xl mt-1">
      <div class="border-4">
        <div class="flex justify-between">
          <b>Nickname: {{ withdraw.nickname }}</b>
          <p>Amount: {{ withdraw.amount }}
            <currency/>
          </p>
        </div>
        <div class="flex justify-between">
          <b>Status:</b>
          <p :class="[
        'status select-none',
        withdraw.status === 'OPENED' && 'text-green-600',
        withdraw.status === 'COMPLETED' && 'text-blue-700',
        withdraw.status === 'CANCELLED' && 'text-red-800',
        withdraw.status === 'PENDING' && 'text-blue-700'
      ]">
            {{ withdraw.status }}
          </p>
        </div>
        <p><b>Comment</b>: <br>{{ withdraw.comment }}</p>
        <p><b>Bank comment</b>: <br>{{ withdraw.bankComment }}</p>
      </div>
      <section class="">
        <Button
            v-if="withdraw.status === 'OPENED'"
            @click="cancel(withdraw.id)"
            class="">
          Cancel
        </Button>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>