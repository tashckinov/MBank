import {defineStore} from 'pinia';

function mergeObjects(obj1, obj2) {
    const result = {...obj1}; // Клонируем первый объект

    for (const [key, value] of Object.entries(obj2)) {
        if (result[key]) {
            // Если ключ уже существует в результате, объединяем массивы
            result[key] = result[key].concat(value);
        } else {
            // Иначе просто добавляем новый ключ и значение
            result[key] = value;
        }
    }

    return result;
}

export const useTransactionStore = defineStore('transaction', () => {
    const runtimeConfig = useRuntimeConfig();
    const token = useCookie('token').value;
    const transactions = ref<any>(null); // Данные транзакций
    const fetchError = ref<string | null>(null);
    const lastDatetime = ref<string | null>(null);
    const isLoading = ref<boolean>(false);
    const isMore = ref<boolean>(false);

    async function fetchTransactions() {
        if (transactions.value) {
            return; // Если данные уже есть, не отправляем запрос
        }
        await updateTransactions();
    }

    async function checkMore() {
        const url = `${runtimeConfig.public.apiBase}/me/history/${lastDatetime.value}`

        try {
            const response = await fetch(url, {
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

            console.log(fetchedTransactions)

            if (Object.keys(fetchedTransactions).length === 0) {
                isMore.value = false;
            } else {
                isMore.value = true
            }
        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('FetchTransactions function error:', err);
        }

    }

    async function updateTransactions() {
        isLoading.value = true;

        let url = `${runtimeConfig.public.apiBase}/me/history`

        try {
            const response = await fetch(url, {
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

            const dates = Object.keys(fetchedTransactions);
            const lastDate = dates[dates.length - 1]; // "19.08.2024"
            const transactionsOnLastDate = fetchedTransactions[lastDate];
            const lastTransaction = transactionsOnLastDate[transactionsOnLastDate.length - 1];

            lastDatetime.value = lastTransaction.datetime;

        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('FetchTransactions function error:', err);
        } finally {
            isLoading.value = false;
        }
        await checkMore()
    }

    async function loadMoreTransactions() {
        if (isLoading.value) return; // Double click check

        isLoading.value = true;

        const url = `${runtimeConfig.public.apiBase}/me/history/${lastDatetime.value}`

        try {
            const response = await fetch(url, {
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

            if (Object.keys(fetchedTransactions).length === 0) {
                isMore.value = false;
                return
            }

            transactions.value = mergeObjects(transactions.value, fetchedTransactions);

            const dates = Object.keys(fetchedTransactions);
            const lastDate = dates[dates.length - 1]; // "19.08.2024"
            const transactionsOnLastDate = fetchedTransactions[lastDate];
            const lastTransaction = transactionsOnLastDate[transactionsOnLastDate.length - 1];

            lastDatetime.value = lastTransaction.datetime;

        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('FetchTransactions function error:', err);
        } finally {
            isLoading.value = false;
        }

    }

    function formatDate(dateString: string): string {
        let dateParts: string[] = ['0', '0', '0'];
        try {
            dateParts = dateString.split('.');
        } catch (e) {
            console.error(e)
        }

        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const year = parseInt(dateParts[2]);
        const date = new Date(year, month, day);
        const options = {weekday: 'long', day: 'numeric', month: 'long'};
        return date.toLocaleDateString('en-US', options);
    }

    return {
        transactions,
        fetchError,
        isLoading,
        isMore,
        fetchTransactions,
        updateTransactions,
        loadMoreTransactions,
        formatDate
    };
});
