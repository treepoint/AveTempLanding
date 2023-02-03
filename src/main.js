import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import { Quasar, Meta } from 'quasar'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App).use(i18n).use(Quasar, { plugins: { Meta } })

//Глобальные переменные
app.config.globalProperties.download_link = "https://github.com/treepoint/AveTemp/releases/download/1.4.1/AveTemp.exe"

app.mount('#app')