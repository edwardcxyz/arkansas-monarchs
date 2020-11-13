module.exports = {
    host: '10.0.0.45',
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
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap',
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
        ],
        links: [
            { 
                text: 'About Us',
                children: [
                    { text: 'About Us', link: '/about-us', footerIndex: 1 },
                    { text: 'Join Us', link: '/join-us' },
                ]
            },
            { 
                text: 'About Monarchs',
                children: [
                    { text: 'Why Monarchs?', link: '/why-monarchs', footerIndex: 2 },
                    { text: 'The Monarch Lifecycle', link: '/lifecycle' },
                    { text: 'Migration', link: '/migration', footerIndex: 3 },
                    { text: 'Threats to the Monarch', link: '/threats' },
                    { text: 'Habitat Needs', link: '/habitat', footerIndex: 4 },
                ]
            },
            { 
                text: 'Native Bees',
                children: [
                    { text: 'Native Bees', link: '/native-bees', footerIndex: 5 },
                    { text: 'Habitat Needs', link: '/native-bees#habitat-needs' },
                ]
            },
            { text: 'Conservation Plan', link: '/the-plan', footerIndex: 6 },
            { 
                text: 'Get Involved',
                children: [
                    { text: 'Create Habitat', link: '/create-habitat', footerIndex: 7 },
                    { text: 'Participate in Citizen Science', link: '/resources' },
                    { text: 'Sign the Pledge', link: '/pledge' },
                ]
            },
            { 
                text: 'Resources',
                children: [
                    { text: 'Downloads and Links', link: '/resources' },
                    { text: 'Landowner Resources', link: '/resources', footerIndex: 8 },
                    { text: 'Scholarly Publications', link: '/resources' },
                    { text: 'Arkansas Native Plants', link: '/native-plants' },
                ]
            },
            { text: 'Events', link: '/events', footerIndex: 9 },
        ]
    }
}