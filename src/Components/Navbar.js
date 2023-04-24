import React from 'react'
import {Layout, Menu } from 'antd';

const { Header } = Layout;

const headerStyle = {
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
  };

function Navbar() {
  return (
    <Header style={headerStyle}>
        <Menu
        mode="horizontal"
        theme='dark'
        defaultSelectedKeys={['1']}
        // items={[
        //     {
        //     label: <li> Home </li>,
        //     key : "home"
        //     },
        //     { 
        //     label: <li> People </li>,
        //     key : "People"
        //     }
        // ]}
        />
    </Header>
)
}

export default Navbar