import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transaction', () => {
    const runtimeConfig = useRuntimeConfig();
    const token = useCookie('token').value;
    const transactions = ref<any>(null); // Данные транзакций
    const fetchError = ref<string | null>(null);
    const isLoading = ref<boolean>(false);

    async function fetchTransactions() {
        if (transactions.value) {
            return; // Если данные уже есть, не отправляем запрос
        }
        await updateTransactions();
    }

    async function updateTransactions() {
        isLoading.value = true;
        try {
            const response = await fetch(`${runtimeConfig.public.apiBase}/me/history`, {
                headers: {
                    authorization: token
                }
            });

            if (response.status === 401 || response.status === 403) {
                throw new Error('Unauthorized');
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const fetchedTransactions = await response.json();
            transactions.value = fetchedTransactions;
        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('FetchTransactions function error:', err);
        } finally {
            isLoading.value = false;
        }
    }

    function formatDate(dateString: string): string {
        const dateParts = dateString.split('.');
        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const year = parseInt(dateParts[2]);
        const date = new Date(year, month, day);
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }

    return { transactions, fetchError, isLoading, fetchTransactions, updateTransactions, formatDate };
});
