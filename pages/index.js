import { useEffect } from "react";
import axios from "axios";

import Router from "next/router";
import { connect } from "react-redux";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete"
];

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  };
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event));
});

// link里的as和router.push中的第二个参数是叫url masking
const Index = ({ counter, username, add, rename }) => {
  function goB() {
    Router.push(
      {
        pathname: "/test/b",
        query: {
          id: 2
        }
      },
      "test/b/2"
    );
  }
  // 第二个传入一个空数组，因为希望触发一次
  useEffect(() => {
    axios.get("/api/user/info").then(resp => {
      console.log(resp);
    });
  }, []);

  return (
    <>
      {/* <h3>Count: {counter}</h3>
      <h3>Username: {username}</h3>
      <input value={username} onChange={e => rename(e.target.value)} />
      <button onClick={() => add(counter)}>do add</button>
      <a href={publicRuntimeConfig.OAUTH_URL}>去登录</a> */}
    </>
  );
};

Index.getInitialProps = async ({ reduxStore }) => {
  // reduxStore.dispatch(add(3));
  return {};
};

export default connect(
  function mapStateToProps(state) {
    return {
      username: state.user.username
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      add: num => dispatch({ type: "ADD", num }),
      rename: name => dispatch({ type: "UPDATE_USERNAME", name })
    };
  }
)(Index);
