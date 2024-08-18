<script setup lang="ts">
import {useUserStore} from '~/stores/useUserStore';
import AccountSelect from '~/components/TransferScreen/AccountSelect.vue';

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

definePageMeta({
  layout: 'bank'
})

const selectedAccount = ref(undefined);
const nickname = ref(undefined);
const amount = ref(0);

async function sendMoney() {
  const url = `${runtimeConfig.public.apiBase}/me/nickname-transfer`;
  const data = {
    nickname: nickname.value,
    account_number: selectedAccount.value.account_number,
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
        preAmount.value = userStore.data.accounts.find((account) => account.account_id === selectedAccount.value.account_id).balance

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

const preAmount = ref(0);
watch(
    () => selectedAccount.value,
    (newVal) => {
      if (newVal && newVal.balance !== undefined) {
        preAmount.value = newVal.balance;
      } else {
        preAmount.value = 0; // Default value if newVal is undefined or doesn't have balance
      }
    }
);
</script>

<template>
  <Toast unstyled/>
  <TopMenu back name="Transfer by nickname" :notifications="false"/>
  <div class="px-6 flex flex-col gap-3 mt-3">
    <label for="account" class="block text-sm font-medium text-gray-700">Select the account number</label>
    <AccountSelect v-if="userStore.data" :accounts="userStore.data.accounts" v-model:selectedAccount="selectedAccount"/>
    <label for="account" class="block text-sm font-medium text-gray-700">Receiver's nickname</label>
    <InputText type="text" v-model="nickname" placeholder="Nickname"/>
    <label for="account" class="block text-sm font-medium text-gray-700">Amount:</label>
    <InputNumber v-model="amount" inputId="minmax" :min="0" placeholder="0" fluid/>
    <div class="p-2 border rounded-xl w-fit cursor-pointer select-none" v-if="preAmount>0" @click="amount=preAmount">All
      {{ preAmount }} ₲
    </div>
    <Button @click="sendMoney">Send</Button>
  </div>
</template>

<style scoped>

</style>