import {
  FileTextOutlined,
  HomeOutlined,
  TransactionOutlined,
} from '@ant-design/icons';
import { Affix, Menu, MenuProps } from 'antd';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntersectionObserver, useResizeObserver } from 'usehooks-ts';
import './navigationMenu.css';

type MenuItem = Required<MenuProps>['items'][number];

type BaseRoutes = 'property' | 'contract' | 'transaction';

const items: MenuItem[] = [
  {
    key: 'property',
    icon: <HomeOutlined className="!text-[2.5rem]" />,
  },
  {
    key: 'contract',
    icon: <FileTextOutlined className="!text-[2.5rem]" />,
  },
  {
    key: 'transaction',
    icon: <TransactionOutlined className="!text-[2.5rem]" />,
  },
];

export default function NavigationMenu() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(document.body as HTMLElement);

  const { width = 0 } = useResizeObserver({
    ref,
  });

  const { ref: menuRef, entry } = useIntersectionObserver();
  const menuWidth = entry?.boundingClientRect?.width ?? 0;

  const [current, setCurrent] = useState<BaseRoutes>('property');

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
          className="p-3 h-[70px] border rounded-[1.5rem] bg-[var(--color-accent-10)]"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
        />
      </div>
    </Affix>
  );
}
