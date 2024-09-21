import { Layout, Menu, MenuProps, Typography } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import BrowseIcon from 'assets/icons/BrowseIcon';
import ContractIcon from 'assets/icons/ContractIcon';
import FavoriteIcon from 'assets/icons/FavoriteIcon';
import LogoutIcon from 'assets/icons/LogoutIcon';
import PropertyIcon from 'assets/icons/PropertyIcon';
import SettingIcon from 'assets/icons/SettingIcon';
import TransactionIcon from 'assets/icons/TransactionIcon';
import UserIcon from 'assets/icons/UserIcon';
import { cx } from 'class-variance-authority';
import LogoIcon from 'components/LogoIcon';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const menuItemClassName = '!flex !flex-row-reverse	justify-between items-center';

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

const propertyItems: MenuProps['items'] = [
  {
    key: 'property',
    icon: <BrowseIcon />,
    label: 'browse',
    className: menuItemClassName,
  },
  {
    key: 'property/me',
    icon: <PropertyIcon />,
    label: 'my properties',
    className: menuItemClassName,
  },
  {
    key: 'property/favorite',
    icon: <FavoriteIcon />,
    label: 'favorites',
    className: menuItemClassName,
  },
];

const contractItems: MenuProps['items'] = [
  {
    key: 'contract',
    icon: <ContractIcon />,
    label: 'contracts',
    className: menuItemClassName,
  },
  {
    key: 'contract/me',
    icon: <ContractIcon />,
    label: 'my contracts',
    className: menuItemClassName,
  },
];

const transactionItems: MenuProps['items'] = [
  {
    key: 'transaction',
    icon: <TransactionIcon />,
    label: 'transactions',
    className: menuItemClassName,
  },
  {
    key: 'transaction/me',
    icon: <TransactionIcon />,
    label: 'my transactions',
    className: menuItemClassName,
  },
];

export default function HomeSider() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeMenuItem = pathname.split('/')[1];
  const [activeItem, setActiveItem] = useState(activeMenuItem);

  const onClick: MenuProps['onClick'] = (e) => {
    setActiveItem(e.key);
    navigate(e.key);
  };

  let items: ItemType[] | undefined = [];

  switch (activeMenuItem) {
    case 'property':
      items = propertyItems;
      break;
    case 'contract':
      items = contractItems;
      break;
    case 'transaction':
      items = transactionItems;
      break;
  }

  const showingTitle = ['profile', 'settings', 'logout'].includes(
    activeMenuItem,
  );

  const accountSelectable = ['profile', 'settings', 'logout'].includes(
    activeMenuItem,
  );

  return (
    <Sider className="overflow-auto border-r !min-w-[240px] !w-[240px]">
      <div className="flex flex-col h-full p-2">
        <div className="flex justify-center p-2 mt-4 mb-8">
          <LogoIcon />
        </div>
        <Typography.Title className="pl-2 !text-xs" level={3}>
          Account
        </Typography.Title>
        <Menu
          key={activeMenuItem}
          className={cx('capitalize !border-r-0 mb-8', {
            'flex-1': showingTitle,
          })}
          mode="vertical"
          items={profileItems}
          selectedKeys={accountSelectable ? [activeMenuItem] : []}
          onClick={onClick}
        />

        {!showingTitle ? (
          <>
            <Typography.Title className="pl-2 capitalize !text-xs" level={3}>
              {activeMenuItem}
            </Typography.Title>
            <Menu
              className="capitalize flex-1 !border-r-0"
              mode="vertical"
              // defaultSelectedKeys={[activeMenuItem]}
              selectedKeys={!accountSelectable ? [activeMenuItem] : []}
              items={items}
              onClick={onClick}
            />
          </>
        ) : null}

        <Typography.Title className="pl-2 !text-xs" level={3}>
          Logout
        </Typography.Title>
        <Menu
          className="capitalize !border-r-0 mb-4"
          mode="vertical"
          items={logoutItems}
          onClick={onClick}
        />
      </div>
    </Sider>
  );
}
