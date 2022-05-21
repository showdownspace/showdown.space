import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'showdown.space',
  description:
    'We host community events in the form of recreational tech contests',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700&display=swap',
      },
    ],
    ['script', {}, 'document.documentElement.classList.add("showdownspace")'],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Events',
        link: '/events/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/showdownspace',
      },
      {
        text: 'Discord',
        link: 'https://discord.com/invite/d8zBzw2mem',
      },
    ],
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Events',
        link: '/events/',
        children: [
          { text: 'Code in the Wind #1', link: '/events/code-in-the-wind-1/' },
        ],
      },
    ],
  },
})
