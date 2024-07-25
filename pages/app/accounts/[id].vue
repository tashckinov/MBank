<script setup lang="ts">

definePageMeta({
  layout: 'bank'
});

const toast = useToast();
const token = useCookie('token');
const userStore = useUserStore();
const route = useRoute();
const param = Number(route.params.id);
const runtimeConfig = useRuntimeConfig();

const showCard = ref(false);
const showEdit = ref(false);
const newAccountName = ref('');

const account = ref(null);

const fetchAccount = async () => {
  const data = await userStore.fetchData();
  account.value = data.accounts.find(item => item.account_id === param);
};

await fetchAccount();

watch(() => userStore.data, fetchAccount, { deep: true });

async function saveNewName() {
  const url = `${runtimeConfig.public.apiBase}/me/account`;
  const data = {
    account_id: account.value.account_id,
    name: newAccountName.value
  };
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", token.value);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(url, requestOptions);

    switch (response.status) {
      case 200:
        toast.add({
          severity: 'success',
          summary: 'Saved',
          detail: 'The account name has been changed',
          life: 3000,
          class: 'w-full sm:w-auto'
        });
        await userStore.updateData();
        showEdit.value = false;
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
        await userStore.logout();
        break;
      default:
        const result = await response.json();
        if (result.error) {
          toast.add({
            severity: 'warn',
            summary: 'Warn Message',
            detail: result.error,
            life: 3000,
            class: 'w-full sm:w-auto'
          });
        }
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <Toast unstyled/>
  <Drawer v-model:visible="showEdit" header="Edit account name" position="full">
    <FloatLabel class="mt-5">
      <InputText id="account_name"
                 v-model="newAccountName"
                 :placeholder="account?.name"
                 class="w-full"/>
      <label for="account_name">Account name</label>
    </FloatLabel>
    <Button class="w-full mt-3" @click="saveNewName">Save</Button>
  </Drawer>
  <TopMenu back :name="'Account: ' + (account?.name || '')" :notifications="false"/>
  <div class="account-profile mt-3 mx-6 flex flex-col gap-3">
    <div class="p-3 rounded-xl">
      <h4>Current account</h4>
      <h1>{{ account?.balance }}
        <currency/>
      </h1>
    </div>
    <div class="bg-gray-200 p-3 rounded-xl max-w-96">
      <div class="flex items-center justify-between mb-3">
        <h4>Details</h4>
        <p class="text-primary-500 cursor-pointer" @click="showCard = !showCard">{{ showCard ? 'Hide' : 'Show' }}</p>
      </div>
      <MaskedCard :cardNumber="account?.account_number" :show="showCard"/>
    </div>
    <div class="bg-gray-200 p-3 rounded-xl max-w-96" v-if="account?.type !== 'MAIN'">
      <h4>Settings</h4>
      <div class="flex items-center justify-between py-2" @click="showEdit=true">
        <p>Rename account</p>
        <i class="pi pi-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
