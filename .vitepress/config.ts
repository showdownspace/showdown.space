import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'showdown.space',
  description:
    'We host community events in the form of recreational tech contests',
  appearance: false,
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
    ['script', {}, 'document.documentElement.classList.add("dark")'],
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
        text: 'About',
        link: 'https://creatorsgarten.org/wiki/ShowdownSpace',
      },
    ],
    socialLinks: [
      {
        icon: 'discord',
        link: 'https://discord.com/invite/d8zBzw2mem',
      },
      {
        icon: 'github',
        link: 'https://github.com/showdownspace',
      },
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/showdown.space',
      },
      {
        icon: {
          svg: '<svg role="img" style="display: block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"/></svg>',
        },
        link: 'https://twitch.tv/showdownspace',
      },
      {
        icon: {
          svg: '<svg role="img" width="32" height="32" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block"><path fill-rule="evenodd" clip-rule="evenodd" d="M208 176L384 176C384 174.998 383.992 173.998 383.975 173C383.792 162.061 382.611 151.366 380.52 141C366.572 71.877 312.123 17.4275 243 3.48015C231.689 1.19777 219.984 -1.47349e-05 208 -1.52588e-05L208 176ZM243 39.378L243 141L344.622 141C331.915 91.2502 292.75 52.0849 243 39.378ZM208 208V384H384V208H208ZM243 243H349V349H243V243ZM-1.52588e-05 208C-1.47349e-05 219.984 1.19777 231.689 3.48015 243C17.4275 312.123 71.877 366.572 141 380.52C151.366 382.611 162.061 383.792 173 383.975C173.998 383.992 174.998 384 176 384L176 208L-1.52588e-05 208ZM141 243L39.378 243C52.0849 292.75 91.2502 331.915 141 344.622L141 243ZM110.866 173C103.575 174.957 95.9091 176 88 176C80.0909 176 72.4255 174.957 65.1339 173C27.6191 162.933 -7.56558e-06 128.692 -7.56558e-06 88C-7.56558e-06 39.3989 39.3989 -7.56558e-06 88 -7.56558e-06C128.692 -7.56558e-06 162.933 27.6191 173 65.1339C174.957 72.4255 176 80.0909 176 88C176 95.9091 174.957 103.575 173 110.866C164.89 141.089 141.089 164.89 110.866 173ZM88 141C117.271 141 141 117.271 141 88C141 58.7289 117.271 35 88 35C58.7289 35 35 58.7289 35 88C35 117.271 58.7289 141 88 141Z" fill="currentColor"/></svg>',
        },
        link: 'https://creatorsgarten.org/ring',
      },
    ],
    logo: '/icon.png',
    sidebar: [
      {
        text: 'Events',
        link: '/events/',
        items: [
          { text: 'Code in the Wind #1', link: '/events/code-in-the-wind-1/' },
          { text: 'Code Golf Party #1', link: '/events/code-golf-party-1/' },
          { text: 'Code in the Wind #2', link: '/events/code-in-the-wind-2/' },
          { text: 'Browser Automation Challenges', link: '/events/browser-automation-challenges/' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
  },
})
