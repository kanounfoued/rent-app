import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Link } from 'react-router-dom';

type Props = {
  items: { title: string; link?: string }[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <AntdBreadcrumb
      className="px-4 py-2 rounded-[8px] bg-[var(--color-accent-10)]"
      items={items.map(({ title, link }) => {
        if (link === undefined || link === '')
          return { title: <span className="capitalize">{title}</span> };

        return {
          title: <Link to={`${link}`}>{title}</Link>,
        };
      })}
    />
  );
}
