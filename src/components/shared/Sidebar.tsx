"use client";

import { RootState } from "@/redux/store";
import { onSidebarClose } from "../../redux/slices/sidebarSlice";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector, } from "react-redux";
const { Content, Sider } = Layout;

type TState = {
    state: {
        sidebar: boolean
    }
}

const Sidebar = ({
    children,
}: { children: React.ReactNode }) => {

    const adminItems = [
        { key: "1", label: "Dashboard", href: "/dashboard" },
        { key: "2", label: "Add New Service", href: "/admin/add-service" },
        { key: "3", label: "Manage Services", href: "/admin/manage-services" },
    ];

    const open = useSelector((state: RootState) => state.sidebar.open)
    const dispatch = useDispatch();
    const pathname = usePathname();
    const getSelectedKey = () => {
        return (
            adminItems.find((item) => item.href === pathname)?.key || ""
        )
    };

    return (
        <Layout>
            <Content>
                <Layout className="lg:flex hidden">
                    <Sider width={250} className="min-h-screen bg-blue-900 m-6 py-2 rounded-xl">
                        <Menu
                            className="h-full px-3 font-semibold text-white bg-transparent py-1"
                            mode="inline"
                            defaultSelectedKeys={[getSelectedKey()]}
                            selectedKeys={[getSelectedKey()]}
                        >
                            {
                                adminItems?.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Sider>
                    <Content className=" p-6 pl-0 min-h-screen">{children}</Content>
                </Layout>
                <Layout className="lg:hidden">
                    <Drawer
                        title="Dashboard"
                        placement="left"
                        onClose={() => {
                            dispatch(onSidebarClose());
                        }}
                        visible={open}
                    >
                        <Menu
                            className="h-full px-3"
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                        >
                            {
                                adminItems?.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Drawer>
                    <Content className="bg-gray-950 p-4 min-h-screen">{children}</Content>
                </Layout>
            </Content>
        </Layout>
    );
};

export default Sidebar;
