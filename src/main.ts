import { createApp } from 'vue'
import App from './App.vue'
import '@/../css/main.css'
import Work from './components/pages/work/Work.vue'
import Link from './components/pages/link/Link.vue'
createApp(Work).mount('#work')
createApp(App).mount('#app')
createApp(Link).mount('#link')