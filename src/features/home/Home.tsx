import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import NavigationMenu from 'components/Menu/NavigationMenu';
import React from 'react';
import { Outlet } from 'react-router-dom';

const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = `${index} + 1`;

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(10).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option-${subKey}`,
      };
    }),
  };
});

const Home: React.FC = () => {
  return (
    <Layout className="h-screen">
      <Layout>
        <Sider className="overflow-auto border-r !min-w-[240px] !w-[240px]">
          <Menu
            className="h-full border-r-0"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items2}
            theme="light"
          />
        </Sider>
        <Layout>
          <Content className="min-h-[280px] m-0 h-full overflow-y-auto p-6">
            <Outlet />
            <NavigationMenu />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
