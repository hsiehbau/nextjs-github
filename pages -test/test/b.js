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
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState("lyn");

  const countRef = useRef();
  countRef.current = count;
  // 不加useMemo时候config每次都会重新渲染，都不一样，所以要缓存一下
  const config = useMemo(
    () => ({
      text: `count is ${count}`,
      color: count > 3 ? "red" : "blue"
    }),
    [count]
  );
  // 如果放在onClick中，每次声明都是声明新的，还是每次都渲染，，方法提出来，然后用useCallback包裹住匿名函数，
  const handleButtonClick = useCallback(
    () => dispatchCount({ type: "add" }),
    []
  );

  const handleAlertButtonClick = () => {
    setTimeout(() => {
      // alert(count)
      alert(countRef.current);
    }, 2000);
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Child config={config} onButtonClick={handleButtonClick}></Child>
      <button onClick={handleAlertButtonClick}>alert count</button>
    </div>
  );
}

const Child = memo(function Child({ onButtonClick, config }) {
  console.log("child render");

  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      {config.text}
    </button>
  );
});

export default MyCountFunc;
