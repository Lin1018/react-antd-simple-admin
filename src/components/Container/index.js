import { Layout } from 'antd';
import UseSidebar from './UseSidebar'
import UseHeader from './UseHeader'
import './index.scss'

const { Content } = Layout;

function Container(props) {
  let ContentComponent = props.component
  return (
    <Layout>
      <Layout>
        <UseSidebar />
        <Layout>
          <UseHeader />
          <Content>
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
 
export default Container;