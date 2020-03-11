// import Comp from "../components/comp";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import dynamic from "next/dynamic";

// import moment from "moment";
// 异步加载组件，等到真正执行渲的时候才会加载
const Comp = dynamic(import("../components/comp"));

const Title = styled.h1`
  color: green;
  font-size: 23px;
`;
const color = "pink";
const A = ({ router, name, time }) => (
  <>
    <Title>This is title {time}</Title>
    <Comp />
    <Link href="#aaa">
      <a className="link">
        A{router.query.id}&nbsp;{name}
      </a>
    </Link>
    <style jsx>{`
      a {
        color: green;
      }
      .link {
        color: ${color};
      }
    `}</style>
  </>
);
// next会在路由成功切换之前去调用组件上的getinit，拿到return的内容作为props，去渲染该组件
// nextjs是在等数据加载完了再去显示页面
A.getInitialProps = async ctx => {
  console.log("11111111111111111");
  const moment = await import("moment");

  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "aaaaaa",
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      });
    }, 1000);
  });
  return await promise;
  //   return {
  //     name: "aaaaaaa"
  //   };
};
export default withRouter(A);
