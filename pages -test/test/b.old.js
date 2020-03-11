import React, {
  useState,
  useEffect,
  useReducer,
  useLayoutEffect,
  useContext,
  useRef,
  memo,
  useMemo,
  useCallback
} from "react";
import MyContext from "../../lib/my-context";

function countReducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCountFunc() {
  //   const [count, setCount] = useState(0);
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState("lyn");
  const context = useContext(MyContext);
  const inputRef = useRef();
  // countRef.current = count;
  //   const handleAlertButtonClick = () => {
  //     setTimeout(() => {
  //       // alert(count)
  //       alert(countRef.current);
  //     }, 2000);
  //   };
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // 拿到的值永远是最新的值，避免闭包陷阱
  //       //   setCount(c => c + 1);
  //       dispatchCount({ type: "minus" });
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  useEffect(() => {
    // 每次有渲染，就先执行return，再执行回调;;一旦用到了某一个state就要当做第二个参数传入，作为依赖，useEffect会判断是否根据依赖更新
    console.log("effect invokeed");
    console.log(inputRef);
    return () => console.log("effect detected");
  }, [count]);
  // useLayoutEffect dom出来前更新内容；里面需要存放很多要等待很长时间的代码，若非需要，尽量不使用
  //   useLayoutEffect(() => {
  //     // 每次有渲染，就先执行return，再执行回调;;一旦用到了某一个state就要当做第二个参数传入，作为依赖，useEffect会判断是否根据依赖更新
  //     console.log("useLayoutEffect invokeed");
  //     return () => console.log("useLayoutEffect detected");
  //   }, [count]);
  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <span>{count}</span>
      {/* <Child config={config} onButtonClick={handleButtonClick}></Child> */}
      <button onClick={() => dispatchCount({ type: "minus" })}>{count}</button>
      <p>{context}</p>
    </div>
  );
}
export default MyCountFunc;
class MyCount extends React.Component {
  state = {
    count: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    this.interval ? clearInterval(this.interval) : null;
  }
  render() {
    return <span>{count}</span>;
  }
}
