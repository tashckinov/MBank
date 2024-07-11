<script setup lang="ts">

</script>

<template>
  <nav class="down-menu shadow-up bg-white pb-5">
    <ul class="flex justify-around w-full">
      <li class="menu-item active">
        <i class="pi pi-home"></i>
        <p>Home</p>
      </li>
      <li class="menu-item">
        <i class="pi pi-clock"></i>
        <p>History</p>
      </li>
      <li class="menu-item">
        <i class="pi pi-send"></i>
        <p>Payments</p>
      </li>
      <li class="menu-item">
        <i class="pi pi-envelope"></i>
        <p>Support</p>
      </li>
      <li class="menu-item">
        <i class="pi pi-ellipsis-h"></i>
        <p>More</p>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-item {
  @apply flex flex-col items-center justify-around py-2;
}
.menu-item>i {
  @apply xs:py-2;
}

.menu-item>p {
  @apply xs:hidden;
}

.menu-item {
  @apply text-gray text-base w-1/5;
}

.active {
  @apply text-blue font-semibold;
}

</style>
