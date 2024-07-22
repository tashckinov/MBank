<script setup lang="ts">
import {useUserStore} from '~/stores/useUserStore';

definePageMeta({
  layout: 'bank'
});
const toast = useToast();
const userStore = useUserStore();
const token = useCookie('token');
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const name = ref('');
const agreed = ref(false); // Согласие с условиями

async function createAccount() {
  if (!agreed.value) {
    toast.add({
      severity: 'warn',
      summary: 'Warn Message',
      detail: 'You must agree to the terms',
      life: 3000,
      class: 'w-full sm:w-auto'
    }); // добавлен класс
    return;
  }

  try {
    const url = `${runtimeConfig.public.apiBase}/me/account`;
    const data = {description: name.value || 'Additional account'};

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token.value);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
        .then((response) => {
          switch (response.status) {
            case 200:
              toast.add({
                severity: 'success',
                summary: 'Success',
                detail: 'The account has been created',
                life: 3000,
                class: 'w-full sm:w-auto'
              });
              userStore.updateData()
              setTimeout(()=>{router.push('/app')}, 1000)
              break;
            case 401:
            case 403:
              toast.add({
                severity: 'warn',
                summary: 'Token expired',
                detail: 'You need to login again',
                life: 3000,
                class: 'w-full sm:w-auto'
              });
              userStore.logout()
              return
              break;
          }
          return response.json();
        }).then((result) => {
      if (result.error) {
        toast.add({
          severity: 'warn',
          summary: 'Warn Message',
          detail: result.error,
          life: 3000,
          class: 'w-full sm:w-auto'
        }); // добавлен класс
      }
    }).catch((error) => console.error(error));
  } catch (err) {
    console.error('Error:', err);
    toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'An unexpected error occurred',
      life: 3000,
      class: 'w-full sm:w-auto'
    });
  }
}
</script>

<template>
  <Toast unstyled/>
  <TopMenu back name="New account" :notifications="false"/>

  <div class="container mx-auto px-4 mt-6">
    <!-- Описание -->
    <div class="bg-gray-100 p-4 rounded-lg mb-6">
      <p class="text-lg mb-4">Account for basic operations</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Save up funds for various purposes</li>
        <li>Pay for purchases and services</li>
        <li>Transfer money</li>
      </ul>
    </div>

    <!-- Форма -->
    <h4 class="text-xl font-semibold mb-6">Fill in the form</h4>
    <div class="space-y-4">
      <div class="relative">
        <FloatLabel>
          <InputText id="name"
                     v-model="name"
                     placeholder="Additional account"
                     class="w-full"/>
          <label for="username">Account name</label>
        </FloatLabel>
      </div>

      <div class="flex items-center space-x-2">
        <Checkbox
            id="terms"
            v-model="agreed"
            :binary="true"
            class="h-5 w-5"
        />
        <label for="terms" class="text-sm">
          I agree to the <a href="#" class="text-blue-500">Terms and Conditions</a>
        </label>
      </div>

      <div class="flex flex-col items-center space-y-4">
        <Button
            @click="createAccount"
            :disabled="!agreed"
            class="w-full py-2 px-4 font-semibold rounded-lg shadow-md"
        >
          Open an account
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Не требуется добавление специфических стилей */
</style>
