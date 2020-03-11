import { useState, useCallback } from "react";

import Link from "next/link";
import {
  Button,
  Layout,
  Icon,
  Input,
  Avatar,
  Tooltip,
  Dropdown,
  Menu
} from "antd";
import getConfig from "next/config";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import axios from "axios";

import Container from "./Container";

import { logout } from "../store/store";
const { publicRuntimeConfig } = getConfig();

const { Header, Content, Footer } = Layout;
// icon 不能直接加样式,,这样的话每次都是用同一个样式，而不是每次渲染重新声明一个方法
const githubIconStyle = {
  color: "white",
  fontSize: 40,
  display: "block",
  paddingTop: 30,
  marginRight: 20
};
const footerStyle = {
  textAlign: "center"
};
function MyLayout({ children, user, logout, router }) {
  // console.log(children);
  const [search, setSearch] = useState("");
  // useCallback只依赖setSearch，setSearch不会变的话，空数组和加了setSearch的效果一样
  const handleSearchChange = useCallback(
    evt => {
      setSearch(evt.target.value);
    },
    [setSearch]
  );

  const handleOnSearch = useCallback(() => {
    router.push(`/search?query=${search}`);
  }, [search]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);
  // 不依赖任何props和state的内容，所以传入空数组
  const handleGoOauth = useCallback(e => {
    e.preventDefault();
    axios
      .get(`/prepare-auth?url=${router.asPath}`)
      .then(resp => {
        if (resp.status === 200) {
          location.href = publicRuntimeConfig.OAUTH_URL;
        } else {
          console.log("prepare auth failed ", resp);
        }
      })
      .catch(err => {
        console.log("prepare auth failed ", err);
      });
  }, []);

  const userDropdown = (
    <Menu>
      <Menu.Item>
        <a href="" onClick={handleLogout}>
          登 出
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header>
        <Container renderer={<div className="header-inner" />}>
          <div className="header-left">
            <div className="logo">
              <Link href="/">
                <Icon type="github" style={githubIconStyle} />
              </Link>
            </div>
            <div>
              <Input.Search
                placeholder="搜索仓库"
                value={search}
                onChange={handleSearchChange}
                onSearch={handleOnSearch}
              />
            </div>
          </div>
          <div className="header-right">
            <div className="user">
              {user && user.id ? (
                <Dropdown overlay={userDropdown}>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <Avatar size={40} src={user.avatar_url} />
                  </a>
                </Dropdown>
              ) : (
                <Tooltip title="点击进行登录">
                  <a
                    href={publicRuntimeConfig.OAUTH_URL}
                    onClick={handleGoOauth}
                  >
                    <Avatar size={40} icon="user" />
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        </Container>
      </Header>
      <Content> indexlalalal</Content>
      <Footer style={footerStyle}>
        develop by dabao @
        <a href="mailto:pistar@foxmail.com ">pistar@foxmail.com</a>
      </Footer>

      <style jsx>{`
        .content {
          color: red;
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
        }

        .header-left {
          display: flex;
          justify-content: flex-start;
        }
      `}</style>

      <style jsx global>{`
        #__next {
          height: 100%;
        }

        .ant-layout {
          min-height: 100%;
        }

        .ant-layout-header {
          padding-left: 0;
          padding-right: 0;
        }

        .ant-layout-content {
          background-color: white;
        }
      `}</style>
    </Layout>
  );
}

export default connect(
  function mapState(state) {
    return {
      user: state.user
    };
  },
  function mapReducer(dispatch) {
    return {
      logout: () => dispatch(logout())
    };
  }
)(withRouter(MyLayout));
