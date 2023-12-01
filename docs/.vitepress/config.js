module.exports = {
    title: 'Panuon 文档',
    description: 'Panuon document',
    base: '/panuon.github.io/',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'GitHub',
                items: [
                    {
                        text: 'Panuon.WPF.UI',
                        link: 'https://github.com/Panuon/Panuon.WPF.UI'
                    }
                ]
            }
        ],
        sidebar: [
            {
                text: '首页',
                link: '/',
                collapsed: false,
                items: [
                    {text: "简介", link: "/"}
                ]
            },
        ]
    }
}