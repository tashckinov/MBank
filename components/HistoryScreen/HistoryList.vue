<script setup lang="ts">
import { useTransactionStore } from '~/stores/useTransactionStore';

const transactionStore = useTransactionStore();

onMounted(() => {
  transactionStore.fetchTransactions();
});
</script>

<template>
  <div class="transaction-blocks">
    <div class="transaction-day" v-for="(day, index) in transactionStore.transactions" :key="index">
      <h6 class="pb-2">{{ transactionStore.formatDate(index) }}</h6>
      <hr class="pb-2">
      <div class="transactions w-full flex flex-col gap-2">
        <div class="transaction flex gap-2 w-full" v-for="transaction in day" :key="transaction.id">
          <i class="pi pi-money-bill min-w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border-1" style="font-size: 1.5rem"></i>
          <div class="w-full">
            <div class="transaction-info flex justify-between">
              <div class="transaction-info">
                <b>{{ transaction.sender_nickname }}</b>
              </div>
              <span class="money"> <span v-if="transaction.type === 'OUT' && transaction.transfer_type_id !== 2">-</span> {{ transaction.amount }} ₲</span>
            </div>
            <p>{{ transaction.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="transactionStore.fetchError" class="error">
      Ошибка при загрузке транзакций: {{ transactionStore.fetchError }}
    </div>
    <div v-if="transactionStore.isLoading" class="loading">
      Загрузка...
    </div>
  </div>
</template>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
