"use client";

import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Services", href: "/services" },
];

const Navbar = ({
  hasSider,
  session,
}: {
  hasSider: boolean;
  session: boolean;
}) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
    router.push("/login");
  };

  return (
    <Layout className="layout shadow-lg">
      <Header className="flex items-center py-8 bg-white ">
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden mr-2"
            onClick={() => {
              dispatch(showSidebarDrawer());
            }}
          >
            <MenuOutlined />
          </Button>
        )}
        <Content>
          <Link href="/">
            <Title
              className={`m-0 text-2xl flex items-center ${hasSider && "text-center lg:text-left"
                }`}
            >
              <p className="m-0 ml-2">iRepair</p>
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          {session ? (
            <>
              <Menu.Item key={"/dashboard"}>
                <Link href={"/dashboard"}>Dashboard</Link>
              </Menu.Item>
              <Button
                className="ml-4"
                ghost
                size="large"
                type="primary"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              className="ml-4"
              ghost
              size="large"
              type="primary"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          )}
        </Menu>

        <Button
          type="primary"
          className="lg:hidden inline"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} visible={open}>
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
