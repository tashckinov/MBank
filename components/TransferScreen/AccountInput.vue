<template>
  <div>
    <label htmlFor="account-input" className="block text-sm font-medium text-gray-700 mb-2">Enter the account
      number</label>
    <input
        id="account-input"
        type="text"
        v-model="formattedAccountNumber"
        @input="formatAccountNumber"
        :class="inputClasses"
        placeholder="0000 0000 0000 0000"
    />
    <p v-if="!isValid" className="mt-2 text-sm text-red-600">The account number must contain 16 numbers.</p>
  </div>
</template>

<script setup>
import {ref, watch, computed} from 'vue';

const props = defineProps({
  accountNumber: {
    type: String,
    default: '',
  }
});
const emit = defineEmits(['update:accountNumber']);

const accountNumberLocal = ref(props.accountNumber || '');

const isValid = computed(() => accountNumberLocal.value.replace(/\s/g, '').length === 16);

const formattedAccountNumber = computed({
  get() {
    return accountNumberLocal.value.replace(/(\d{4})(?=\d)/g, '$1 ');
  },
  set(value) {
    accountNumberLocal.value = value.replace(/\D/g, '').slice(0, 16);
    emit('update:accountNumber', accountNumberLocal.value);
  }
});

const inputClasses = computed(() => ({
  'mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none sm:text-sm': true,
  'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500': isValid.value,
  'border-red-500 focus:ring-red-500 focus:border-red-500': !isValid.value,
}));

watch(() => props.accountNumber, (newVal) => {
  accountNumberLocal.value = newVal || '';
});
</script>

<style scoped>
</style>
