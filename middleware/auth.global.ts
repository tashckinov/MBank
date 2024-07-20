export default defineNuxtRouteMiddleware((to, from) => {
    if (!process.server) {
        // const token = useCookie('token')
        // if (!token.value && to.path !== '/login' && to.path !== '/' && to.path.startsWith('/app')) {
        //     return navigateTo('/login')
        // }
        // if (token.value && to.path === '/login') {
        //     return navigateTo('/app')
        // }
    }
})