module.exports = {
    extend: '@vuepress/theme-default',
    title: 'Arkansas Monarch Conservation Partnership',
    description: 'Working together to create, enhance, and conserve monarch and pollinator habitat in The Natural State.',
    themeConfig: {
        logo: '/img/logo.png',
        search: true,
        nav: [
            { text: 'About Us', link: '/about-us' },
            { text: 'Sign the Pledge', link: '/pledge/' },
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
            '/publications',
            '/events',
            '/register',
            '/join-us',
        ]
    }
}