import { Button, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import NotificationPopup from './NotificationPopup';
import { Avatar } from '#/shared/components/common';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';

export interface UserInfo {
  fullName: string;
  userType: string;
  avatar: string;
  id: string;
}
interface Props {
  logout: () => void;
  userInfo: UserInfo;
  setCollapse: (value: boolean) => void;
  isCollapsed: boolean;
}

function RightContentHeader({
  logout,
  userInfo: { fullName, userType, avatar, id },
  setCollapse,
  isCollapsed,
}: Props) {
  const { t } = useTypeSafeTranslation();
  const navigate = useNavigate();

  const redirectToInfoPage = () => {
    navigate('/me');
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={redirectToInfoPage} key="userInfo">
        {t('header.info')}
      </Menu.Item>
      <Menu.Item onClick={logout} key="logout">
        {t('header.logout')}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex spaced w-full">
      <div className="items-center">
        <Button
          type="text"
          size="small"
          className="border-none mt-5"
          onClick={() => setCollapse(!isCollapsed)}
        >
          {isCollapsed ? (
            <MenuUnfoldOutlined className="text-lg" />
          ) : (
            <MenuFoldOutlined className="text-lg" />
          )}
        </Button>
      </div>
      <div className="flex">
        <NotificationPopup userId={id} />
        <Dropdown overlay={menu}>
          <div className="flex items-center">
            <div className="flex vert items-end leading-tight mr-2">
              <strong>{fullName}</strong>
              <p className="text-xs">{userType}</p>
            </div>
            <Avatar size="large" src={avatar} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default RightContentHeader;
