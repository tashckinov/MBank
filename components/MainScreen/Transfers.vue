<script setup lang="ts">

</script>

<template>
  <div class="transfers-block">
    <h3 class="px-6">Transfers</h3>
    <ul class="list flex pt-4">
      <li class="transfer">
        <NuxtLink to="/app/transfers/withdraw" class="flex flex-col items-center text-center justify-between w-full">
          <div class="icon">
            <i class="pi pi-money-bill"></i>
          </div>
          <p>Funds <br> withdraw</p>
        </NuxtLink>
      </li>
      <li class="transfer">
        <NuxtLink to="/app/transfers/between-accounts" class="flex flex-col items-center text-center justify-between w-full">
          <div class="icon">
            <i class="pi pi-arrow-right-arrow-left"></i>
          </div>
          <p>Between <br> accounts</p>
        </NuxtLink>
      </li>
      <li class="transfer">
        <NuxtLink to="/app/transfers/by-nickname" class="flex flex-col items-center text-center justify-between w-full">
          <div class="icon">
            <i class="pi pi-users"></i>
          </div>
          <p>By <br> nickname</p>
        </NuxtLink>
      </li>
      <li class="transfer">
        <NuxtLink to="/app/transfers" class="flex flex-col items-center text-center justify-between w-full">
          <div class="icon">
            <i class="pi pi-plus"></i>
          </div>
          <p>More <br> transfers</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

a {
  @apply text-black;
}

.transfer {
  @apply w-1/4;
}

.transfer p {
  @apply xs:hidden;
}

.icon {
  @apply w-12 h-12 rounded-xl bg-light-gray flex items-center justify-center;
}
</style>
