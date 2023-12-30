
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
  console.log("🚀 ~ file: page.tsx:21 ~ App ~ App:") //count1＆count2 雖然更變其中一個 state 會重新進來印 log 且"整體渲染“[debug mode 可以發現] 但另一個不會被重置為 0 
  let [count1, setCount1] = useState(0);//應該可以想成只有掛載時才會被設定為 0，有其他 state 改變不會影響它
  let [count2, setCount2] = useState(0);

  function handleClick() {
    setCount1((prev) => prev + 1);//更安全可靠的更新方式
  }

  function handleClick2() {
    setCount2((prev) => prev + 1);//更安全可靠的更新方式
  }
  return <>
    <div className="b">useState
      <button onClick={handleClick} className="bg-blue-100 p-5">count1 {count1} </button>
      <button onClick={handleClick2} className="bg-blue-200 p-5">count2 {count2} </button>
      {/* 包成組件，會發現渲染只有自身而已，這寫法更好 */}
      <Counter />
    </div>

    <div className="b">useRef
      <CounterRef></CounterRef>
    </div>
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
    <button onClick={handleClick} className="bg-red-200 p-5">
      Counter Clicked {count} times
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
