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
        ],
        links: [
            { 
                text: 'About Us',
                children: [
                    { text: 'About Us', link: '/about-us' },
                    { text: 'Join Us', link: '/join-us' },
                ]
            },
            { 
                text: 'About Monarchs',
                children: [
                    { text: 'Why Monarchs?', link: '/why-monarchs' },
                    { text: 'The Monarch Lifecycle', link: '/lifecycle' },
                    { text: 'Migration', link: '/migration' },
                    { text: 'Threats to the Monarch', link: '/threats' },
                    { text: 'Habitat Needs', link: '/habitat'},
                ]
            },
            { 
                text: 'Native Bees',
                children: [
                    { text: 'Native Bees', link: '/native-bees' },
                    { text: 'Habitat Needs', link: '/native-bees#habitat-needs' },
                ]
            },
            {
                text: 'Conservation Plan',
                link: '/the-plan',
            },
            { 
                text: 'Get Involved',
                children: [
                    { text: 'Create Habitat', link: '/create-habitat' },
                    { text: 'Participate in Citizen Science', link: '/resources' },
                    { text: 'Sign the Pledge', link: '/pledge' },
                ]
            },
            { 
                text: 'Resources',
                children: [
                    { text: 'Downloads and Links', link: '/resources' },
                    { text: 'Landowner Resources', link: '/resources' },
                    { text: 'Scholarly Publications', link: '/resources' },
                    { text: 'Arkansas Native Plants', link: '/native-plants' },
                ]
            },
            {
                text: 'Events',
                link: '/events',
            },
        ]
    }
}