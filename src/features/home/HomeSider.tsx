import { Layout, Menu, MenuProps, Typography } from 'antd';
import LogoutIcon from 'assets/icons/LogoutIcon';
import SettingIcon from 'assets/icons/SettingIcon';
import UserIcon from 'assets/icons/UserIcon';
import { cx } from 'class-variance-authority';
import LogoIcon from 'components/LogoIcon';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeSiderFactory from './HomeSiderFactory';

const { Sider } = Layout;

const menuItemClassName =
  '!flex !flex-row-reverse justify-between items-center';

const profileItems: MenuProps['items'] = [
  {
    key: 'profile',
    icon: <UserIcon />,
    label: 'profile',
    className: menuItemClassName,
  },
  {
    key: 'settings',
    icon: <SettingIcon />,
    label: 'settings',
    className: menuItemClassName,
  },
];

const logoutItems: MenuProps['items'] = [
  {
    key: 'logout',
    icon: <LogoutIcon />,
    label: 'logout',
    className: menuItemClassName,
  },
];

export default function HomeSider() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const baseRoute = pathname.split('/')[1];
  const activeMenuItem = pathname.split('/')[2];

  const onClickStaticRoute: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const isAccountMenuSelectable = ['profile', 'settings', 'logout'].includes(
    baseRoute,
  );

  return (
    <Sider className="overflow-auto border-r !min-w-[240px] !w-[240px]">
      <div className="flex flex-col h-full p-2">
        <div className="flex justify-center p-2 mt-4 mb-8">
          <LogoIcon />
        </div>
        <Typography.Title className="capitalize pl-2 !text-xs" level={3}>
          account
        </Typography.Title>
        <Menu
          key={activeMenuItem}
          className={cx('capitalize !border-r-0 mb-8', {
            'flex-1': isAccountMenuSelectable,
          })}
          mode="vertical"
          items={profileItems}
          selectedKeys={isAccountMenuSelectable ? [baseRoute] : []}
          onClick={onClickStaticRoute}
        />

        <HomeSiderFactory
          route={baseRoute}
          isAccountMenuSelectable={isAccountMenuSelectable}
          activeMenuItem={activeMenuItem}
        />

        <Typography.Title className="pl-2 !text-xs" level={3}>
          Logout
        </Typography.Title>
        <Menu
          className="capitalize !border-r-0 mb-4"
          mode="vertical"
          items={logoutItems}
          onClick={onClickStaticRoute}
        />
      </div>
    </Sider>
  );
}
