// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            script: [{ children: "https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js" }],
        },
    },
})
