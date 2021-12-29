import {
  BellOutlined,
  CarOutlined,
  DashboardOutlined,
  GiftOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ProLayout from '@ant-design/pro-layout';
import { Route } from '@ant-design/pro-layout/es/typings';
import { MenuHeader, MenuSidebarItem } from '@base-projects/web-uikit';
import { Alert } from 'antd';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import RightContentHeader, { UserInfo } from './RightContentHeader';
import { appConfig } from '#/configs/config';

const ROUTES: Route = {
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      icon: <DashboardOutlined />,
    },
    {
      path: '/orders',
      name: 'Orders',
      icon: <UnorderedListOutlined />,
    },
    {
      path: '/users',
      name: 'Users',
      icon: <UserOutlined />,
    },
    {
      path: '/drivers',
      name: 'Drivers',
      icon: <CarOutlined />,
    },
    {
      path: '/notifications',
      name: 'Notifications',
      icon: <BellOutlined />,
    },
    {
      path: '/promotions',
      name: 'Promotions',
      icon: <GiftOutlined />,
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: <SettingOutlined />,
    },
  ],
};

interface Props {
  logout: () => void;
  userInfo: UserInfo;
}

function PrivateLayout({
  children,
  logout,
  userInfo,
}: React.PropsWithChildren<Props>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = useLocation().pathname;
  const settings = {
    colorWeak: false,
    title: appConfig.title,
    headerHeight: 60,
    fixedHeader: true,
    fixSiderbar: true,
    navTheme: 'light' as const,
  };
  return (
    <div className="h-screen">
      <ProLayout
        route={ROUTES}
        logo={appConfig.logo}
        location={{
          pathname,
        }}
        menuHeaderRender={MenuHeader}
        menuItemRender={MenuSidebarItem}
        rightContentRender={() => (
          <RightContentHeader
            logout={logout}
            userInfo={userInfo}
            isCollapsed={isCollapsed}
            setCollapse={setIsCollapsed}
          />
        )}
        collapsedButtonRender={false}
        collapsed={isCollapsed}
        onCollapse={setIsCollapsed}
        {...settings}
      >
        <Alert.ErrorBoundary>{children}</Alert.ErrorBoundary>
      </ProLayout>
    </div>
  );
}

export default PrivateLayout;
