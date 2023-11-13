import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  '/',
  {
    text: '算法框架',
    prefix: '/algorithm/',
    children: [
      '',
      {
        text: '单链表',
        prefix: 'dan-lian-biao/',
        children: ['', 'a'],
      },
    ],
  },
])
