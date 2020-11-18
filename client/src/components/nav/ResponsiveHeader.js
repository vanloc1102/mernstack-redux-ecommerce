import React, { useState } from "react";
import { Menu, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ShoppingOutlined,
    ProfileOutlined,
    ContactsOutlined,
    ShoppingCartOutlined,
    UserAddOutlined,
    UserOutlined,
    SettingOutlined,
    DashboardOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

export const ResponsiveHeader = () => {
    const [collapsed, setCollapsed] = useState(false);

    let dispatch = useDispatch();

    let history = useHistory();

    let { user, cart } = useSelector((state) => ({ ...state }));

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        history.push("/login");
    };

    return (
        <div
            style={{ width: 256, position: "fixed", zIndex: 1000 }}
            className="responsive-header"
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{ marginBottom: 10 }}
            >
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
            </Button>
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
            >
                <Item key="home" icon={<AppstoreOutlined />}>
                    <Link to="/">Home</Link>
                </Item>
                <Item key="shop" icon={<ShoppingOutlined />}>
                    <Link to="/shop">Shop</Link>
                </Item>
                <Item key="about" icon={<ProfileOutlined />}>
                    <Link to="/shop">About</Link>
                </Item>
                <Item key="contact" icon={<ContactsOutlined />}>
                    <Link to="/shop">Contact Us</Link>
                </Item>
                <Item key="cart" icon={<ShoppingCartOutlined />}>
                    <Link to="/cart">
                        <Badge count={cart.length} offset={[9, 0]}>
                            Cart
                        </Badge>
                    </Link>
                </Item>
                {!user && (
                    <Item key="register" icon={<UserAddOutlined />}>
                        <Link to="/register">Register</Link>
                    </Item>
                )}
                {!user && (
                    <Item key="login" icon={<UserOutlined />}>
                        <Link to="/login">Login</Link>
                    </Item>
                )}
                {user && (
                    <SubMenu
                        icon={<SettingOutlined />}
                        title={user.email && user.email.split("@")[0]}
                    >
                        {user && user.role === "subscriber" && (
                            <Item icon={<DashboardOutlined />}>
                                <Link to="/user/history">Dashboard</Link>
                            </Item>
                        )}

                        {user && user.role === "admin" && (
                            <Item icon={<DashboardOutlined />}>
                                <Link to="/admin/dashboard">Dashboard</Link>
                            </Item>
                        )}

                        <Item icon={<LogoutOutlined />} onClick={logout}>
                            Logout
                        </Item>
                    </SubMenu>
                )}
            </Menu>
        </div>
    );
};
