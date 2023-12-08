
"use client"
import { useRef, useState } from "react";

function CustomButton() {
  return (
    <button className="bg-blue-500 p-3 text-white">blue button</button>
  );
}
// export default function App() {
//   const user = "Lily";
//   return <>
//     <h1>Welcome! {user}</h1>
//     <CustomButton />
//   </>

// }


export default function App() {
  return <>
    <div className="b">useState</div>
    <Counter />
    <div className="b">useRef</div>
    <CounterRef></CounterRef>
  </>

}
function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    //  count = count + 1;
    //setCount(count + 1); //為避免資料競爭，建議可以改用以下用法，setState 中有一個參數可以引用先前的狀態
    setCount((prev) => prev + 1);//更安全可靠的更新方式
    console.log("count", count) //這邊會是舊值
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


function CounterRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
