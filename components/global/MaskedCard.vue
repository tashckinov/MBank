<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <div class="flex items-center gap-2">
      <div class="text-gray-800 tracking-widest text-lg font-mono">
        {{ show ? formattedCardNumber : formattedMaskedCardNumber }}
      </div>
      <button @click="copyCardNumber" class="mt-2 text-blue-500 hover:text-blue-700">
        <i :class="isCopied ? 'pi pi-check' : 'pi pi-copy'"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cardNumber: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    default: false
  }
});

const isCopied = ref(false);

const maskedCardNumber = computed(() => {
  const visibleDigits = props.cardNumber.slice(-4);
  const maskedDigits = props.cardNumber.slice(0, -4).replace(/./g, '•');
  return maskedDigits + visibleDigits;
});

const formattedMaskedCardNumber = computed(() => {
  return maskedCardNumber.value.match(/.{1,4}/g).join(' ');
});

const formattedCardNumber = computed(() => {
  return props.cardNumber.match(/.{1,4}/g).join(' ');
});

const copyCardNumber = () => {
  const textToCopy = props.cardNumber;
  navigator.clipboard.writeText(textToCopy).then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  });
};
</script>

<style scoped>
/* Дополнительные стили можно добавить здесь */
</style>
