import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/ndzy-docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档',
      description: '',
    },
  },
  theme,
})
