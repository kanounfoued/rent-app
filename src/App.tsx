import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { queryClient } from 'hooks/useQuery.hook';
import Router from 'routes/router';

export default function App() {
  const computedStyle = getComputedStyle(document.documentElement);

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          fontFamily: 'Noto Sans',
          borderRadius: 8,
          colorBgBase: computedStyle.getPropertyValue('--color-bg-base'),
          colorTextBase: computedStyle.getPropertyValue('--color-text-base'),
          colorTextHeading: computedStyle.getPropertyValue(
            '--color-text-heading',
          ),
          colorLink: computedStyle.getPropertyValue('--color-primary'),
          colorPrimary: computedStyle.getPropertyValue('--color-primary'),

          colorBorder: computedStyle.getPropertyValue('--color-border'),
          colorBorderSecondary:
            computedStyle.getPropertyValue('--color-border'),
          colorPrimaryBorder: computedStyle.getPropertyValue('--color-border'),
          colorBorderBg: computedStyle.getPropertyValue('--color-border'),

          colorBgLayout: computedStyle.getPropertyValue('--color-bg-layout'),
          colorBgContainer: computedStyle.getPropertyValue(
            '--color-bg-container',
          ),
        },
        components: {
          Layout: {
            headerBg: computedStyle.getPropertyValue('--header-bg'),
            siderBg: computedStyle.getPropertyValue('--sider-bg'),
            footerBg: computedStyle.getPropertyValue('--footer-bg'),
          },
          Button: {
            primaryShadow: computedStyle.getPropertyValue('--box-shadow'),
            // boxShadowSecondary: computedStyle.getPropertyValue('--box-shadow'),
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
