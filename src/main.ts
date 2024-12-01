import { createApp } from 'vue'
import App from './App.vue'
import '@/../css/main.css'
import router from './router/main'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
import { createPinia } from 'pinia'
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
