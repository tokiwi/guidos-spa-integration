// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {

            script: [{ src: '//libraries.guidos.fun/highlight-vs/static/js/main.js', defer: true }],
        },
    },
    vite: {
        define: { 'process.env.DEBUG': false },
    },
})
