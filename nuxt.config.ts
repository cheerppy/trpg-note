// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/common.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_variables.scss" as *;'
                    // https://vitejs.dev/config/shared-options.html#css-preprocessoroptions
                }
            }
        }
    },
})
