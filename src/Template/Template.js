import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Template.css";
import { Layout, Menu } from "antd";
// import { Home } from '../Pages/Home';
import Sider from "antd/lib/layout/Sider";
import { Users } from "../Pages/Users";
import {
  InfoCircleOutlined,
  PlusSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Item } = Menu;
const { Header, Content, Footer } = Layout;

export const Template = () => {
  return (
    <Layout>
      <Sider>
        <Menu theme="light" selectedKeys="/">
          <Item key="/">
            <Link to="/" className="d-flex align-items-center">
              <UserOutlined />
              <span>Users</span>
            </Link>
          </Item>
          <Item key="/posts">
            <Link to="/posts">
              <PlusSquareOutlined />
              <span>Posts</span>
            </Link>
          </Item>
          <Item key="/details">
            <Link to="/details">
              <InfoCircleOutlined />
              <span>Details</span>
            </Link>
          </Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
          <Switch>
            <Route path="/" render={(props) => <Users />} />
          </Switch>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};
