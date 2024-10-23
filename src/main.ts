import 'virtual:windi.css'
import 'animate.css'

// 引入全局样式
import '@/styles/index.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupStore } from '@/store'
import './permission'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(setupStore)

app.mount('#app')
