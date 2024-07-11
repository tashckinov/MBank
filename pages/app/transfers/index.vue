<script setup lang="ts">


definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <h3 class="px-6 my-4">All transfers</h3>
  <NuxtLink to="/app/transfers/withdraw" class="transfer">
    <div class="icon mr-3">
      <i class="pi pi-money-bill"></i>
    </div>
    <p>Funds withdraw</p>
  </NuxtLink>
  <NuxtLink to="/app/transfers/between-accounts" class="transfer">
    <div class="icon mr-3">
      <i class="pi pi-arrow-right-arrow-left"></i>
    </div>
    <p>Between accounts</p>
  </NuxtLink>
  <NuxtLink to="/app/transfers/by-nickname" class="transfer">
    <div class="icon mr-3">
      <i class="pi pi-users"></i>
    </div>
    <p>By nickname</p>
  </NuxtLink>
</template>

<style scoped>
.icon {
  @apply w-12 h-12 rounded-xl bg-light-gray flex items-center justify-center;
}

a {
  @apply text-black;
}

.transfer {
  @apply px-6 mb-3 flex items-center text-center w-full;
}
</style>