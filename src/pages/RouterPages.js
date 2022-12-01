import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import {CrearTicket} from './CrearTicket'
import {Escritorio} from './Escritorio'
import {Ingresar} from './Ingresar'
import {Cola} from './Cola'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
const { Header, Sider, Content } = Layout;
export const RouterPages = () => {
  return (
    <Router>
    
    <Layout style={{height:'100vh'}}>
    <Sider hidden ={false} trigger={null} collapsible collapsed={false}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <Link to="/">Ingresar</Link>
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to="/escritorio">Escritorio</Link>,
          },
          {
            key: '3',
            icon: <VideoCameraOutlined />,
            label: <Link to="/crearTicket">Crear Ticket</Link>,
          },
          {
            key: '4',
            icon: <VideoCameraOutlined />,
            label: <Link to="/cola">Ver Cola</Link>,
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
       <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/crearTicket" element={<CrearTicket />} />
        <Route path="/cola" element={<Cola/>} />
      </Routes>
      </Content>
    </Layout>
  </Layout>
  </Router>
  )
}
