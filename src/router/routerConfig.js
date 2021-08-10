import Home from '../pages/home'
import Setting from '../pages/setting'
import One from '../pages/setting/one'

const routerConfig = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: Home
  },
  {
    path: '/setting',
    title: '设置中心',
    component: Setting,
    children: [{
      path: '/one',
      title: '设置1',
      component: One
    }]
  }
]

export default routerConfig