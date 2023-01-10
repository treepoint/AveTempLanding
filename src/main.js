import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import { Quasar, Meta } from 'quasar'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App).use(i18n).use(Quasar, { plugins: { Meta } })

//Глобальные переменные
app.config.globalProperties.download_link = "https://avetemp.ru/AveTemp.zip"

app.mount('#app')