import { Link, withRouter } from 'react-router-dom'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import routerConfig from '../../router/routerConfig';

const { Sider } = Layout;
const { SubMenu } = Menu;

function UseSiderbar(props) {
  let defaultOpenKeys = '/' + props.location.pathname.split('/')[1]
  return (
    <Sider>
      <div className="logo">Chris Admin</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[props.location.pathname]}
        defaultOpenKeys={[defaultOpenKeys]}
        mode="inline"
      >
        {
          routerConfig.map(router => {
            if (router.children && router.children.length > 0) {
              return (
                <SubMenu key={router.path} icon={<SettingOutlined />} title={router.title}>
                  {
                    router.children.map(subRouter => {
                      return (
                        <Menu.Item key={router.path + subRouter.path}>
                          <Link to={router.path + subRouter.path}>{subRouter.title}</Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={router.path} icon={<HomeOutlined />}>
                  <Link to={router.path}>{router.title}</Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </Sider>
  )
}

export default withRouter(UseSiderbar)