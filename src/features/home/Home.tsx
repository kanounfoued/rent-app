import { Layout } from 'antd';
import NavigationMenu from 'components/Menu/NavigationMenu';
import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeSider from './HomeSider';

const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout className="h-screen">
      <Layout>
        <HomeSider />
        <Layout>
          <Content className="min-h-[280px] m-0 h-full overflow-y-auto p-6 pb-24">
            <Outlet />
            <NavigationMenu />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
