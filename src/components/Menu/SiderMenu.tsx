import { Menu, MenuProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

type Props = {
  activeMenuItem: string;
  isAccountMenuSelectable: boolean;
  items: MenuProps['items'];
  title: string;
  baseUrl: string;
};

export default function SiderMenu({
  activeMenuItem,
  isAccountMenuSelectable,
  items,
  title,
  baseUrl,
}: Props) {
  const navigate = useNavigate();

  const onMenuClick: MenuProps['onClick'] = (e) => {
    navigate(`${baseUrl}/${e.key}`);
  };

  return (
    <>
      <Typography.Title className="pl-2 capitalize !text-xs" level={3}>
        {title}
      </Typography.Title>
      <Menu
        className="capitalize flex-1 !border-r-0"
        mode="vertical"
        selectedKeys={!isAccountMenuSelectable ? [activeMenuItem] : []}
        items={items}
        onClick={onMenuClick}
      />
    </>
  );
}
