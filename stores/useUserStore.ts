import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
    const runtimeConfig = useRuntimeConfig();
    const router = useRouter();
    const token = useCookie('token').value;
    const data = ref<any>(null);
    const fetchError = ref<string | null>(null);

    async function fetchData() {
        if (!data.value) {
            await updateData();
        }
        return data.value; // Возвращаем данные в любом случае, даже если они уже загружены
    }

    async function updateData() {
        try {
            const response = await fetch(`${runtimeConfig.public.apiBase}/me`, {
                headers: {
                    authorization: token
                }
            });

            if (response.status === 401 || response.status === 403) {
                await logout()
                throw new Error('Unauthorized');
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const fetchedData = await response.json();
            data.value = fetchedData;
        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('UpdateData function error:', err);
            //
            // if (fetchError.value === 'Unauthorized') {
            //     console.log(123)
            //     // await logout();
            // }
        }
    }

    async function logout() {
        useCookie('token').value = null;
        await router.push('/login');
    }

    return {data, fetchError, fetchData, updateData, logout};
});