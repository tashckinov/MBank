<script setup>
import {ref} from 'vue';
import {defineEmits} from 'vue';

const selectedAccount = ref('');
const isDropdownOpen = ref(false);

const emit = defineEmits(['update:selectedAccount']);

defineProps({
  accounts: Array
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectAccount = (account) => {
  selectedAccount.value = account.account_number;
  isDropdownOpen.value = false;
  emit('update:selectedAccount', account);
};
</script>

<template>
  <div>
<!--    <label for="account" class="block text-sm font-medium text-gray-700 mb-2">Select the account number</label>-->
    <div class="relative">
      <button @click="toggleDropdown"
              class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-left">
        <div v-if="selectedAccount" class="flex items-center">
          <img src="/logo/header-logo.svg" alt="Bank logo" class="w-10 h-10"/>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
              {{ accounts.find(account => account.account_number === selectedAccount).balance }}$
            </div>
            <div class="text-sm text-gray-500">
              {{ accounts.find(account => account.account_number === selectedAccount).name }}
            </div>
          </div>
          <div class="ml-auto text-sm text-gray-500">
            <span class="mr-2">••{{
                accounts.find(account => account.account_number === selectedAccount).account_number.slice(-4)
              }}</span>
          </div>
        </div>
        <span v-else>Select the account number</span>
      </button>
      <div v-if="isDropdownOpen" class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
        <ul class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <li v-for="account in accounts" :key="account.account_number" @click="selectAccount(account)"
              class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
            <div class="flex items-center">
              <img src="/logo/header-logo.svg" alt="Bank logo" class="w-10 h-10"/>
              <div class="ml-4">
                <div class="text-sm font-medium">{{ account.balance }}$</div>
                <div class="text-sm">{{ account.name }}</div>
              </div>
              <div class="ml-auto text-sm">
                <span class="mr-2">••{{ account.account_number.slice(-4) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
