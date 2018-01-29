export const menus = [
  { key: '/app/dashboard/home', title: '首页', icon: 'mobile' },
  {
    key: '/app/self',
    title: '测试demo',
    icon: 'safety',
    sub: [
      { key: '/app/self/page1', title: 'Page1', icon: '' },
      { key: '/app/self/counter', title: 'counter', icon: '' },
      { key: '/app/self/userinfo', title: 'userinfo', icon: '' },
      { key: '/app/self/login', title: 'login', icon: '' },
    ],
  },
  {
    key: '/app/auth',
    title: '权限管理',
    icon: 'safety',
    sub: [
      { key: '/app/auth/basic', title: '基础演示', icon: '' },
      { key: '/app/auth/routerEnter', title: '路由拦截', icon: '' },
    ],
  },
]
