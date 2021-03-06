module.exports = {
    title: 'FoFaX',
    description: 'FoFaX 是一款简单、快速、规则可扩展、联动其他工具的命令行软件',
    base: "/",
    themeConfig: {
        repo: 'xiecat/fofax',
        repoLabel: 'GitHub',
        docsRepo: 'xiecat/fofax-doc',
        docsDir: 'docs',
        docsBranch: 'dev',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助改进页面内容!',
        nav: [ // 导航栏配置
            {text: '主页', link: '/'},
            {text: '开始', link: '/guide/'},
            {text: 'Fx', link: '/fx/'},
            {text: '联动&场景', link: '/link/'},
            {text: 'FAQ', link: '/faq/'},
        ],
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        // nextLinks: false,
        // // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // prevLinks: false,
        lastUpdated: 'Last Updated', //
        // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 4, // 侧边栏显示4级
        sidebar: {
            '/guide/': [
                '',
                'config',
                'fast',
                'input',
                'filter',
                'output',
                'other',
                'open',
            ],
            '/fx/': [
                '',
                'search',
                'write',
            ],
            '/link/': [
                '',
                'scenarios'
            ],
            '/faq/': [
                '',
            ],

        }
    }
}
