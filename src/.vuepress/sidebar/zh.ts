import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/': [
    {
      text: '算法',
      prefix: 'algorithm/',
      children: [
        '',
        {
          text: '单链表',
          prefix: 'dan-lian-biao/',
          children: ['', 'a.md'],
        },
      ],
    },
  ],
})
