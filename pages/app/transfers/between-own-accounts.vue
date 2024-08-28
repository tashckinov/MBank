<script setup lang="ts">

definePageMeta({
  layout: 'bank'
})

import AccountSelect from "~/components/TransferScreen/AccountSelect.vue";
import {useUserStore} from '~/stores/useUserStore';
import {useTransactionStore} from '~/stores/useTransactionStore';

const transactionStore = useTransactionStore();
const userStore = useUserStore();
const toast = useToast();
const token = useCookie('token');
const runtimeConfig = useRuntimeConfig();

async function loadData() {
  await userStore.fetchData();
}

onMounted(() => {
  loadData();
});

const selectedAccountFrom = ref(undefined);
const selectedAccountTo = ref(undefined);
const amount = ref(0);

const preAmount = ref(0);
watch(
    () => selectedAccountFrom.value,
    (newVal) => {
      if (newVal && newVal.balance !== undefined) {
        preAmount.value = newVal.balance;
      } else {
        preAmount.value = 0; // Default value if newVal is undefined or doesn't have balance
      }
    }
);


async function sendMoney() {
  const url = `${runtimeConfig.public.apiBase}/me/account-transfer`;
  const data = {
    from: selectedAccountFrom.value.account_number,
    to: selectedAccountTo.value.account_number,
    amount: amount.value,
  };
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', token.value);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, requestOptions);
    switch (response.status) {
      case 200:
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'The transfer was completed successfully',
          life: 3000,
          class: 'w-full sm:w-auto',
        });
        await userStore.updateData();
        await transactionStore.updateTransactions();
        preAmount.value = userStore.data.accounts.find((account) => account.account_id === selectedAccountFrom.value.account_id).balance
        break;
      case 401:
      case 403:
        toast.add({
          severity: 'warn',
          summary: 'Token expired',
          detail: 'You need to login again',
          life: 3000,
          class: 'w-full sm:w-auto',
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
            class: 'w-full sm:w-auto',
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
  <TopMenu back name="Transfer between your own accounts" :notifications="false"/>

  <div class="mx-6 mt-3 flex flex-col gap-3">
    <p>From:</p>
    <AccountSelect class="z-20" v-if="userStore.data" :accounts="userStore.data.accounts"
                   v-model:selectedAccount="selectedAccountFrom"/>
    <p>To:</p>
    <AccountSelect v-if="userStore.data" :accounts="userStore.data.accounts"
                   v-model:selectedAccount="selectedAccountTo"/>
    <p>Amount:</p>
    <InputNumber v-model="amount" inputId="minmax" :min="0" placeholder="0" fluid/>
    <div class="p-2 border rounded-xl w-fit cursor-pointer select-none" v-if="preAmount>0" @click="amount=preAmount">All
      {{ preAmount }} ₲
    </div>
    <Button :disabled="selectedAccountFrom===selectedAccountTo || amount===0" @click="sendMoney">Send</Button>
  </div>

</template>

<style scoped>

</style>