<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const token = useCookie('token')

const {
  data: userTransaction,
  pending,
  error,
  refresh
} = useFetch(`${runtimeConfig.public.apiBase}/me/history`, {
      onRequest({request, options}) {
        options.headers = options.headers || {}
        options.headers.authorization = token.value
      }
    }
)

function formatDate(dateString) {
  const dateParts = dateString.split('.');
  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const year = parseInt(dateParts[2]);
  const date = new Date(year, month, day);
  const options = {weekday: 'long', day: 'numeric', month: 'long'};
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

</script>

<template>
  <div class="transaction-blocks">
    <div class="transaction-day" v-for="(day, index) in  userTransaction">
      <h6 class="pb-2">{{ formatDate(index) }}</h6>
      <hr class="pb-2">
      <div class="transactions w-full flex flex-col gap-2">
        <div class="transaction flex gap-2 w-full" v-for="transaction in day">
          <i class="pi pi-money-bill min-w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border-1" style="font-size: 1.5rem"></i>
          <div class="w-full">
            <div class="transaction-info flex justify-between">
              <div class="transaction-info">
                <b>{{ transaction.sender_nickname }}</b>
              </div>
              <span class="money"> <span v-if="transaction.type==='OUT' && transaction.transfer_type_id !== 2">-</span> {{
                  transaction.amount
                }} ₲</span>
            </div>
            <p>{{ transaction.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>