module.exports = {
  extend: '@vuepress/theme-default',
  title: 'Arkansas Monarch Conservation Partnership',
  description:
    'Working together to <b>create, enhance, and conserve</b> monarch and pollinator habitat in The Natural State.',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700;800&family=Montserrat:wght@300;400;500;700&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/site.manifest',
      },
    ],
  ],
  themeConfig: {
    logo: '/img/logo.png',
    search: true,
    nav: [
      { text: 'About Us', link: '/about-us' },
      { text: 'Sign the Pledge', link: '/pledge' },
      { text: 'Register Your Efforts', link: '/register' },
    ],
    sidebar: [
      '/',
      '/about-us',
      '/why-monarchs',
      '/lifecycle',
      '/migration',
      '/threats',
      '/the-plan',
      '/habitat',
      '/native-bees',
      '/create-habitat',
      '/resources',
      ['https://www.monarchnet.org/library', 'Library'],
      '/events',
      '/join-us',
      '/native-plants',
      '/webinars',
      '/community-science',
    ],
    links: [
      {
        text: 'Home',
        link: '/',
        footerIndex: 1,
      },
      {
        text: 'About Us',
        children: [
          { text: 'About Us', link: '/about-us', footerIndex: 2 },
          { text: 'Join Us', link: '/join-us' },
          { text: 'Partners', link: '/partners' },
        ],
      },
      {
        text: 'About Monarchs',
        children: [
          { text: 'Why Monarchs?', link: '/why-monarchs', footerIndex: 3 },
          { text: 'The Monarch Lifecycle', link: '/lifecycle' },
          { text: 'Migration', link: '/migration', footerIndex: 4 },
          { text: 'Threats to the Monarch', link: '/threats' },
          { text: 'Habitat Needs', link: '/habitat', footerIndex: 5 },
        ],
      },
      {
        text: 'Native Bees',
        children: [
          { text: 'Native Bees', link: '/native-bees', footerIndex: 6 },
          { text: 'Habitat Needs', link: '/native-bees#habitat-needs' },
        ],
      },
      { text: 'Conservation Plan', link: '/the-plan', footerIndex: 7 },
      {
        text: 'Get Involved',
        children: [
          { text: 'Create Habitat', link: '/create-habitat', footerIndex: 8 },
          { text: 'Participate in Community Science', link: '/community-science' },
          { text: 'Sign the Pledge', link: '/pledge' },
        ],
      },
      {
        text: 'Resources',
        children: [
          { text: 'Downloads and Links', link: '/downloads-links' },
          { text: 'Landowner Resources', link: '/landowner', footerIndex: 9 },
          { text: 'Arkansas Native Plants', link: '/native-plants' },
          { text: 'Webinars', link: '/webinars' },
          { text: 'Scholarly Publications', link: '/publications.md' },
        ],
      },
      { text: 'Events', link: '/events', footerIndex: 10 },
    ],
  },
};
