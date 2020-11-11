module.exports = {
    extend: '@vuepress/theme-default',
    title: 'Arkansas Monarch Conservation Partnership',
    description: 'Working together to <b>create, enhance, and conserve</b> monarch and pollinator habitat in The Natural State.',
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700;800&family=Montserrat:wght@300;400;500;700&display=swap',
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap',
        }]
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
        ]
    }
}