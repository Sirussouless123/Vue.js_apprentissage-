import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import FirstTest from './components/FirstTest.vue'
app.component('MaListe',FirstTest )

app.mount('#app')