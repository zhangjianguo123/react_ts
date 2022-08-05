import { useRoutes, HashRouter, Link, useLocation } from 'react-router-dom'
import router from './router/index'
import styled from 'styled-components';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
// import Foot from './Layout/Foot';
// import Headers from './Layout/Header';
import MenuTree from './Layout/MenuTree';

const Appcss = styled.div`
  height: 100%;
  .ant-layout {
    height:100%;
  }
  #components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

/* #components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
} */

.site-layout .site-layout-background {
  background: #fff;
  padding: 20px 0;
  font-size: 22px;
}
.ant-layout-sider-dark {
  padding: 20px 0;
}
.ant-menu-dark {
  font-size: 18px;
}
.ant-breadcrumb {
  margin: 10px 0 0 24px;
}
`


const { Header, Sider, Content, Footer } = Layout;

function App() {
  const breadcrumbNameMap: any = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  console.log('最后的', extraBreadcrumbItems);
    const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);




  return <Appcss>
    <Layout>
        {/* <div className="logo" /> */}
        <MenuTree></MenuTree>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
        </Header>
        <Breadcrumb separator=">">
          {breadcrumbItems}
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            margin: '10px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {useRoutes(router)}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Appcss>
}

export default App;




// import { Alert, Breadcrumb } from 'antd';
// import React from 'react';
// import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

// const Apps = () => (
//   <ul className="app-list">
//     <li>
//       <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
//     </li>
//     <li>
//       <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
//     </li>
//   </ul>
// );

// const breadcrumbNameMap = {
//   '/apps': 'Application List',
//   '/apps/1': 'Application1',
//   '/apps/2': 'Application2',
//   '/apps/1/detail': 'Detail',
//   '/apps/2/detail': 'Detail',
// };

// const Home = () => {
//   const location = useLocation();
//   const pathSnippets = location.pathname.split('/').filter((i) => i);
//   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//     const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
//     return (
//       <Breadcrumb.Item key={url}>
//         <Link to={url}>{breadcrumbNameMap[url]}</Link>
//       </Breadcrumb.Item>
//     );
//   });
//   const breadcrumbItems = [
//     <Breadcrumb.Item key="home">
//       <Link to="/">Home</Link>
//     </Breadcrumb.Item>,
//   ].concat(extraBreadcrumbItems);
//   return (
//     <div className="demo">
//       <div className="demo-nav">
//         <Link to="/">Home</Link>
//         <Link to="/apps">Application List</Link>
//       </div>
//       <Routes>
//         <Route path="/apps" element={<Apps />} />
//         <Route path="*" element={<span>Home Page</span>} />
//       </Routes>
//       <Alert
//         style={{
//           margin: '16px 0',
//         }}
//         message="Click the navigation above to switch:"
//       />
//       <Breadcrumb>{breadcrumbItems}</Breadcrumb>
//     </div>
//   );
// };

// const App = () => (
//   <HashRouter>
//     <Home />
//   </HashRouter>
// );

// export default App