import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import FirstTest from './components/FirstTest.vue'
app.component('MaListe',FirstTest )

import router from '@/router'

app.use(router)

app.mount('#app')