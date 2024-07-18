<!-- src/components/AccountInput.vue -->
<template>
  <div class="p-4">
    <label for="account-input" class="block text-sm font-medium text-gray-700">Введите номер счета</label>
    <input
        id="account-input"
        type="text"
        v-model="accountNumber"
        @input="formatAccountNumber"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="0000 0000 0000 0000"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const accountNumber = ref('');

const formatAccountNumber = () => {
  accountNumber.value = accountNumber.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
};
</script>

<style scoped>
</style>
