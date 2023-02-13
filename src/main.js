import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/main.css'
import './assets/style/main.scss'
import { myStore } from './store/store.js'

const app = createApp(App)

app.use(router)
app.use(myStore)
app.mount('#app')
