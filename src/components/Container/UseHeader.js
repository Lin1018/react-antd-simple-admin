import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {
  TOGGLE_COLLAPSED
} from '../../store/action'

const { Header } = Layout;

class UseHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="https://www.xpxux.com">
            个人博客
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lin1018">
            github
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <Link to='/login'>退出</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className="header">
        {
          this.props.collapsed ? 
          <MenuUnfoldOutlined className="menu-fold" onClick={() => {this.props.toggleCollapsed(!this.props.collapsed)}} /> 
          :
          <MenuFoldOutlined className="menu-fold" onClick={() => {this.props.toggleCollapsed(!this.props.collapsed)}} />
        }
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <div className="user-info">
            <Avatar size={32} icon={<UserOutlined />} />
            <span>Chris</span>
          </div>
        </Dropdown>
      </Header>
    )
  }
}

const stateToProps = (state) => {
  return {
    collapsed: state.collapsed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    toggleCollapsed(value) {
      const action = TOGGLE_COLLAPSED(value)
      dispatch(action)
    }   
  }
}

export default connect(stateToProps, dispatchToProps)(UseHeader)