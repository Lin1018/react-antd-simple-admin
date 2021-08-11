import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import routerConfig from '../../router/routerConfig';

const { Sider } = Layout;
const { SubMenu } = Menu;

class UseSiderbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultOpenKeys: '/' + props.location.pathname.split('/')[1],
      collapsed: false
    }
  }
  
  render() {
    let props = this.props
    return (
      <Sider width={220} trigger={null} collapsible collapsed={props.collapsed}>
        <div className="logo">
          {
            !props.collapsed ? 'Chris Admin' : 'Chris'
          }
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[props.location.pathname]}
          defaultOpenKeys={[this.state.defaultOpenKeys]}
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
                          !subRouter.hidden ? 
                          <Menu.Item key={router.path + subRouter.path}>
                            <Link to={router.path + subRouter.path}>{subRouter.title}</Link>
                          </Menu.Item> : ''
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
}

const stateToProps = (state) => {
  return {
    collapsed: state.collapsed
  }
}

export default connect(stateToProps)(withRouter(UseSiderbar))