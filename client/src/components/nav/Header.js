import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    DashboardOutlined,
    ContactsOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
    const [current, setCurrent] = useState("home");

    let dispatch = useDispatch();
    let { user, cart } = useSelector((state) => ({ ...state }));

    let history = useHistory();

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
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
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            className="px-5 pt-2 pb-0 main-header"
        >
            <Item
                key="home"
                icon={<AppstoreOutlined />}
                className="mr-2 ml-4 pr-3"
            >
                <Link to="/">Home</Link>
            </Item>

            <Item key="shop" icon={<ShoppingOutlined />} className="mx-1 pr-3">
                <Link to="/shop">Shop</Link>
            </Item>

            <Item key="about" icon={<ProfileOutlined />} className="mx-1 pr-3">
                <Link to="/shop">About</Link>
            </Item>

            <Item
                key="contact"
                icon={<ContactsOutlined />}
                className="mx-1 pr-3"
            >
                <Link to="/shop">Contact Us</Link>
            </Item>

            {!user && (
                <Item
                    key="register"
                    icon={<UserAddOutlined />}
                    className="float-right"
                >
                    <Link to="/register">Register</Link>
                </Item>
            )}

            {!user && (
                <Item
                    key="login"
                    icon={<UserOutlined />}
                    className="float-right"
                >
                    <Link to="/login">Login</Link>
                </Item>
            )}

            {user && (
                <SubMenu
                    icon={<SettingOutlined />}
                    title={user.email && user.email.split("@")[0]}
                    className="float-right"
                >
                    {user && user.role === "subscriber" && (
                        <Item icon={<DashboardOutlined />}>
                            <Link to="/user/history">Dashboard</Link>
                        </Item>
                    )}

                    {user && user.role === "admin" && (
                        <Item
                            icon={<DashboardOutlined />}
                            className="py-0 my-0"
                        >
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </Item>
                    )}

                    <Item
                        icon={<LogoutOutlined />}
                        onClick={logout}
                        className="py-0 my-0"
                    >
                        Logout
                    </Item>
                </SubMenu>
            )}
            <Item
                key="cart"
                icon={<ShoppingCartOutlined />}
                className="mx-1 pr-3 ml-2"
            >
                <Link to="/cart">
                    <Badge count={cart.length} offset={[9, 0]}>
                        Cart
                    </Badge>
                </Link>
            </Item>

            <span className="float-right p-1 mr-2">
                <Search />
            </span>
        </Menu>
    );
};

export default Header;
