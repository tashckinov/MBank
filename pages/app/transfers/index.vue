<script setup lang="ts">


definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu :rounded="false" logo/>
  <div class="transfers-block bg-gray-100 rounded-b-xl">
    <h3 class="px-6 py-4">All transfers</h3>
    <NuxtLink to="/app/transfers/withdraw" class="transfer">
      <div class="icon mr-3">
        <i class="pi pi-money-bill"></i>
      </div>
      <p class="text-left">Funds withdraw</p>
    </NuxtLink>
    <NuxtLink to="/app/transfers/between-accounts" class="transfer">
      <div class="icon mr-3">
        <i class="pi pi-arrow-right-arrow-left"></i>
      </div>
      <p class="text-left">Between accounts</p>
    </NuxtLink>
    <NuxtLink to="/app/transfers/between-own-accounts" class="transfer">
      <div class="icon mr-3">
        <i class="pi pi-sync"></i>
      </div>
      <p class="text-left">Between your own accounts</p>
    </NuxtLink>
    <NuxtLink to="/app/transfers/by-nickname" class="transfer">
      <div class="icon mr-3">
        <i class="pi pi-users"></i>
      </div>
      <p class="text-left">By nickname</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.icon {
  @apply min-w-12 w-12 min-h-12 h-12 rounded-xl bg-white flex items-center justify-center;
}

a {
  @apply text-black;
}

.transfer {
  @apply px-6 py-1 flex items-center text-center w-full;
}

.transfer:last-child{
  @apply pb-5;
}
</style>