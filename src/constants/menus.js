export const menus = [
    { link: '/app/dashboard/home', title: '首页', icon: 'mobile' },
    {
        link: '/app/self',
        title: '测试demo',
        icon: 'safety',
        sub: [
            { link: '/app/self/page1', title: 'Page1', icon: '' },
            { link: '/app/self/counter', title: 'counter', icon: '' },
            { link: '/app/self/userinfo', title: 'userinfo', icon: '' },
            { link: '/app/self/login', title: 'login', icon: '' },
        ],
    },
    {
        link: '/app/auth',
        title: '权限管理',
        icon: 'safety',
        sub: [
            { link: '/app/auth/basic', title: '基础演示', icon: '' },
            { link: '/app/auth/routerEnter', title: '路由拦截', icon: '' },
        ],
    },
]
