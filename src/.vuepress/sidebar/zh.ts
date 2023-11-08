import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/': [
    '',
    {
      text: '算法框架',
      icon: 'book',
      prefix: 'algorithm/',
      children: 'structure',
    },
  ],
})
