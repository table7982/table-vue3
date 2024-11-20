import { createApp } from 'vue'
import App from './App.vue'
import '@/../css/main.css'
import Work from './components/pages/work/Work.vue'
import Link from './components/pages/link/Link.vue'
import router from './router/main'
let app = createApp(App)
app.use(router)
app.mount('#app')
