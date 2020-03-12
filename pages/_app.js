// 本文件是用来修改nextjs默认环境的地方，每个页面都回去渲染这个组件，这是个渲染组件，
// import App from "next/app";
import App, { Container } from "next/app";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import Router from "next/router";
import Link from "next/link";

import Layout from "../components/Layout";
import MyContext from "../lib/my-context";
import WithReduxApp from "../lib/with-redux";
import PageLoading from "../components/PageLoading";
class MyApp extends App {
  state = {
    context: "value",
    loading: false
  };

  startLoading = () => {
    this.setState({
      loading: true
    });
  };

  stopLoading = () => {
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    Router.events.on("routeChangeStart", this.startLoading);
    Router.events.on("routeChangeComplete", this.stopLoading);
    Router.events.on("routeChangeError", this.stopLoading);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", this.startLoading);
    Router.events.off("routeChangeComplete", this.stopLoading);
    Router.events.off("routeChangeError", this.stopLoading);
  }

  static async getInitialProps(ctx) {
    const { Component } = ctx;
    console.log("app init");

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    // console.log(Component, pageProps);
    return (
      <Provider store={reduxStore}>
        {/* 因为是一个全局的遮罩层，是fixed的的组件 ，放layout上面*/}
        <PageLoading />
        <Layout>
          {this.state.loading ? <PageLoading /> : null}
          <Layout>
            <Link href="/">
              <a>index</a>
            </Link>
            <Link href="/detail">
              <a>detail</a>
            </Link>
            <Component {...pageProps} />
          </Layout>
        </Layout>
      </Provider>
    );
  }
}
export default WithReduxApp(MyApp);
