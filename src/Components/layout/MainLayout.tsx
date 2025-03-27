import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'Dashboard',
              icon: <UserOutlined />,
              label: <NavLink to={'/admin'}>Dashboard</NavLink>,
            },
            {
              key: 'User Management',
              icon: <VideoCameraOutlined />,
              label: 'User Management',
              children:[
                {
                  key: 'Create Admin',
                  icon: <UploadOutlined />,
                  label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>,
                },
                {
                  key: 'Create Faculty',
                  icon: <UploadOutlined />,
                  label: <NavLink to={'/admin/create-faculty'}>Create Faculty</NavLink>,
                },
                {
                  key: 'Create Student',
                  icon: <UploadOutlined />,
                  label: <NavLink to={'/admin/create-student'}>Create Student</NavLink>,
                },
              ]
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Profile',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            <Outlet/>
          </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout