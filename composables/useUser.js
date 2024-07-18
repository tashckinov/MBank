// // composables/useUser.js
// import { ref } from 'vue';
//
// export function useUser() {
//     const user = ref(null);
//
//     const setUser = (userData) => {
//         user.value = userData;
//         localStorage.setItem('user', JSON.stringify(userData)); // Сохраняем данные пользователя в localStorage
//     };
//
//     const clearUser = () => {
//         user.value = null;
//         localStorage.removeItem('user'); // Удаляем данные пользователя из localStorage
//     };
//
//     const loadUserFromLocalStorage = () => {
//         const userData = localStorage.getItem('user');
//         if (userData) {
//             user.value = JSON.parse(userData);
//         }
//     };
//
//     // Загружаем пользователя из localStorage при инициализации
//     loadUserFromLocalStorage();
//
//     return {
//         user,
//         setUser,
//         clearUser,
//         isAuthenticated: computed(() => !!user.value)
//     };
// }
