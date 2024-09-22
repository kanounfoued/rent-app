import { MenuProps } from 'antd';
import BrowseIcon from 'assets/icons/BrowseIcon';
import ContractIcon from 'assets/icons/ContractIcon';
import FavoriteIcon from 'assets/icons/FavoriteIcon';
import PropertyIcon from 'assets/icons/PropertyIcon';
import TransactionIcon from 'assets/icons/TransactionIcon';
import SiderMenu from 'components/Menu/SiderMenu';

const menuItemClassName =
  '!flex !flex-row-reverse justify-between items-center';

const propertyItems: MenuProps['items'] = [
  {
    key: 'browse',
    icon: <BrowseIcon />,
    label: 'browse',
    className: menuItemClassName,
  },
  {
    key: 'me',
    icon: <PropertyIcon />,
    label: 'my properties',
    className: menuItemClassName,
  },
  {
    key: 'favorite',
    icon: <FavoriteIcon />,
    label: 'favorites',
    className: menuItemClassName,
  },
];

const contractItems: MenuProps['items'] = [
  {
    key: 'me',
    icon: <ContractIcon />,
    label: 'contracts',
    className: menuItemClassName,
  },
];

const transactionItems: MenuProps['items'] = [
  {
    key: 'me',
    icon: <TransactionIcon />,
    label: 'transactions',
    className: menuItemClassName,
  },
];

type Props = {
  route: string;
  isAccountMenuSelectable: boolean;
  activeMenuItem: string;
};

export default function HomeSiderFactory({
  route,
  isAccountMenuSelectable,
  activeMenuItem,
}: Props) {
  if (isAccountMenuSelectable) return null;

  switch (route) {
    case 'property':
      return (
        <SiderMenu
          items={propertyItems}
          activeMenuItem={activeMenuItem}
          isAccountMenuSelectable={isAccountMenuSelectable}
          title="property"
          baseUrl="property"
        />
      );

    case 'contract':
      return (
        <SiderMenu
          items={contractItems}
          activeMenuItem={activeMenuItem}
          isAccountMenuSelectable={isAccountMenuSelectable}
          title="contract"
          baseUrl="contract"
        />
      );

    case 'transaction':
      return (
        <SiderMenu
          items={transactionItems}
          activeMenuItem={activeMenuItem}
          isAccountMenuSelectable={isAccountMenuSelectable}
          title="transaction"
          baseUrl="transaction"
        />
      );

    default:
      return null;
  }
}
