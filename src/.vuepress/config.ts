import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档',
      description: '快乐工作，健康生活',
    },
  },
  theme,
})
