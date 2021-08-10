import { Link } from 'react-router-dom'
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

function UseHeader() {
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
    <Header theme="light" className="header">
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <div className="top-wrap">
          <Avatar size={32} icon={<UserOutlined />} />
          <span>Chris</span>
        </div>
      </Dropdown>
    </Header>
  )
}

export default UseHeader