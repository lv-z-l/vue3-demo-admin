// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import App from './App.vue'
// 按需引入naive-ui组件
import naive from './ui'
import installIcon from './ui/icon'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(naive).use(installIcon).mount('#app')
