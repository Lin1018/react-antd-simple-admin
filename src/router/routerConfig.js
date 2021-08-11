import Home from '../pages/home'
import Setting from '../pages/setting'
import One from '../pages/setting/one'
import Two from '../pages/setting/two'

const routerConfig = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: Home,
    children: []
  },
  {
    path: '/setting',
    title: '设置中心',
    component: Setting,
    children: [{
      path: '/one',
      title: '设置1',
      component: One,
      children: []
    }, {
      path: '/two',
      title: '设置2',
      component: Two,
      children: [],
      hidden: true
    }]
  }
]

export default routerConfig