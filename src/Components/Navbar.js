import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  KeyOutlined,
  CheckOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDropdown from "./AdminDropdown";

const { Header } = Layout;

function Navbar() {
  const authenticated = useSelector((state) => state.authenticated);
  return (
    <Header
      style={{
        color: "#fff",
        height: 64,
        paddingInline: 50,
        lineHeight: "64px",
      }}
    >
      <div className="logo">
        <Link to="/"> MFLIX </Link>
      </div>
      <Menu
        mode="horizontal"
        theme="dark"
        selectable="false"
        style={{ height: 64 }}
        items={[
          {
            label: <Link to="/"> Home </Link>,
            key: "home",
            icon: <HomeOutlined />,
          },
          {
            label: <Link to="/Users">Users</Link>,
            key: "Users",
            icon: <UserOutlined />,
          },
          {
            label: <Link to="/Movies">Movies</Link>,
            key: "Movies",
            icon: <VideoCameraOutlined />,
          },
          {
            label: authenticated ? (
              <AdminDropdown />
            ) : (
              <Link to="/Login" className="login">
                Login
              </Link>
            ),
            key: "login",
            icon: authenticated ? <CheckOutlined /> : <KeyOutlined />,
            style: { marginLeft: "auto" },
          },
        ]}
      />
    </Header>
  );
}

export default Navbar;
