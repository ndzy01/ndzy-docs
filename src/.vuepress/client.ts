import { defineClientConfig } from '@vuepress/client'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'
import L from './components/L.vue'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.use(Antd)
    app.component('L', L)
  },
})
