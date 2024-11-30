import { createApp } from 'vue'
import App from './App.vue'
import '@/../css/main.css'
import router from './router/main'
let app = createApp(App)
app.use(router)
app.mount('#app')
