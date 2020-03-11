// 本文件是用来修改nextjs默认环境的地方，每个页面都回去渲染这个组件，这是个渲染组件，
// import App from "next/app";
import App, { Container } from "next/app";
import "antd/dist/antd.css";
import { Provider } from "react-redux";

import Layout from "../components/Layout";
import MyContext from "../lib/my-context";
import WithReduxApp from "../lib/with-redux";
class MyApp extends App {
  state = {
    context: "value"
  };
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
      <Layout>
        <Provider store={reduxStore}>
          <MyContext.Provider value={this.state.context}>
            <Component {...pageProps} />
          </MyContext.Provider>
        </Provider>
      </Layout>
    );
  }
}
export default WithReduxApp(MyApp);
