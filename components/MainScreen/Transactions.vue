<script setup lang="ts">

</script>

<template>
  <div class="transactions-block">
    <h3 class="px-6">Transaction</h3>
    <ul class="list flex pt-4">
      <li class="transaction">
        <div class="icon">
          <i class="pi pi-money-bill"></i>
        </div>
        <p>Funds withdraw</p>
      </li>
      <li class="transaction">
        <div class="icon">
          <i class="pi pi-arrow-right-arrow-left"></i>
        </div>
        <p>Between accounts</p>
      </li>
      <li class="transaction">
        <div class="icon">
          <i class="pi pi-users"></i>
        </div>
        <p>By <br> nickname</p>
      </li>
      <li class="transaction">
        <div class="icon">
          <i class="pi pi-plus"></i>
        </div>
        <p>More transactions</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.transaction {
  @apply w-1/4 flex flex-col items-center text-center justify-between;
}

.transaction p {
  @apply xs:hidden;
}

.icon {
  @apply w-12 h-12 rounded-xl bg-light-gray flex items-center justify-center;
}

</style>