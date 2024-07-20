<script setup lang="ts">

</script>

<template>
  <div class="transfers-block">
    <h3>Transfers</h3>
    <ul class="list flex pt-4">
      <li class="transfer w-1/4">
        <NuxtLink to="/app/transfers/withdraw" class="flex flex-col items-center text-center justify-between w-full text-black">
          <div class="icon w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center">
            <i class="pi pi-money-bill"></i>
          </div>
          <p class="xs:hidden">Funds <br> withdraw</p>
        </NuxtLink>
      </li>
      <li class="transfer w-1/4">
        <NuxtLink to="/app/transfers/between-accounts" class="flex flex-col items-center text-center justify-between w-full text-black">
          <div class="icon w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center">
            <i class="pi pi-arrow-right-arrow-left"></i>
          </div>
          <p class="xs:hidden">Between <br> accounts</p>
        </NuxtLink>
      </li>
      <li class="transfer w-1/4">
        <NuxtLink to="/app/transfers/by-nickname" class="flex flex-col items-center text-center justify-between w-full text-black">
          <div class="icon w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center">
            <i class="pi pi-users"></i>
          </div>
          <p class="xs:hidden">By <br> nickname</p>
        </NuxtLink>
      </li>
      <li class="transfer w-1/4">
        <NuxtLink to="/app/transfers" class="flex flex-col items-center text-center justify-between w-full text-black">
          <div class="icon w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center">
            <i class="pi pi-plus"></i>
          </div>
          <p class="xs:hidden">More <br> transfers</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
