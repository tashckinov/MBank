<script setup lang="ts">
import {useNotificationStore} from "~/stores/useNotificationsStore";

const notificationStore = useNotificationStore();

onMounted(() => {
  notificationStore.fetchData();
  notificationStore.fetchCountData();
});

definePageMeta({
  layout: 'bank'
})

function takeTime(datetime) {
// Преобразуем строку в объект Date
  const dateObj = new Date(datetime);

// Извлекаем только часы и минуты в формате HH:MM
  return dateObj.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}
</script>

<template>
  <div class="px-6 my-4 flex justify-between items-center">
    <h3>Notifications</h3>
    <p v-if="notificationStore.unreadCount>0" class="text-primary-500" @click="notificationStore.readAll()">Read all</p>
  </div>
  <div class="notification-blocks px-6">
    <div class="notification-day" v-for="(day, index) in notificationStore.notifications">
      <h6>{{ notificationStore.formatDate(index) }}</h6>
      <div class="notification bg-slate-100 my-3 p-3 rounded-2xl flex justify-between border" :class="item.read?'':'border border-primary-500'" v-for="item in day">
        <div class="content">
          <p>{{ item.text }}</p>
          <p class="text-primary-500 font-semibold text-2xl">{{ item.diff }}
            <currency/>
          </p>
          <p>Account: •• {{ String(item.accountNumber).slice(-4) }}</p>
          <p>Balance: {{ item.balance }}
            <currency/>
          </p>
          <!--          <p>{{ item }}</p>-->
        </div>
        <div class="time w-fit">{{ takeTime(item.datetime) }}</div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>