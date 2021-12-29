import { Col, Grid, Row } from 'antd';
import { ReactNode } from 'react';
import layout from '#/assets/images/layout.png';

interface Props {
  children: ReactNode;
}

function AuthLayout({ children }: Props) {
  const { md } = Grid.useBreakpoint();
  return (
    <Row className="h-screen">
      {md && (
        <Col md={16} sm={0} xs={0} className="center2 flex bg-surface">
          <img src={layout} alt="pik-that" />
        </Col>
      )}
      <Col md={8} sm={24} xs={24} className="p-10 mt-24 leading-normal">
        {children}
      </Col>
    </Row>
  );
}

export default AuthLayout;
