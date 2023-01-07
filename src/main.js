import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.download_link = "https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe"

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'