<script setup lang="ts">

</script>

<template>
  <nav class="down-menu shadow-up bg-white pb-5">
    <ul class="flex justify-around w-full">
      <li class="menu-item">
        <NuxtLink to="/app" class="flex flex-col items-center justify-around py-2 w-full"
                  :class="{ active: $route.path === '/app' }">
          <i class="pi pi-home"></i>
          <p>Home</p>
        </NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/app/history" class="flex flex-col items-center justify-around py-2 w-full"
                  :class="{ active: $route.path === '/app/history' }">
          <i class="pi pi-clock"></i>
          <p>History</p>
        </NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/app/transfers" class="flex flex-col items-center justify-around py-2 w-full"
                  :class="{ active: $route.path.startsWith('/app/transfers')  }">
          <i class="pi pi-send"></i>
          <p>Transfers</p>
        </NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/app/support" class="flex flex-col items-center justify-around py-2 w-full"
                  :class="{ active: $route.path === '/app/support' }">
          <i class="pi pi-envelope"></i>
          <p>Support</p>
        </NuxtLink>
      </li>
      <li class="menu-item">
        <NuxtLink to="/app/more" class="flex flex-col items-center justify-around py-2 w-full"
                  :class="{ active: $route.path === '/app/more' }">
          <i class="pi pi-ellipsis-h"></i>
          <p>More</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  @apply text-gray-500;
}

.menu-item {
  @apply w-1/5;
}

.menu-item > i {
  @apply xs:py-2;
}

.menu-item p {
  @apply xs:hidden;
}

.active {
  @apply text-primary-500 font-semibold;
}
</style>
