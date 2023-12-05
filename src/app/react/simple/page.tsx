
"use client"
import { useState } from "react";

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
    <Counter />
  </>

}
function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    //setCount(count + 1); //為避免資料競爭，建議可以改用以下用法，setState 中有一個參數可以引用先前的狀態
    setCount((prev) => prev + 1);//更安全可靠的更新方式
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
