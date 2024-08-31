import {defineStore} from 'pinia';

export const useNotificationStore = defineStore('notification', () => {
    const runtimeConfig = useRuntimeConfig();
    const token = useCookie('token').value;
    const notifications = ref<any>(null); // Данные транзакций
    const unreadCount = ref<number>(null); // Данные транзакций
    const fetchError = ref<string | null>(null);
    const lastDatetime = ref<string | null>(null);
    const isLoading = ref<boolean>(false);
    const isMore = ref<boolean>(false);

    async function fetchData() {
        if (notifications.value) {
            return;
        }
        await updateData();
    }

    async function updateData() {
        isLoading.value = true;

        let url = `${runtimeConfig.public.apiBase}/me/notifications`

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

            const fetchedNotifications = await response.json();

            notifications.value = fetchedNotifications;

            const dates = Object.keys(fetchedNotifications);
            const lastDate = dates[dates.length - 1]; // "19.08.2024"
            const notificationsOnLastDate = fetchedNotifications[lastDate];
            const lastTransaction = notificationsOnLastDate[notificationsOnLastDate.length - 1];

            lastDatetime.value = lastTransaction.datetime;

            await updateCountData()
        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('fetchedNotifications function error:', err);
        } finally {
            isLoading.value = false;
        }
    }

    async function fetchCountData() {
        if (unreadCount.value) {
            return;
        }
        await updateCountData();
    }

    async function updateCountData() {
        let url = `${runtimeConfig.public.apiBase}/me/notifications/count`

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
            unreadCount.value = await response.json();
        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('fetchedNotifications function error:', err);
        }
    }

    async function readAll() {
        let url = `${runtimeConfig.public.apiBase}/me/notifications/read`

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
            } else {
                await updateCountData()
                await updateData()
            }
        } catch (err) {
            fetchError.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('fetchedNotifications function error:', err);
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
        notifications,
        fetchError,
        isLoading,
        isMore,
        unreadCount,
        fetchCountData,
        updateCountData,
        readAll,
        fetchData,
        updateData,
        formatDate
    };
});
