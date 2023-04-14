import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin,  QueryClient } from "@tanstack/vue-query";
import VueSplide from '@splidejs/vue-splide';



import '@splidejs/vue-splide/css';
import './index.css'
// import { Vue3CookiesPlugin } from './plugin/vue-cookies';
import { QuillEditor } from '@vueup/vue-quill'
const app = createApp(App)

VueQueryPlugin.install( app, {
    queryClientConfig:{
        defaultOptions: {
            queries:{
                staleTime: 1000 * 60 * 60,
                refetchOnReconnect: 'always',
                cacheTime: 1000 * 60 * 60
            }
        }
    }
})
app.use(createPinia())
app.use(router)
app.use(VueSplide)
// app.use(Vue3CookiesPlugin)
app.component('QuillEditor', QuillEditor)
app.mount('#app')




