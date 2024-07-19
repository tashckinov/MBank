<script setup lang="ts">
import Accounts from "~/components/MainScreen/Accounts.vue";
import Shots from "~/components/MainScreen/Shots.vue";
import Services from "~/components/MainScreen/Services.vue";
import Transfers from "~/components/MainScreen/Transfers.vue";
import MainMenu from "~/components/MainScreen/MainMenu.vue";

definePageMeta({
  layout: 'bank'
});

const router = useRouter();
const token = useCookie('token');
const runtimeConfig = useRuntimeConfig();
const data = ref(null);
const fetchError = ref(null);  // Добавим переменную для хранения ошибки

async function fetchData() {
  try {
    const response = await fetch(`${runtimeConfig.public.apiBase}/me`, {
      headers: {
        authorization: token.value
      }
    });

    if (response.status === 401 || response.status === 403) {
      // Redirect to login page or access forbidden page based on status code
      await router.push('/login');
      return;
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const fetchedData = await response.json();
    data.value = fetchedData;
    localStorage.setItem('data', JSON.stringify(fetchedData));
    console.log('Response data:', fetchedData);
  } catch (err) {
    fetchError.value = err.message;
    console.error('FetchData function error:', err);
  }
}

onMounted(() => {
  fetchData();
});

</script>

<template>
  <div>
    <MainMenu :nickname="data ? data.nickname : ''"/> <!-- Check if data exists before accessing nickname -->
    <div class="app flex flex-col gap-5 overflow-hidden mb-20">
      <Accounts v-if="data" :accounts="data.accounts"/> <!-- Render Accounts component only if data is available -->
      <Transfers/>
      <Shots/>
      <Services/>
    </div>
    <div v-if="fetchError" class="error">
      Ошибка при загрузке данных: {{ fetchError }}
    </div>
  </div>
</template>


<style scoped>
/* Добавьте ваши стили здесь */
</style>
