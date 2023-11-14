import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  markdown: { headers: { level: [2, 3, 4, 5, 6] } },
  base: '/ndzy-docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '',
      description: '',
    },
  },
  theme,
})
