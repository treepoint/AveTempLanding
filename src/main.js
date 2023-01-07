import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'

const app = createApp(App).use(i18n)

//Глобальные переменные
app.config.globalProperties.download_link = "https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe"

//И аплик
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'