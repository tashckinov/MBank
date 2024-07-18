<!-- src/components/AccountSelector.vue -->
<template>
  <div class="p-4">
    <label for="account" class="block text-sm font-medium text-gray-700 mb-2">Выберите номер счета</label>
    <div class="relative">
      <button @click="toggleDropdown" class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-left">
        <div v-if="selectedAccount" class="flex items-center">
          <img src="/logo/header-logo.svg" alt="Логотип банка" class="w-10 h-10"/>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">{{ accounts.find(account => account.number === selectedAccount).balance }}$</div>
            <div class="text-sm text-gray-500">{{ accounts.find(account => account.number === selectedAccount).name }}</div>
          </div>
          <div class="ml-auto text-sm text-gray-500">
            <span class="mr-2">••{{ accounts.find(account => account.number === selectedAccount).number.slice(-4) }}</span>
          </div>
        </div>
        <span v-else>Выберите номер счета</span>
      </button>
      <div v-if="isDropdownOpen" class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
        <ul class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <li v-for="account in accounts" :key="account.number" @click="selectAccount(account.number)" class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
            <div class="flex items-center">
              <img src="/logo/header-logo.svg" alt="Логотип банка" class="w-10 h-10"/>
              <div class="ml-4">
                <div class="text-sm font-medium">{{ account.balance }}$</div>
                <div class="text-sm">{{ account.name }}</div>
              </div>
              <div class="ml-auto text-sm">
                <span class="mr-2">••{{ account.number.slice(-4) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedAccount = ref('');
const isDropdownOpen = ref(false);

const accounts = ref([
  { number: '1234567890123456', balance: 1500, name: 'Основной счет' },
  { number: '2345678901234567', balance: 2500, name: 'Брокерский счет'},
  { number: '3456789012345678', balance: 3500, name: 'Сберегательный счет'},
]);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectAccount = (number) => {
  selectedAccount.value = number;
  isDropdownOpen.value = false;
};
</script>

<style scoped>
</style>
