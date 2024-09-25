import { Affix, Menu, MenuProps } from 'antd';
import ContractIcon from 'assets/icons/ContractIcon';
import PropertyIcon from 'assets/icons/PropertyIcon';
import TransactionIcon from 'assets/icons/TransactionIcon';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BaseRoutes } from 'routes/routes';
import { useIntersectionObserver, useResizeObserver } from 'usehooks-ts';
import './navigationMenu.css';

type MenuItem = Required<MenuProps>['items'][number];

const iconSize = '40px';

const items: MenuItem[] = [
  {
    key: 'property',
    icon: <PropertyIcon height={iconSize} width={iconSize} />,
  },
  {
    key: 'contract',
    icon: <ContractIcon height={iconSize} width={iconSize} />,
  },
  {
    key: 'transaction',
    icon: <TransactionIcon height={iconSize} width={iconSize} />,
  },
];

export default function NavigationMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const ref = useRef<HTMLElement>(document.body as HTMLElement);

  const activeMenuItem = pathname.split('/')[1];

  const { width = 0 } = useResizeObserver({
    ref,
  });

  const { ref: menuRef, entry } = useIntersectionObserver();
  const menuWidth = entry?.boundingClientRect?.width ?? 0;

  const [current, setCurrent] = useState<BaseRoutes>(
    activeMenuItem as BaseRoutes,
  );

  const selectable = !['profile', 'settings', 'logout'].includes(
    activeMenuItem,
  );

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key as BaseRoutes);
    navigate(e.key);
  };

  return (
    <Affix
      className="fixed bottom-[24px] w-auto"
      style={{
        transform: `translateX(${(width - (240 + menuWidth + 48)) / 2}px)`,
      }}
    >
      <div ref={menuRef}>
        <Menu
          className="p-3 h-[70px] border rounded-[1.5rem] bg-[var(--color-accent-50)]"
          items={items}
          onClick={onClick}
          selectedKeys={selectable ? [current] : []}
          mode="horizontal"
        />
      </div>
    </Affix>
  );
}
